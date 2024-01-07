import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ModalQuestionProps } from '@/components/ui/modal/modal-question/props';
import {
	checkIfAnswerWasCreated,
	getValidationMessage,
	validateUpdateAnswers,
} from '@/components/ui/modal/modal-question/validation';
import { useAppDispatch } from '@/reduxjs/hooks';
import { createQuestion, updateQuestion } from '@/reduxjs/modules/tests';
import type { Answer } from '@/reduxjs/modules/tests';

const schema = yup
	.object({
		question: yup
			.string()
			.min(3, 'Поле слишком короткое')
			.max(90, 'Поле слишком длинное')
			.required('Это обязательное поле'),
		answers: yup.array().of(
			yup.object({
				answerId: yup.number(),
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
				? question?.answers.map((answer) => ({ ...answer, answerId: answer.id }))
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

	const { fields, append, remove, update, swap } = useFieldArray({
		name: 'answers',
		control,
	});

	const [formError, setFormError] = useState('');
	const [answersToUpdate, setAnswersToUpdate] = useState<Answer[]>([]);
	const [answersToDelete, setAnswersToDelete] = useState<Answer['id'][]>([]);

	const handleSetAnswersToDelete = (id: number) => {
		setAnswersToDelete((prev) => [...prev, id]);
	};

	const handleSetAnswersToUpdate = (answer: Answer) => {
		setAnswersToUpdate((oldAnswers) => {
			const isAnswersEmpty = oldAnswers.length === 0;
			const isNewAnswer = !oldAnswers.some((ans) => ans.id === answer.id);

			if (isAnswersEmpty || isNewAnswer) {
				return [...oldAnswers, answer];
			}

			// FIXME: можно было заюзать функции из redux-helpers, только для этого их нужно сделать чистыми
			// return updateItemById: function (array, item, id): []
			return [
				...oldAnswers.map((ans) => {
					const isTargetAnswer = ans.id === answer.id;
					return isTargetAnswer ? { ...ans, ...answer } : ans;
				}),
			];
		});
	};

	const dispatch = useAppDispatch();

	const handleAddQuestion = (formData: FormFields) => {
		dispatch(
			createQuestion({
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

		// TODO: extract to validation
		const answersToAdd = getValues()
			.answers?.filter(checkIfAnswerWasCreated)
			.map((answer) => ({ text: answer.text, is_right: answer.is_right })) as Omit<Answer, 'id'>[];

		dispatch(
			updateQuestion({
				question: {
					id: question.id,
					title: formData.question,
					answer: formData.answer,
					question_type: questionType,
				},
				answersToAdd,
				answersToUpdate: validateUpdateAnswers(answersToUpdate, answersToDelete),
				answersToDelete,
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

	return {
		onFormSubmit,
		getValues,
		register,
		append,
		update,
		remove,
		handleSubmit,
		handleSetAnswersToUpdate,
		handleSetAnswersToDelete,
		fields,
		formError,
		errors,
	};
};
