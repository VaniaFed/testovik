import { testsSlice } from '@/reduxjs/modules/tests/reducer';

export const {
	// general
	setPending,
	setError,

	// specific
	createTestSuccess,
	fetchAllTestsSuccess,
	fetchTestByIdSuccess,
	createQuestionSuccess,
	deleteQuestionSuccess,
	updateQuestionSuccess,
	createAnswerSuccess,
	updateAnswerSuccess,
	deleteAnswerSuccess,
} = testsSlice.actions;
