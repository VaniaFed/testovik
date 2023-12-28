import { ModalQuestionProps } from '@/components/ui/modal/modal-question/props';
import * as yup from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getValidationMessage } from '@/components/ui/modal/modal-question/validation';
import { addQuestion, editQuestion } from '@/reduxjs/modules/tests/actions';
import { Answer } from '@/reduxjs/modules/tests/types';
import { useAppDispatch } from '@/reduxjs/hooks';
import { useState } from 'react';

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

type UseModalQuestionForm = Pick<ModalQuestionProps, 'mode' | 'question' | 'questionType' | 'testId' | 'close'>;

export const useModalQuestionForm = ({ mode, question, questionType, testId, close }: UseModalQuestionForm) => {
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

	const [formError, setFormError] = useState('');

	const dispatch = useAppDispatch();

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

	const handleEditQuestion = (formData: FormFields) => {
		if (!question) {
			return;
		}

		dispatch(
			editQuestion({
				question: {
					title: formData.question,
					answer: formData.answer,
					answers: formData.answers as Answer[],
					question_type: questionType,
				},
				questionId: question.id,
			}),
		);
		console.log('editing question in redux...');
		console.log(formData);
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

	return {
		onFormSubmit,
		getValues,
		register,
		append,
		remove,
		handleSubmit,
		fields,
		formError,
		errors,
	};
};
