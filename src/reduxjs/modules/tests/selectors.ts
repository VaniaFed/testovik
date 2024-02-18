import type { RootState } from '@/reduxjs/store';

export const selectAllTests = (state: RootState) => state.tests.list;
export const selectCurrentTest = (state: RootState) => state.tests.currentTest;
export const selectPagination = (state: RootState) => state.tests.pagination;
export const selectTestsStatus = (state: RootState) => state.tests.status;
