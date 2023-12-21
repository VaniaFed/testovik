import { testsSlice } from './reducer';
import { createAction } from '@reduxjs/toolkit';

export const CREATE_TEST = 'CREATE_TEST';
export const FETCH_ALL_TESTS = 'FETCH_ALL_TESTS';
export const FETCH_TEST_BY_ID = 'FETCH_TEST_BY_ID';

export const createTest = createAction<string>(CREATE_TEST);
export const fetchAllTests = createAction(FETCH_ALL_TESTS);
export const fetchTestById = createAction<number>(FETCH_TEST_BY_ID);

export const {
	setTestsPending,
	createTestSuccess,
	createTestError,
	fetchAllTestsSuccess,
	fetchAllTestsError,
	fetchTestByIdSuccess,
	fetchTestByIdError,
} = testsSlice.actions;
