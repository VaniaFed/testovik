import { InputChangeEvent, ModalMode, TestMode } from './../../../../types/common';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ModalQuestionProps } from '@/components/pages/edit-test-page/modal-question/props';
import {
	getValidationMessage,
	prepareAnswersToAdd,
	prepareAnswersToUpdate,
} from '@/components/pages/edit-test-page/modal-question/validation';
import { useAppDispatch } from '@/reduxjs/hooks';
import { createQuestion, updateQuestion } from '@/reduxjs/modules/tests';
import type { Answer, Question } from '@/reduxjs/modules/tests';
import { updateById } from '@/utils/redux-helpers';

const schema = yup
	.object({
		question: yup
			.string()
			.min(3, 'Поле слишком короткое')
			.max(90, 'Поле слишком длинное')
			.required('Это обязательное поле'),
		answers: yup.array().of(
			yup.object({
				// react-hook-form uses its own << id >> field,
				// so in order to have answer id remembered, we define << answerId >>
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

export type AnswerField = Pick<Answer, 'is_right' | 'text'> & { id: string; answerId?: number };

type UseModalQuestionForm = Pick<ModalQuestionProps, 'mode' | 'question' | 'questionType' | 'testId' | 'close'>;

export const useModalQuestionForm = ({ mode, question, questionType, testId, close }: UseModalQuestionForm) => {
	const getAnswersDefaultValues = () => {
		return questionType === 'number'
			? []
			: question?.answers && question.answers.length
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
		answer: question?.answer || undefined,
		answers: getAnswersDefaultValues(),
	};

	const {
		register,
		handleSubmit,
		getValues,
		setValue,
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
			const isAnswersEmpty = !oldAnswers.length;
			const isNewAnswer = !oldAnswers.some((ans) => ans.id === answer.id);

			if (isAnswersEmpty || isNewAnswer) {
				return [...oldAnswers, answer];
			}

			return updateById(oldAnswers, answer.id, answer);
		});
	};

	const handleUpdateAnswer = (
		mode: ModalMode,
		answer: Answer,
		index: number,
		question: Question | null | undefined,
	) => {
		if (mode !== 'edit' || !question || !answer.id) {
			return;
		}

		handleSetAnswersToUpdate(answer);

		// it saves values to form state
		// if remove, changing << is_right >> after changing << text >> will set << text >> to the previous value and vice versa
		update(index, {
			answerId: answer.id,
			text: answer.text,
			is_right: answer.is_right,
		});
	};

	const dispatch = useAppDispatch();

	const handleAddQuestion = (formData: FormFields) => {
		dispatch(
			createQuestion({
				question: {
					title: formData.question,
					question_type: questionType,
					answer: formData.answer as number,
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

		const answersToAdd = prepareAnswersToAdd(getValues().answers as AnswerField[]);
		const _answersToUpdate = prepareAnswersToUpdate(answersToUpdate, answersToDelete);

		dispatch(
			updateQuestion({
				question: {
					id: question.id,
					title: formData.question,
					answer: formData.answer as number,
					question_type: questionType,
				},
				answersToAdd,
				answersToUpdate: _answersToUpdate,
				answersToDelete,
			}),
		);

		close();
	};

	const onFormSubmit = (formData: FormFields) => {
		const errorMessage = getValidationMessage(formData, questionType);

		if (errorMessage) {
			setFormError(errorMessage);
		} else if (mode === 'create') {
			handleAddQuestion(formData);
		} else if (mode === 'edit') {
			handleEditQuestion(formData);
		}
	};

	return {
		register,
		onFormSubmit,
		getValues,
		setValue,
		append,
		update,
		remove,
		handleSubmit,
		handleUpdateAnswer,
		handleSetAnswersToDelete,
		fields,
		formError,
		errors,
	};
};
