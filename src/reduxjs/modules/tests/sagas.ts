import { fetchAllTestsSuccess } from '@/reduxjs/modules/tests/actions';
import { testsApi } from '@/services/tests';
import { call, put } from 'redux-saga/effects';

export function* fetchAllTestsSaga() {
	const tests = yield call(testsApi.getAll);

	console.log('tests:');
	console.log(tests);
	yield put(
		fetchAllTestsSuccess({
			list: tests.tests,
			pagination: tests.meta,
		}),
	);
}
