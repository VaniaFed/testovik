import { takeLatest } from 'redux-saga/effects';
import {
	addAnswersSaga,
	addQuestionSaga,
	createTestSaga,
	fetchAllTestsSaga,
	fetchTestByIdSaga,
} from '@/reduxjs/modules/tests/sagas';
import {
	ADD_ANSWERS,
	ADD_QUESTION,
	CREATE_TEST,
	FETCH_ALL_TESTS,
	FETCH_TEST_BY_ID,
} from '@/reduxjs/modules/tests/actions';

export default [
	takeLatest(CREATE_TEST, createTestSaga),
	takeLatest(FETCH_ALL_TESTS, fetchAllTestsSaga),
	takeLatest(FETCH_TEST_BY_ID, fetchTestByIdSaga),
	takeLatest(ADD_QUESTION, addQuestionSaga),
	takeLatest(ADD_ANSWERS, addAnswersSaga),
];
