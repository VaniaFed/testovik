import { takeLatest } from 'redux-saga/effects';
import {
	createQuestionSaga,
	updateQuestionSaga,
	deleteQuestionSaga,
	createAnswersSaga,
	deleteAnswersSaga,
	updateAnswersSaga,
	deleteTestSaga,
	updateTestSaga,
} from '@/reduxjs/modules/tests/sagas';
import {
	CREATE_TEST,
	FETCH_ALL_TESTS,
	FETCH_TEST_BY_ID,
	CREATE_QUESTION,
	EDIT_QUESTION,
	DELETE_QUESTION,
	CREATE_ANSWERS,
	DELETE_ANSWERS,
	UPDATE_ANSWERS,
	DELETE_TEST,
	UPDATE_TEST,
} from '@/reduxjs/modules/tests/constants';
import { createTestSaga, fetchAllTestsSaga, fetchTestByIdSaga } from '@/reduxjs/modules/tests/sagas';

export const watcher = [
	takeLatest(CREATE_TEST, createTestSaga),
	takeLatest(FETCH_ALL_TESTS, fetchAllTestsSaga),
	takeLatest(FETCH_TEST_BY_ID, fetchTestByIdSaga),
	takeLatest(UPDATE_TEST, updateTestSaga),
	takeLatest(DELETE_TEST, deleteTestSaga),
	takeLatest(CREATE_QUESTION, createQuestionSaga),
	takeLatest(EDIT_QUESTION, updateQuestionSaga),
	takeLatest(DELETE_QUESTION, deleteQuestionSaga),
	takeLatest(CREATE_ANSWERS, createAnswersSaga),
	takeLatest(UPDATE_ANSWERS, updateAnswersSaga),
	takeLatest(DELETE_ANSWERS, deleteAnswersSaga),
];
