import type { RootState } from '@/reduxjs/store';

export const selectAllTests = (state: RootState) => state.tests.list;
export const selectPagination = (state: RootState) => state.tests.pagination;

export const selectStatus = (state: RootState) => state.tests.status;
