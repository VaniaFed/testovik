import { Test } from '@/reduxjs/modules/tests/types';
import { Pagination } from '@/types/common';
import { fetchAllTestsSuccess, fetchTestByIdSuccess } from '@/reduxjs/modules/tests/actions';
import { testsApi } from '@/services/tests';
import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

interface FetchAllTestsResponse {
	tests: Test[];
	meta: Pagination;
}

interface FetchTestByIdResponse {
	test: Test;
}

export interface FetchTestByIdAction extends PayloadAction<{ id: number }> {}

export function* fetchAllTestsSaga() {
	const tests: FetchAllTestsResponse = yield call(testsApi.getAll);
	yield put(
		fetchAllTestsSuccess({
			list: tests.tests,
			pagination: tests.meta,
		}),
	);
}

// TODO: not sure about action necessary type
export function* fetchTestByIdSaga(action: FetchTestByIdAction) {
	const { id } = action.payload;
	const { test }: FetchTestByIdResponse = yield call(testsApi.getById, id);
	yield put(fetchTestByIdSuccess(test));
}

export function* createTestSaga(action: any) {
	yield console.log(action);
	// const { id } = action.payload;
	// const test: FetchTestByIdResponse = yield call(testsApi.getById, id);
	// yield put(fetchTestByIdSuccess(test));
}
