import { AddAnswersRequest, AddQuestionRequest, EditQuestionRequest, Question } from '@/reduxjs/modules/tests/types';
import { testsSlice } from './reducer';
import { createAction } from '@reduxjs/toolkit';

export const CREATE_TEST = 'CREATE_TEST';
export const FETCH_ALL_TESTS = 'FETCH_ALL_TESTS';
export const FETCH_TEST_BY_ID = 'FETCH_TEST_BY_ID';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const EDIT_QUESTION = 'EDIT_QUESTION';
export const ADD_ANSWERS = 'ADD_ANSWERS';

export const createTest = createAction<string>(CREATE_TEST);
export const fetchAllTests = createAction(FETCH_ALL_TESTS);
export const fetchTestById = createAction<number>(FETCH_TEST_BY_ID);
export const addQuestion = createAction<AddQuestionRequest>(ADD_QUESTION);
export const deleteQuestion = createAction<number>(DELETE_QUESTION);
export const editQuestion = createAction<EditQuestionRequest>(EDIT_QUESTION);
export const addAnswers = createAction<AddAnswersRequest>(ADD_ANSWERS);

export const {
	setTestsPending,
	createTestSuccess,
	createTestError,
	fetchAllTestsSuccess,
	fetchAllTestsError,
	fetchTestByIdSuccess,
	fetchTestByIdError,
	addQuestionSuccess,
	addQuestionError,
	deleteQuestionSuccess,
	deleteQuestionError,
	editQuestionSuccess,
	addAnswerSuccess,
	addAnswerError,
} = testsSlice.actions;
