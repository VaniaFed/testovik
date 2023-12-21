import { PayloadAction } from '@reduxjs/toolkit';
import type { Pagination } from '@/types/common';

interface Answer {
	readonly id: number;
	text: string;
	is_right: boolean;
}

export type QuestionType = 'single' | 'multiple' | 'number';

export interface Question {
	readonly id: number;
	title: string;
	answer: number;
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

export interface FetchTestByIdResponse {
	test: Test;
}

export type CreateTestAction = PayloadAction<string>;

export type FetchAllTestsSuccess = PayloadAction<FetchAllTestsResponse>;
export type FetchAllTestsError = PayloadAction<string>;

export type FetchTestByIdAction = PayloadAction<number>;
export type FetchTestByIdSuccess = PayloadAction<Test>;
export type FetchTestByIdError = PayloadAction<string>;
