import { testsSlice } from './reducer';
import { createAction } from '@reduxjs/toolkit';

export const { fetchAllTestsSuccess } = testsSlice.actions;

export const FETCH_ALL_TESTS = 'FETCH_ALL_TESTS';
export const fetchAllTests = createAction(FETCH_ALL_TESTS);
