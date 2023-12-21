import { call, put } from 'redux-saga/effects';
import { testsApi } from '@/services/tests';
import type { AxiosResponse } from 'axios';
import type {
	CreateTestAction,
	FetchAllTestsResponse,
	FetchTestByIdAction,
	FetchTestByIdResponse,
} from '@/reduxjs/modules/tests/types';
import {
	setTestsPending,
	createTestError,
	createTestSuccess,
	fetchAllTestsError,
	fetchAllTestsSuccess,
	fetchTestByIdError,
	fetchTestByIdSuccess,
} from '@/reduxjs/modules/tests/actions';

export function* createTestSaga(action: CreateTestAction) {
	yield put(setTestsPending());
	const title = action.payload;
	try {
		const test: AxiosResponse = yield call(testsApi.create, title);
		yield put(createTestSuccess(test.data));
	} catch (error) {
		yield put(createTestError('Error while creating a test'));
	}
}

export function* fetchAllTestsSaga() {
	yield put(setTestsPending());
	try {
		const res: AxiosResponse<FetchAllTestsResponse> = yield call(testsApi.getAll);
		yield put(
			fetchAllTestsSuccess({
				tests: res.data.tests,
				meta: res.data.meta,
			}),
		);
	} catch (error) {
		yield put(fetchAllTestsError('Error during fetching tests'));
	}
}

export function* fetchTestByIdSaga(action: FetchTestByIdAction) {
	yield put(setTestsPending());
	const id = action.payload;

	try {
		const res: AxiosResponse<FetchTestByIdResponse> = yield call(testsApi.getById, id);
		yield put(fetchTestByIdSuccess(res.data.test));
	} catch (error) {
		yield put(fetchTestByIdError('Error during fetching test'));
	}
}
