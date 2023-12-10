import { takeLatest } from 'redux-saga/effects';
import { fetchAllTestsSaga } from '@/reduxjs/modules/tests/sagas';
import { FETCH_ALL_TESTS } from '@/reduxjs/modules/tests/actions';

export default [takeLatest(FETCH_ALL_TESTS, fetchAllTestsSaga)];
