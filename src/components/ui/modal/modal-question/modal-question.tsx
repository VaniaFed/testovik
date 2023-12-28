import React from 'react';
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
import { DragDots } from '@/components/ui/icons/drag-dots';
import { Stack } from '@/components/layout/stack';
import { useModalQuestionForm } from '@/components/ui/modal/modal-question/use-modal-question-form';
import styles from './modal-question.module.scss';
import type { FC } from 'react';
import type { ModalQuestionProps } from './props';

const cx = classNames.bind(styles);

export const ModalQuestion: FC<ModalQuestionProps> = ({
	mode,
	question,
	questionType: tempQuestionType,
	testId,
	close,
	className,
}) => {
	const questionType = question?.question_type || tempQuestionType;

	const { register, append, remove, getValues, onFormSubmit, handleSubmit, fields, formError, errors } =
		useModalQuestionForm({
			mode,
			question,
			questionType,
			testId,
			close,
		});

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
