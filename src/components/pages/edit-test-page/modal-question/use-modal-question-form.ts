import { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ModalQuestionProps } from '@/components/pages/edit-test-page/modal-question/props';
import {
	getValidationMessage,
	prepareAnswersToAdd,
	excludeDeletedAnswers,
} from '@/components/pages/edit-test-page/modal-question/validation';
import { useAppDispatch } from '@/reduxjs/hooks';
import { createQuestion, updateQuestion } from '@/reduxjs/modules/tests';
import { updateById } from '@/utils/redux-helpers';
import type { OnDragEndResponder } from 'react-beautiful-dnd';
import type { Answer, MoveAnswerPosition, Question } from '@/reduxjs/modules/tests';
import type { ModalMode } from '@/types/common';

// TODO: пытался
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
				// react-hook-form uses its own <<id>> field,
				// so in order to have answer id remembered, we define <<answerId>>
				answerId: yup.number(),
				position: yup
					.object({
						source: yup.number(),
						destination: yup.number(),
					})
					.notRequired(),
			}),
		),
		answer: yup.number().when('answers', {
			is: (answers: Answer[]) => !answers || !answers.length,
			then: (schema) => schema.required('Это обязательное поле').typeError('Нужно указать число'),
		}),
	})
	.required();

export type FormFields = yup.InferType<typeof schema>;

// зачем это если есть FormFields type?
export type AnswerField = Pick<Answer, 'is_right' | 'text'> & {
	id: string;
	answerId?: number;
	position?: Omit<MoveAnswerPosition, 'id'> | null;
};

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
				return [answer];
			}

			return updateById(prev, answer.id, answer);
		});
	};

	const handleUpdateAnswer = (
		mode: ModalMode,
		answer: AnswerField,
		index: number,
		question: Question | undefined,
	) => {
		if (mode !== 'edit' || !question) {
			return;
		}
		// FIXME: это Answer а не AnswerField но я не уверен
		console.log(answer);
		if (answer.id) {
			handleSetAnswersToUpdate({ id: Number(answer.answerId), is_right: answer.is_right, text: answer.text });
		}

		// saves values to form state
		// if remove, changing << is_right >> after changing << text >> will set << text >> to default value and vice versa
		// if remove, drag&drop causes the same problem
		update(index, {
			answerId: answer.answerId ? Number(answer.id) : undefined,
			text: answer.text,
			is_right: answer.is_right,
			position: answer.position,
		});
	};

	const handleDrag: OnDragEndResponder = (result) => {
		const { source, destination } = result;
		const movedAnswer = fields[source.index];

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
			// после перемещения записываем position
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
		const _answersToUpdate = excludeDeletedAnswers(answersToUpdate, answersToDelete);
		const _answersToMove = excludeDeletedAnswers<MoveAnswerPosition>(answersToMove, answersToDelete);

		// console.log(answersToAdd);

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
		const errorMessage = getValidationMessage(formData, questionType);
		console.log({ errorMessage });

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
		handleUpdateAnswer,
		handleSetAnswersToDelete,
		handleDrag,
		fields,
		errors,
	};
};
