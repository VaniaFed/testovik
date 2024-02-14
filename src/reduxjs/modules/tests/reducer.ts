import { createSlice } from '@reduxjs/toolkit';
import { findIndexById, deleteById, updateById, findItemById, sortItems } from '@/utils/redux-helpers';
import type { ActionError } from '@/reduxjs/common/types';
import type {
	CreateTestSuccess,
	FetchTestByIdSuccess,
	FetchAllTestsSuccess,
	UpdateTestSuccess,
	DeleteTestSuccess,
	CreateQuestionSuccess,
	UpdateQuestionSuccess,
	DeleteQuestionSuccess,
	CreateAnswersSuccess,
	UpdateAnswersSuccess,
	MoveAnswersSuccess,
	DeleteAnswersSuccess,
	TestsState,
} from './types';

const initialState: TestsState = {
	list: [],
	currentTest: undefined,
	pagination: {
		total_count: 0,
		total_pages: 0,
	},
	status: 'IDLE',
	error: null,
};

export const testsSlice = createSlice({
	name: 'tests',
	initialState,
	reducers: {
		setPending(state) {
			state.status = 'PENDING';
		},

		setSucceeded(state) {
			state.status = 'SUCCEEDED';
		},

		setError(state, action: ActionError) {
			state.error = action.payload;
			state.status = 'FAILED';
		},

		createTestSuccess(state, action: CreateTestSuccess) {
			state.list.unshift(action.payload.test);
		},

		fetchAllTestsSuccess(state, action: FetchAllTestsSuccess) {
			state.list = action.payload.tests;
			state.pagination = action.payload.meta;
		},

		fetchTestByIdSuccess(state, action: FetchTestByIdSuccess) {
			state.currentTest = action.payload.test;
		},

		updateTestSuccess(state, action: UpdateTestSuccess) {
			const { id, title } = action.payload;
			state.list = updateById(state.list, id, { title });
		},

		deleteTestSuccess(state, action: DeleteTestSuccess) {
			state.list = deleteById(state.list, action.payload.id);
		},

		createQuestionSuccess(state, action: CreateQuestionSuccess) {
			state.currentTest?.questions.push(action.payload.question);
		},

		updateQuestionSuccess(state, action: UpdateQuestionSuccess) {
			const { question } = action.payload;
			if (state.currentTest) {
				state.currentTest.questions = updateById(state.currentTest.questions, question.id, question);
			}
		},

		deleteQuestionSuccess(state, action: DeleteQuestionSuccess) {
			if (state.currentTest) {
				state.currentTest.questions = deleteById(state.currentTest.questions, action.payload.id);
			}
		},

		createAnswerSuccess(state, action: CreateAnswersSuccess) {
			const { answer, questionId } = action.payload;
			state.currentTest?.questions.find((question) => question.id === questionId)?.answers.push(answer);
		},

		updateAnswerSuccess(state, action: UpdateAnswersSuccess) {
			const { answer, questionId } = action.payload;
			if (state.currentTest) {
				const targetQuestionId = findIndexById(state.currentTest.questions, questionId);
				state.currentTest.questions[targetQuestionId].answers = updateById(
					state.currentTest.questions[targetQuestionId].answers,
					answer.id,
					answer,
				);
			}
		},

		moveAnswerSuccess(state, action: MoveAnswersSuccess) {
			const { position, questionId } = action.payload;
			if (state.currentTest) {
				const targetQuestion = findItemById(state.currentTest.questions, questionId);
				if (targetQuestion && targetQuestion.answers) {
					const sorted = sortItems(targetQuestion.answers, position.source, position.destination);
					targetQuestion.answers = sorted;
				}
			}
		},

		deleteAnswerSuccess(state, action: DeleteAnswersSuccess) {
			const { id, questionId } = action.payload;
			if (state.currentTest) {
				const targetQuestionId = findIndexById(state.currentTest.questions, questionId);
				state.currentTest.questions[targetQuestionId].answers = deleteById(
					state.currentTest.questions[targetQuestionId].answers,
					id,
				);
			}
		},
	},
});

export const reducer = testsSlice.reducer;
