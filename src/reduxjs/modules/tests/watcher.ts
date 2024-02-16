import { takeLatest } from 'redux-saga/effects';

import {
	CREATE_ANSWERS,
	CREATE_QUESTION,
	CREATE_TEST,
	DELETE_ANSWERS,
	DELETE_QUESTION,
	DELETE_TEST,
	EDIT_QUESTION,
	FETCH_ALL_TESTS,
	FETCH_TEST_BY_ID,
	MOVE_ANSWERS,
	UPDATE_ANSWERS,
	UPDATE_TEST,
} from '@/reduxjs/modules/tests/constants';
import {
	createAnswersSaga,
	createQuestionSaga,
	createTestSaga,
	deleteAnswersSaga,
	deleteQuestionSaga,
	deleteTestSaga,
	fetchAllTestsSaga,
	fetchTestByIdSaga,
	moveAnswersSaga,
	updateAnswersSaga,
	updateQuestionSaga,
	updateTestSaga,
} from '@/reduxjs/modules/tests/sagas';

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
	takeLatest(MOVE_ANSWERS, moveAnswersSaga),
	takeLatest(DELETE_ANSWERS, deleteAnswersSaga),
];
