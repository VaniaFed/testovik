import { createSlice } from '@reduxjs/toolkit';
import type { FetchTestByIdSuccess, FetchTestByIdError, FetchAllTestsSuccess, FetchAllTestsError } from './types';
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
		fetchAllTestsError(state, action: FetchAllTestsError) {
			state.error = action.payload;
			state.status = 'FAILED';
		},

		fetchTestByIdSuccess(state, action: FetchTestByIdSuccess) {
			state.current = action.payload;
			state.status = 'SUCCEEDED';
		},
		fetchTestByIdError(state, action: FetchTestByIdError) {
			state.error = action.payload;
			state.status = 'FAILED';
		},
	},
});

export default testsSlice.reducer;
