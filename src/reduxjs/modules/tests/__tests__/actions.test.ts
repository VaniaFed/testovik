import { currentTest, meta, mockedTestState, mockedTestStateWithCurrent, testList } from '@/mocks/tests';
import {
	createAnswerSuccess,
	createQuestionSuccess,
	createTestSuccess,
	deleteAnswerSuccess,
	deleteQuestionSuccess,
	deleteTestSuccess,
	fetchAllTestsSuccess,
	fetchTestByIdSuccess,
	setError,
	setPending,
	updateAnswerSuccess,
	updateQuestionSuccess,
	updateTestSuccess,
} from '@/reduxjs/modules/tests/actions';
import { reducer } from '@/reduxjs/modules/tests/reducer';
import type { Answer, Question, Test } from '@/reduxjs/modules/tests/types';

describe('testsSlice', () => {
	describe('Test', () => {
		let state = mockedTestState;
		beforeEach(() => {
			state = mockedTestState;
		});

		it('should init test state', () => {
			expect(state).toStrictEqual(mockedTestState);
		});

		it('should add a test', () => {
			const testToAdd: Test = {
				id: 1,
				created_at: '2024-01-15T20:53:52.660Z',
				title: 'Test 1',
				questions: [],
			};

			expect(reducer(state, createTestSuccess({ test: testToAdd }))).toStrictEqual({
				...mockedTestState,
				list: [testToAdd, ...mockedTestState.list],
				status: 'SUCCEEDED',
			});
		});

		it('should update a test', () => {
			expect(
				reducer(state, updateTestSuccess({ id: 958, title: 'new test title' })).list.find(
					(test) => test.id === 958,
				)?.title,
			).toBe('new test title');
		});

		it('should delete a test', () => {
			expect(state.list).toHaveLength(3);
			expect(reducer(state, deleteTestSuccess({ id: 1 })).list.every((test) => test.id !== 1)).toBeTruthy();
		});

		it('should fetch all the tests', () => {
			expect(reducer({ ...state, list: [] }, fetchAllTestsSuccess({ tests: testList, meta }))).toStrictEqual({
				...mockedTestState,
				list: testList,
				pagination: meta,
			});
		});

		it('should fetch test by id', () => {
			expect(state.currentTest).toBeUndefined();
			expect(reducer(state, fetchTestByIdSuccess({ test: currentTest }))).toStrictEqual({
				...state,
				currentTest,
			});
		});

		it('should set pending status', () => {
			expect(reducer(state, setPending()).status).toBe('PENDING');
		});

		it('should set error message with failed status', () => {
			expect(reducer(state, setError('very default error message'))).toStrictEqual({
				...state,
				error: 'very default error message',
				status: 'FAILED',
			});
		});
	});

	describe('Question', () => {
		let state = mockedTestStateWithCurrent;
		beforeEach(() => {
			state = mockedTestStateWithCurrent;
		});

		it('should create a number question', () => {
			const questionToAdd: Question = {
				id: 11,
				title: '11+11',
				question_type: 'number',
				answer: 22,
				answers: [],
			};

			expect(
				reducer(
					state,
					createQuestionSuccess({
						question: questionToAdd,
					}),
				).currentTest?.questions,
			).toStrictEqual([...(state.currentTest?.questions as Question[]), questionToAdd]);
		});

		it('should create a single question with no answers', () => {
			const questionToAdd: Question = {
				id: 12,
				title: 'best cat in de world',
				question_type: 'single',
				answer: 0,
				answers: [],
			};

			expect(
				reducer(
					state,
					createQuestionSuccess({
						question: questionToAdd,
					}),
				).currentTest?.questions,
			).toStrictEqual([...(state.currentTest?.questions as Question[]), questionToAdd]);
		});

		it('should create a multiple question', () => {
			const questionToAdd: Question = {
				id: 13,
				title: 'a stupid question',
				question_type: 'multiple',
				answer: 0,
				answers: [],
			};

			expect(
				reducer(
					state,
					createQuestionSuccess({
						question: questionToAdd,
					}),
				).currentTest?.questions,
			).toStrictEqual([...(state.currentTest?.questions as Question[]), questionToAdd]);
		});

		it('should update question', () => {
			const idToUpdate = 637;
			const questionToUpdate: Question = {
				id: idToUpdate,
				title: 'updated title',
				question_type: 'multiple',
				answer: 10000,
				answers: [],
			};
			expect(
				reducer(state, updateQuestionSuccess({ question: questionToUpdate })).currentTest?.questions.find(
					(question) => question.id === idToUpdate,
				),
			).toStrictEqual(questionToUpdate);
		});

		it('should delete a question', () => {
			expect(
				reducer(state, deleteQuestionSuccess({ id: 640 })).currentTest?.questions.every(
					(question) => question.id !== 640,
				),
			).toBeTruthy();
		});
	});

	describe('Answer', () => {
		let state = mockedTestStateWithCurrent;
		beforeEach(() => {
			state = mockedTestStateWithCurrent;
		});

		it('should add an answer to the single question', () => {
			const questionId = 634;
			const answersToAdd: Answer[] = [
				{
					id: 1,
					text: "Your enemy's cat",
					is_right: false,
				},
				{
					id: 2,
					text: "Your friend's cat",
					is_right: false,
				},
				{
					id: 3,
					text: 'Your cat',
					is_right: true,
				},
			];

			let tempState = reducer(state, createAnswerSuccess({ questionId, answer: answersToAdd[0] }));
			tempState = reducer(tempState, createAnswerSuccess({ questionId, answer: answersToAdd[1] }));
			tempState = reducer(tempState, createAnswerSuccess({ questionId, answer: answersToAdd[2] }));

			expect(
				tempState.currentTest?.questions.find((question) => question.id === questionId)?.answers,
			).toStrictEqual([...answersToAdd]);
		});

		it('should add an answer to the multiple question', () => {
			const questionId = 639;
			const answersToAdd: Answer[] = [
				{
					id: 1,
					text: "Your enemy's cat",
					is_right: false,
				},
				{
					id: 2,
					text: "Your friend's cat",
					is_right: true,
				},
				{
					id: 3,
					text: 'Your cat',
					is_right: true,
				},
			];

			let tempState = reducer(state, createAnswerSuccess({ questionId, answer: answersToAdd[0] }));
			tempState = reducer(tempState, createAnswerSuccess({ questionId, answer: answersToAdd[1] }));
			tempState = reducer(tempState, createAnswerSuccess({ questionId, answer: answersToAdd[2] }));

			const existedAnswers = state.currentTest?.questions.find((question) => question.id === questionId)
				?.answers as Answer[];

			expect(
				tempState.currentTest?.questions.find((question) => question.id === questionId)?.answers,
			).toStrictEqual([...existedAnswers, ...answersToAdd]);
		});

		it('should update single/multiple answer', () => {
			const questionId = 639;
			const answersToUpdate: Answer[] = [
				{
					id: 1306,
					text: 'updated answer text',
					is_right: true,
				},
				{
					id: 1307,
					text: 'new text',
					is_right: true,
				},
			];
			let tempState = reducer(state, updateAnswerSuccess({ questionId, answer: answersToUpdate[0] }));
			tempState = reducer(tempState, updateAnswerSuccess({ questionId, answer: answersToUpdate[1] }));
			expect(
				tempState.currentTest?.questions.find((question) => question.id === questionId)?.answers,
			).toStrictEqual([
				{
					id: 1305,
					text: '232r4332',
					is_right: true,
				},
				{
					id: 1306,
					text: 'updated answer text',
					is_right: true,
				},
				{
					id: 1307,
					text: 'new text',
					is_right: true,
				},
			]);
		});

		it('should remove an answer from the single/multiple question', () => {
			const questionId = 639;
			const answersToDelete = [1306, 1305];
			const remainingAnswer = {
				id: 1307,
				text: '25325352',
				is_right: false,
			};

			let tempState = reducer(state, deleteAnswerSuccess({ questionId, id: answersToDelete[0] }));
			tempState = reducer(tempState, deleteAnswerSuccess({ questionId, id: answersToDelete[1] }));

			expect(
				tempState.currentTest?.questions.find((question) => question.id === questionId)?.answers,
			).toStrictEqual([remainingAnswer]);
		});
	});
});
