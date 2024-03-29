import * as yup from 'yup';

import { AbstractObjectWithId } from '@/types/common';

import type { Answer, QuestionType } from '@/reduxjs/modules/tests';

const answersSchema = yup.object({
	text: yup
		.string()
		.trim()
		.min(1, 'Поле слишком короткое')
		.max(200, 'Поле слишком длинное')
		.required('Это обязательное поле'),
	is_right: yup.boolean().nonNullable(),
	// react-hook-form uses its own <<id>> field,
	// so in order to have answer id remembered, we define <<answerId>>
	answerId: yup.number(),
	position: yup
		.object({
			source: yup.number(),
			destination: yup.number(),
		})
		.notRequired(),
});

export const schema = yup
	.object({
		question: yup
			.string()
			.trim()
			.min(3, 'Поле слишком короткое')
			.max(200, 'Поле слишком длинное')
			.required('Это обязательное поле'),
		answers: yup.array().of(answersSchema),
		answer: yup.number().when('answers', {
			is: (answers: Answer[]) => !answers || !answers.length,
			then: (schema) => schema.required('Это обязательное поле').typeError('Нужно указать число'),
		}),
	})
	.required();

export type FormFields = yup.InferType<typeof schema>;
export type AnswerField = yup.InferType<typeof answersSchema> & { id: string };

export const getValidationMessage = ({ answers }: Required<FormFields>, questionType: QuestionType) => {
	let errorMessage = '';

	const correctAnswers = answers.filter((answer) => answer.is_right);

	if (questionType === 'single' || questionType === 'multiple') {
		if (answers.length < 2) {
			errorMessage = 'Вопрос не может содержать менее 2-х вариантов ответа';
		} else if (!correctAnswers.length) {
			errorMessage = 'Вопрос не может не иметь правильных вариантов ответа';
		}
	}

	if (questionType === 'single') {
		if (correctAnswers.length >= 2) {
			errorMessage = 'Вопрос не может содержать 2 и более правильных вариантов ответа';
		}
	}

	if (questionType === 'multiple') {
		if (correctAnswers.length < 2) {
			errorMessage = 'Вопроса не может содержать менее 2-х правильных вариантов ответа';
		}
	}

	return errorMessage;
};

export const checkIfAnswerWasDeletedWhileEditing = <T extends AbstractObjectWithId>(
	answer: T,
	answersToDelete: Answer['id'][],
) => answersToDelete.some((delAnswer) => delAnswer === answer.id);

export const checkIfAnswerWasCreatedWhileEditing = (answer: AnswerField) =>
	!('answerId' in answer) || answer.answerId === undefined;

export const excludeDeletedAnswers = <T extends AbstractObjectWithId>(answers: T[], answersToDelete: Answer['id'][]) =>
	answers.filter((updAnswer) => !checkIfAnswerWasDeletedWhileEditing(updAnswer, answersToDelete));

const preparePosition = (position: AnswerField['position']) => {
	return position?.destination && position.destination ? position : null;
};
export const prepareAnswersToAdd = (answers: AnswerField[]) =>
	answers.filter(checkIfAnswerWasCreatedWhileEditing).map((answer) => ({
		text: answer.text,
		is_right: answer.is_right,
		position: preparePosition(answer.position),
	})) as Omit<Answer, 'id'>[];
