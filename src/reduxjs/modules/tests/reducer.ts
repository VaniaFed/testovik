import { createSlice } from '@reduxjs/toolkit';
import type { Test, Pagination } from '@/lib/definitions';
import type { Status } from '@/types/auth';

interface InitialState {
	list: Test[];
	pagination: Pagination;
	status: Status;
	error: string | null;
}
const initialState: InitialState = {
	list: [],
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
	},
});

export default testsSlice.reducer;
