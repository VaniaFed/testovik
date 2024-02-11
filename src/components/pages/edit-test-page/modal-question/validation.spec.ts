import {
	checkIfAnswerWasCreatedWhileEditing,
	checkIfAnswerWasDeletedWhileEditing,
	prepareAnswersToAdd,
	excludeDeletedAnswers,
} from '@/components/pages/edit-test-page/modal-question/validation';
import type { Answer } from '@/reduxjs/modules/tests';
import type { AnswerField } from '@/components/pages/edit-test-page/modal-question/use-modal-question-form';

describe('add/edit/delete answer logic', () => {
	it('should return true if one of the ids is present in answer.id', () => {
		const deletedId = 1311;
		const answer: Answer = {
			id: deletedId,
			text: '1',
			is_right: false,
		};
		let deletedAnswers = [1, 2, 3, 4, 5];
		expect(checkIfAnswerWasDeletedWhileEditing(answer, deletedAnswers)).not.toBeTruthy();

		deletedAnswers = [1, deletedId, 3];
		expect(checkIfAnswerWasDeletedWhileEditing(answer, deletedAnswers)).toBeTruthy();
	});

	it('should return true if answer has no answerId', () => {
		let answerField: AnswerField = {
			id: '10',
			answerId: 10,
			is_right: false,
			text: 'any text',
		};
		expect(checkIfAnswerWasCreatedWhileEditing(answerField)).not.toBeTruthy();

		answerField = {
			id: '10',
			is_right: false,
			text: 'any text',
		};
		expect(checkIfAnswerWasCreatedWhileEditing(answerField)).toBeTruthy();
	});

	it('should exclude answers that already have been deleted', () => {
		const answers: Answer[] = [
			{
				id: 1,
				text: '1',
				is_right: false,
			},
			{
				id: 2,
				text: '2',
				is_right: true,
			},
			{
				id: 3,
				text: '3',
				is_right: true,
			},
		];

		expect(excludeDeletedAnswers(answers, [1, 2, 3])).toStrictEqual([]);
		expect(excludeDeletedAnswers(answers, [1, 3])).toStrictEqual([
			{
				id: 2,
				text: '2',
				is_right: true,
			},
		]);
		expect(excludeDeletedAnswers(answers, [2])).toStrictEqual([
			{
				id: 1,
				text: '1',
				is_right: false,
			},
			{
				id: 3,
				text: '3',
				is_right: true,
			},
		]);
	});

	it('should return all answers that has no answerId and format them', () => {
		const allAnswers: AnswerField[] = [
			{
				id: '1',
				answerId: 1,
				text: '1',
				is_right: false,
			},
			{
				id: '2',
				text: '2',
				is_right: true,
			},
			{
				id: '2.5',
				text: '2.5',
				is_right: false,
				position: {
					source: 1,
					destination: 4,
				},
			},
			{
				id: '3',
				answerId: 3,
				text: '3',
				is_right: true,
			},
		];
		expect(prepareAnswersToAdd(allAnswers)).toStrictEqual([
			{
				text: '2',
				is_right: true,
				position: undefined,
			},
			{
				text: '2.5',
				is_right: false,
				position: {
					source: 1,
					destination: 4,
				},
			},
		]);
	});
});
