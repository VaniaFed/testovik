import * as yup from 'yup';
import type { QuestionType } from '@/reduxjs/modules/tests';
import type { Answer } from '@/reduxjs/modules/tests';
import { AbstractObjectWithId } from '@/types/common';

const answersSchema = yup.object({
	text: yup
		.string()
		.trim()
		.min(1, 'Поле слишком короткое')
		.max(90, 'Поле слишком длинное')
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
			.max(90, 'Поле слишком длинное')
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

// TODO: эти проверки спокойно можно вынести в yup
export const getValidationMessage = ({ answers }: FormFields, questionType: QuestionType) => {
	let errorMessage = '';

	if ((questionType !== 'number' && !answers) || !answers?.length) {
		return null;
	}

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
			errorMessage = 'У вопроса не может быть 2 и более правильных вариантов ответа';
		}
	}

	if (questionType === 'multiple') {
		if (correctAnswers.length < 2) {
			errorMessage = 'У вопроса не может быть меньше 2-х правильных вариантов ответа';
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

export const prepareAnswersToAdd = (answers: AnswerField[]) =>
	answers
		.filter(checkIfAnswerWasCreatedWhileEditing)
		.map((answer) => ({ text: answer.text, is_right: answer.is_right, position: answer.position })) as Omit<
		Answer,
		'id'
	>[];
