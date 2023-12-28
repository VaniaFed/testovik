import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { Modal } from '@/components/ui/modal/modal';
import { Heading } from '@/components/ui/typography/heading';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { PlusBold } from '@/components/ui/icons/plus-bold';
import { Cross } from '@/components/ui/icons/cross';
import { IconButton } from '@/components/ui/icon-button';
import { Label } from '@/components/ui/typography/label';
import { getValidationMessage } from '@/components/ui/modal/modal-question/validation';
import { DragDots } from '@/components/ui/icons/drag-dots';
import { addQuestion, editQuestion } from '@/reduxjs/modules/tests/actions';
import { Stack } from '@/components/layout/stack';
import { Answer } from '@/reduxjs/modules/tests/types';
import { useAppDispatch } from '@/reduxjs/hooks';
import styles from './modal-question.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

const schema = yup
	.object({
		question: yup
			.string()
			.min(3, 'Поле слишком короткое')
			.max(90, 'Поле слишком длинное')
			.required('Это обязательное поле'),
		answers: yup.array().of(
			yup.object({
				text: yup
					.string()
					.min(1, 'Поле слишком короткое')
					.max(90, 'Поле слишком длинное')
					.required('Это обязательное поле'),
				is_right: yup.boolean(),
			}),
		),
		answer: yup.number(),
	})
	.required();

export interface FormFields extends yup.InferType<typeof schema> {}

export const ModalQuestion: FC<Props> = ({
	mode,
	question,
	questionType: tempQuestionType,
	testId,
	close,
	className,
}) => {
	const [formError, setFormError] = useState('');

	const questionType = question?.question_type || tempQuestionType;

	const getAnswersDefaultValues = () => {
		return questionType === 'number'
			? []
			: question?.answers && question.answers.length > 0
				? question?.answers
				: [
						{
							text: '',
							is_right: false,
						},
					];
	};

	const defaultValues = {
		question: mode === 'edit' ? question?.title : '',
		answer: question?.answer || 0,
		answers: getAnswersDefaultValues(),
	};

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
		control,
	} = useForm<FormFields>({
		resolver: yupResolver<FormFields>(schema),
		defaultValues,
	});

	const { fields, append, remove } = useFieldArray({
		name: 'answers',
		control,
	});

	const dispatch = useAppDispatch();

	const handleEditQuestion = (formData: FormFields) => {
		if (!question) {
			return;
		}

		dispatch(
			editQuestion({
				id: question.id,
				title: formData.question,
				answer: formData.answer,
				answers: formData.answers as Answer[],
				question_type: questionType,
			}),
		);
		console.log('editing question in redux...');
		console.log(formData);
		close();
	};

	const handleAddQuestion = (formData: FormFields) => {
		dispatch(
			addQuestion({
				question: {
					title: formData.question,
					question_type: questionType,
					answer: formData.answer,
					answers: formData.answers as Answer[],
				},
				testId,
			}),
		);
		close();
	};

	const onFormSubmit = (formData: FormFields) => {
		const errorMessage = getValidationMessage(formData, questionType, mode);

		if (errorMessage) {
			setFormError(errorMessage);
		} else if (mode === 'create') {
			handleAddQuestion(formData);
		} else if (mode === 'edit') {
			handleEditQuestion(formData);
		}
	};

	const headerTitle = mode === 'create' ? 'Добавить вопрос' : 'Редактирование вопроса';

	return (
		<Modal
			className={cx('modal-question', className)}
			header={<Heading size="1">{headerTitle}</Heading>}
			footer={
				<>
					<Button variant="accent" form="question-form">
						{mode === 'create' ? 'Добавить' : 'Изменить'}
					</Button>
					{questionType !== 'number' && (
						<Button
							type="button"
							onClick={() => append({ text: '' })}
							startIcon={<PlusBold color="white" />}
							variant="secondary">
							Добавить ответ
						</Button>
					)}
				</>
			}
			closable
			closeModal={close}>
			<Form id="question-form" onSubmit={handleSubmit(onFormSubmit)} formError={formError}>
				<Field id="question-form-question" label="Вопрос" errMessage={errors.question?.message}>
					<Input
						id="question-form-question"
						placeholder="Введите вопрос..."
						autoFocus
						{...register('question')}
					/>
				</Field>
				{questionType === 'number' ? <Label>Ответ</Label> : <Label>Ответы</Label>}
				{questionType === 'number' ? (
					<>
						<Field id="question-form-number-answer" errMessage={errors.answer?.message}>
							<Input
								placeholder="Введите ответ..."
								id="question-form-number-answer"
								type="number"
								{...register(`answer`)}
							/>
						</Field>
					</>
				) : (
					<Stack gap="18">
						{fields.map((field, index) => (
							<li key={field.id}>
								<Field
									id={`question-form-answer-${field.id}`}
									leftContent={
										<>
											<IconButton zeroSpacing>
												<DragDots />
											</IconButton>
											<Checkbox {...register(`answers.${index}.is_right`)} checkboxSize="18" />
										</>
									}
									rightContent={
										getValues().answers!.length > 1 && (
											<IconButton zeroSpacing onClick={() => remove(index)}>
												<Cross />
											</IconButton>
										)
									}
									errMessage={errors.answers && errors.answers[index]?.text?.message}>
									<Input
										placeholder="Введите ответ..."
										id={`question-form-answer-${field.id}`}
										{...register(`answers.${index}.text`)}
									/>
								</Field>
							</li>
						))}
					</Stack>
				)}
			</Form>
		</Modal>
	);
};
