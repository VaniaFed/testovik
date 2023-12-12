import { Test } from '@/lib/definitions';
import type { RootState } from '@/reduxjs/store';

export const selectAllTests = (state: RootState) => state.tests.list;
export const selectPagination = (state: RootState) => state.tests.pagination;
export const selectStatus = (state: RootState) => state.tests.status;

export const selectTestById = (state: RootState, id: number): Test =>
	state.tests.list.filter((test) => test.id === id)[0];
