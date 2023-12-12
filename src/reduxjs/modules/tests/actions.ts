import { testsSlice } from './reducer';
import { createAction } from '@reduxjs/toolkit';

export const FETCH_ALL_TESTS = 'FETCH_ALL_TESTS';
export const FETCH_TEST_BY_ID = 'FETCH_TEST_BY_ID';

export const fetchAllTests = createAction(FETCH_ALL_TESTS);
export const fetchTestById = createAction<number>(FETCH_TEST_BY_ID);

export const { fetchAllTestsSuccess, fetchTestByIdSuccess } = testsSlice.actions;
