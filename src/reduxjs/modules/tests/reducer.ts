import { createSlice } from '@reduxjs/toolkit';
import type { ActionError } from './../../../types/common';
import type {
	FetchTestByIdSuccess,
	FetchAllTestsSuccess,
	AddQuestionSuccess,
	DeleteQuestionSuccess,
	AddAnswerSuccess,
} from './types';
import type { Test } from '@/reduxjs/modules/tests/types';
import type { Pagination } from '@/types/common';
import type { Status } from '@/types/auth';

export interface TestsState {
	list: Test[];
	current: Test | null | undefined;
	pagination: Pagination;
	status: Status;
	error: string | null;
}

const initialState: TestsState = {
	list: [],
	current: undefined,
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
		setTestsPending(state) {
			state.status = 'PENDING';
		},

		createTestSuccess(state, action) {
			state.list.push(action.payload);
			state.status = 'SUCCEEDED';
		},
		createTestError(state, action) {
			state.error = action.payload;
			state.status = 'FAILED';
		},

		fetchAllTestsSuccess(state, action: FetchAllTestsSuccess) {
			state.list = action.payload.tests;
			state.pagination = action.payload.meta;
			state.status = 'SUCCEEDED';
		},
		fetchAllTestsError(state, action: ActionError) {
			state.error = action.payload;
			state.status = 'FAILED';
		},

		fetchTestByIdSuccess(state, action: FetchTestByIdSuccess) {
			state.current = action.payload;
			state.status = 'SUCCEEDED';
		},
		fetchTestByIdError(state, action: ActionError) {
			state.error = action.payload;
			state.status = 'FAILED';
		},

		addQuestionSuccess(state, action: AddQuestionSuccess) {
			state.current?.questions.push(action.payload);
		},
		addQuestionError(state, action: ActionError) {
			state.error = action.payload;
		},

		deleteQuestionSuccess(state, action: DeleteQuestionSuccess) {
			const indexToDelete = state.current?.questions.findIndex(
				(question) => question.id === action.payload,
			) as number;
			state.current?.questions.splice(indexToDelete, 1);
		},
		deleteQuestionError(state, action: ActionError) {
			state.error = action.payload;
		},

		addAnswerSuccess(state, action: AddAnswerSuccess) {
			const { answer, questionId } = action.payload;
			state.current?.questions.find((question) => question.id === questionId)?.answers.push(answer);
		},
		addAnswerError(state, action: ActionError) {
			state.error = action.payload;
		},
	},
});

export default testsSlice.reducer;
