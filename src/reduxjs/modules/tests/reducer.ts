import { createSlice } from '@reduxjs/toolkit';
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
		fetchAllTestsSuccess(state, action) {
			state.list = action.payload.list;
			state.pagination = action.payload.pagination;
			state.status = 'SUCCEEDED';
		},
		fetchTestByIdSuccess(state, action) {
			state.current = action.payload;
			state.status = 'SUCCEEDED';
		},
	},
});

export default testsSlice.reducer;
