import { findIndexById } from './../../../utils/redux-helpers';
import { createSlice } from '@reduxjs/toolkit';
import { deleteById, updateById } from '@/utils/redux-helpers';
import type { ActionError } from '@/types/common';
import type {
	CreateTestSuccess,
	FetchTestByIdSuccess,
	FetchAllTestsSuccess,
	CreateQuestionSuccess,
	UpdateQuestionSuccess,
	DeleteQuestionSuccess,
	CreateAnswersSuccess,
	UpdateAnswersSuccess,
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

		setError(state, action: ActionError) {
			state.error = action.payload;
			state.status = 'FAILED';
		},

		createTestSuccess(state, action: CreateTestSuccess) {
			state.list.push(action.payload.test);
			state.status = 'SUCCEEDED';
		},

		fetchAllTestsSuccess(state, action: FetchAllTestsSuccess) {
			state.list = action.payload.tests;
			state.pagination = action.payload.meta;
			state.status = 'SUCCEEDED';
		},

		fetchTestByIdSuccess(state, action: FetchTestByIdSuccess) {
			state.currentTest = action.payload.test;
			state.status = 'SUCCEEDED';
		},

		createQuestionSuccess(state, action: CreateQuestionSuccess) {
			state.currentTest?.questions.push(action.payload.question);
			state.status = 'SUCCEEDED';
		},

		updateQuestionSuccess(state, action: UpdateQuestionSuccess) {
			const { question } = action.payload;
			if (state.currentTest) {
				updateById(state.currentTest.questions, question.id, question);
				state.status = 'SUCCEEDED';
			}
		},

		deleteQuestionSuccess(state, action: DeleteQuestionSuccess) {
			if (state.currentTest) {
				deleteById(state.currentTest.questions, action.payload.id);
				state.status = 'SUCCEEDED';
			}
		},

		createAnswerSuccess(state, action: CreateAnswersSuccess) {
			const { answer, questionId } = action.payload;
			state.currentTest?.questions.find((question) => question.id === questionId)?.answers.push(answer);
			state.status = 'SUCCEEDED';
		},

		updateAnswerSuccess(state, action: UpdateAnswersSuccess) {
			const { answer, questionId } = action.payload;
			if (state.currentTest) {
				const targetQuestionId = findIndexById(state.currentTest.questions, questionId);
				updateById(state.currentTest.questions[targetQuestionId].answers, answer.id, answer);
			}
		},

		deleteAnswerSuccess(state, action: DeleteAnswersSuccess) {
			const { id, questionId } = action.payload;
			if (state.currentTest) {
				const targetQuestionId = findIndexById(state.currentTest.questions, questionId);
				deleteById(state.currentTest.questions[targetQuestionId].answers, id);
			}
		},
	},
});

export const reducer = testsSlice.reducer;
