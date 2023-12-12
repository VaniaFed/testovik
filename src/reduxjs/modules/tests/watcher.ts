import { takeLatest } from 'redux-saga/effects';
import { fetchAllTestsSaga, fetchTestByIdSaga } from '@/reduxjs/modules/tests/sagas';
import { FETCH_ALL_TESTS, FETCH_TEST_BY_ID } from '@/reduxjs/modules/tests/actions';

export default [takeLatest(FETCH_ALL_TESTS, fetchAllTestsSaga), takeLatest(FETCH_TEST_BY_ID, fetchTestByIdSaga)];
