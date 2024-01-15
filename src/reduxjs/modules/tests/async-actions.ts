import { createAction } from '@reduxjs/toolkit';
import {
	CREATE_TEST,
	FETCH_ALL_TESTS,
	FETCH_TEST_BY_ID,
	CREATE_QUESTION,
	DELETE_QUESTION,
	EDIT_QUESTION,
	CREATE_ANSWERS,
	UPDATE_ANSWERS,
	MOVE_ANSWERS,
	DELETE_ANSWERS,
	DELETE_TEST,
	UPDATE_TEST,
} from '@/reduxjs/modules/tests/constants';
import type {
	CreateAnswersPayload,
	CreateQuestionPayload,
	CreateTestPayload,
	FetchAllTestsPayload,
	FetchTestByIdPayload,
	DeleteTestPayload,
	UpdateTestPayload,
	UpdateQuestionPayload,
	DeleteQuestionPayload,
	UpdateAnswersPayload,
	MoveAnswersPayload,
	DeleteAnswersPayload,
} from '@/reduxjs/modules/tests';

export const createTest = createAction<CreateTestPayload>(CREATE_TEST);
export const fetchAllTests = createAction<FetchAllTestsPayload>(FETCH_ALL_TESTS);
export const fetchTestById = createAction<FetchTestByIdPayload>(FETCH_TEST_BY_ID);
export const updateTest = createAction<UpdateTestPayload>(UPDATE_TEST);
export const deleteTest = createAction<DeleteTestPayload>(DELETE_TEST);

export const createQuestion = createAction<CreateQuestionPayload>(CREATE_QUESTION);
export const updateQuestion = createAction<UpdateQuestionPayload>(EDIT_QUESTION);
export const deleteQuestion = createAction<DeleteQuestionPayload>(DELETE_QUESTION);

export const createAnswers = createAction<CreateAnswersPayload>(CREATE_ANSWERS);
export const updateAnswers = createAction<UpdateAnswersPayload>(UPDATE_ANSWERS);
export const moveAnswers = createAction<MoveAnswersPayload>(MOVE_ANSWERS);
export const deleteAnswers = createAction<DeleteAnswersPayload>(DELETE_ANSWERS);
