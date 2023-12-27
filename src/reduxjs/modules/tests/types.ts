import { PayloadAction } from '@reduxjs/toolkit';
import type { Pagination } from '@/types/common';

export type QuestionType = 'single' | 'multiple' | 'number';

export interface Answer {
	readonly id: number;
	text: string;
	is_right: boolean;
}

export interface Question {
	readonly id: number;
	title: string;
	answer?: number;
	answers: Answer[];
	question_type: QuestionType;
}

export interface Test {
	readonly id: number;
	created_at: string;
	title: string;
	questions: Question[];
}

export interface FetchAllTestsResponse {
	tests: Test[];
	meta: Pagination;
}

export interface AddQuestionRequest {
	testId: number;
	question: Omit<Question, 'id'>;
}

export interface AddAnswersRequest {
	answers: Answer[];
	questionId: number;
}

export interface AddAnswerResponse {
	answer: Answer;
	questionId: number;
}

export type CreateTestAction = PayloadAction<string>;

export type DeleteQuestionAction = PayloadAction<number>;
export type DeleteQuestionSuccess = PayloadAction<number>;

export type FetchAllTestsSuccess = PayloadAction<FetchAllTestsResponse>;

export type FetchTestByIdAction = PayloadAction<number>;
export type FetchTestByIdSuccess = PayloadAction<Test>;

export type AddQuestionAction = PayloadAction<AddQuestionRequest>;
export type AddQuestionSuccess = PayloadAction<Question>;

export type AddAnswersAction = PayloadAction<AddAnswersRequest>;
export type AddAnswersSuccess = PayloadAction<AddAnswerResponse>;
