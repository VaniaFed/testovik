import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { ModalQuestionProps } from '@/components/pages/edit-test-page/modal-question/props';
import {
	AnswerField,
	FormFields,
	excludeDeletedAnswers,
	getValidationMessage,
	prepareAnswersToAdd,
	schema,
} from '@/components/pages/edit-test-page/modal-question/validation';
import { useAppDispatch } from '@/reduxjs/hooks';
import { createQuestion, updateQuestion } from '@/reduxjs/modules/tests';
import { updateById } from '@/utils/redux-helpers';

import type { Answer, MoveAnswerPosition } from '@/reduxjs/modules/tests';
import type { InputChangeEvent, InputFocusEvent } from '@/types/common';
import type { OnDragEndResponder } from 'react-beautiful-dnd';

type UseModalQuestionForm = Pick<ModalQuestionProps, 'mode' | 'question' | 'questionType' | 'testId' | 'close'>;

export const useModalQuestionForm = ({ mode, question, questionType, testId, close }: UseModalQuestionForm) => {
	const getAnswersDefaultValues = () => {
		if (questionType === 'number') {
			return undefined;
		}

		if (!question) {
			return [
				{
					text: '',
					is_right: false,
				},
				{
					text: '',
					is_right: false,
				},
			];
		}

		if (question.answers.length) {
			return question.answers.map((answer) => ({ ...answer, answerId: answer.id }));
		}

		return undefined;
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
		setError,
		watch,
		formState: { errors },
		control,
	} = useForm<FormFields>({
		resolver: yupResolver<FormFields>(schema),
		defaultValues,
	});

	const { fields, append, remove, update, move } = useFieldArray({
		name: 'answers',
		control,
	});

	const watchAnswers = watch('answers');

	const [answersToUpdate, setAnswersToUpdate] = useState<Answer[]>([]);
	const [answersToMove, setAnswersToMove] = useState<MoveAnswerPosition[]>([]);
	const [answersToDelete, setAnswersToDelete] = useState<Answer['id'][]>([]);

	const handleSetAnswersToMove = (position: MoveAnswerPosition) => {
		setAnswersToMove((prev) => [...prev, position]);
	};

	const handleSetAnswersToDelete = (id: number) => {
		setAnswersToDelete((prev) => [...prev, id]);
	};

	const handleSetAnswersToUpdate = (answer: Answer) => {
		setAnswersToUpdate((prev) => {
			const isAnswersEmpty = !prev.length;
			const isNewAnswer = !prev.some((ans) => ans.id === answer.id);

			if (isAnswersEmpty || isNewAnswer) {
				return [...prev, answer];
			}

			return updateById(prev, answer.id, answer);
		});
	};

	const handleUpdateAnswer = (
		field: AnswerField,
		index: number,
		text?: string | undefined,
		isRight?: boolean | undefined,
	) => {
		if (mode !== 'edit' || !question) {
			return;
		}

		const answer: AnswerField = {
			...field,
			text: text ?? field.text,
			is_right: isRight ?? field.is_right,
		};

		if (answer.answerId) {
			handleSetAnswersToUpdate({
				id: Number(answer.answerId),
				is_right: answer.is_right as boolean,
				text: answer.text,
			});
		}

		// saves values to form state
		// if remove, changing << is_right >> after changing << text >> will set << text >> to default value and vice versa
		// if remove, drag&drop causes the same problem
		update(index, answer);
	};

	const handleChangeIsRight = (e: InputChangeEvent, field: AnswerField, index: number) => {
		handleUpdateAnswer(field, index, undefined, e.target.checked);
	};

	const handleChangeAnswerText = (e: InputFocusEvent, field: AnswerField, index: number) => {
		if (e.target.value === field.text) {
			return;
		}

		handleUpdateAnswer(field, index, e.target.value);
	};

	const handleDrag: OnDragEndResponder = (result) => {
		const { source, destination } = result;
		const movedAnswer = watchAnswers![source.index];

		if (!destination) {
			return;
		}

		move(source.index, destination.index);

		if (movedAnswer.answerId) {
			handleSetAnswersToMove({
				id: movedAnswer.answerId,
				source: source.index,
				destination: destination.index,
			});
		} else {
			// после перемещения записываем position для еще не созданного answer
			update(destination.index, {
				...movedAnswer,
				position: {
					source: source.index,
					destination: destination.index,
				},
			});
		}
	};

	const dispatch = useAppDispatch();

	const handleAddQuestion = (formData: FormFields) => {
		dispatch(
			createQuestion({
				question: {
					title: formData.question,
					question_type: questionType,
					answer: formData.answer as number,
					answers: prepareAnswersToAdd(formData.answers as AnswerField[]) as Answer[],
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
		const _answersToUpdate = excludeDeletedAnswers(answersToUpdate, answersToDelete);
		const _answersToMove = excludeDeletedAnswers<MoveAnswerPosition>(answersToMove, answersToDelete);

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
				answersToMove: _answersToMove,
				answersToDelete,
			}),
		);

		close();
	};

	const onSubmit: SubmitHandler<FormFields> = (formData) => {
		const errorMessage = getValidationMessage(formData as Required<FormFields>, questionType);

		if (errorMessage) {
			setError('root', { message: errorMessage });
		} else if (mode === 'create') {
			handleAddQuestion(formData);
		} else if (mode === 'edit') {
			handleEditQuestion(formData);
		}
	};

	return {
		register,
		onSubmit,
		getValues,
		setValue,
		append,
		remove,
		handleSubmit,
		handleChangeIsRight,
		handleChangeAnswerText,
		handleSetAnswersToDelete,
		handleDrag,
		fields,
		errors,
	};
};
