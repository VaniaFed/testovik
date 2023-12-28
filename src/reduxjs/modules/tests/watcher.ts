import { takeLatest } from 'redux-saga/effects';
import {
	addAnswersSaga,
	addQuestionSaga,
	createTestSaga,
	deleteQuestionSaga,
	editQuestionSaga,
	fetchAllTestsSaga,
	fetchTestByIdSaga,
} from '@/reduxjs/modules/tests/sagas';
import {
	ADD_ANSWERS,
	ADD_QUESTION,
	CREATE_TEST,
	DELETE_QUESTION,
	EDIT_QUESTION,
	FETCH_ALL_TESTS,
	FETCH_TEST_BY_ID,
} from '@/reduxjs/modules/tests/actions';

export default [
	takeLatest(CREATE_TEST, createTestSaga),
	takeLatest(FETCH_ALL_TESTS, fetchAllTestsSaga),
	takeLatest(FETCH_TEST_BY_ID, fetchTestByIdSaga),
	takeLatest(ADD_QUESTION, addQuestionSaga),
	takeLatest(EDIT_QUESTION, editQuestionSaga),
	takeLatest(DELETE_QUESTION, deleteQuestionSaga),
	takeLatest(ADD_ANSWERS, addAnswersSaga),
];
