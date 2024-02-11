import { testsSlice } from '@/reduxjs/modules/tests/reducer';

export const {
	// general
	setPending,
	setError,

	// specific
	createTestSuccess,
	fetchAllTestsSuccess,
	fetchTestByIdSuccess,
	updateTestSuccess,
	deleteTestSuccess,
	createQuestionSuccess,
	deleteQuestionSuccess,
	updateQuestionSuccess,
	createAnswerSuccess,
	updateAnswerSuccess,
	moveAnswerSuccess,
	deleteAnswerSuccess,
} = testsSlice.actions;
