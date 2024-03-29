import type { Pagination, SortOrder, Status } from '@/types/common';
import type { PayloadAction } from '@reduxjs/toolkit';

export type QuestionType = 'single' | 'multiple' | 'number';

export interface Answer {
	readonly id: number;
	text: string;
	is_right: boolean;
	position?: MoveAnswerPosition;
}

export interface Question {
	readonly id: number;
	title: string;
	answer: number | null;
	answers: Answer[];
	question_type: QuestionType;
}

export interface Test {
	readonly id: number;
	created_at: string;
	title: string;
	questions: Question[];
}

export interface TestsState {
	list: Test[];
	currentTest: Test | null | undefined;
	pagination: Pagination;
	status: Status;
	error: string | null;
}

export interface MoveAnswerPosition {
	id: number;
	source: number;
	destination: number;
}

export interface CreateTestPayload {
	title: string;
}

export interface CreateTestSuccessPayload {
	test: Test;
}

export interface FetchAllTestsPayload {
	page: number;
	per: number;
	search: string;
	sort: SortOrder;
}

export interface FetchAllTestsSuccessPayload {
	tests: Test[];
	meta: Pagination;
}

export interface FetchTestByIdPayload {
	id: number;
}

export interface FetchTestByIdSuccessPayload {
	test: Test;
}

export interface DeleteTestPayload {
	id: number;
}

export interface DeleteTestSuccessPayload extends DeleteTestPayload {}

export interface UpdateTestPayload {
	title: string;
	id: number;
}

export interface UpdateTestSuccessPayload extends Pick<Test, 'id' | 'title'> {}

export interface CreateQuestionPayload {
	testId: number;
	question: Omit<Question, 'id'>;
}

export interface CreateQuestionSuccessPayload {
	question: Question;
}

export interface UpdateQuestionPayload {
	question: Omit<Question, 'answers'>;
	answersToAdd: Omit<Answer, 'id'>[];
	answersToUpdate: Answer[];
	answersToDelete: number[];
	answersToMove: MoveAnswerPosition[];
}

export interface UpdateQuestionSuccessPayload {
	question: Omit<Question, 'answers'>;
}

export interface DeleteQuestionPayload {
	id: number;
}

export interface DeleteQuestionSuccessPayload extends DeleteQuestionPayload {}

export interface CreateAnswersPayload {
	questionId: number;
	answers: Omit<Answer, 'id'>[];
}

export interface CreateAnswerPayload {
	questionId: number;
	answer: Omit<Answer, 'id'>;
}

export interface CreateAnswersSuccessPayload {
	questionId: number;
	answer: Answer;
}

export interface UpdateAnswersPayload {
	questionId: number;
	answers: Answer[];
}

export interface UpdateAnswerPayload extends CreateAnswersSuccessPayload {}

export interface UpdateAnswersSuccessPayload extends CreateAnswersSuccessPayload {}

export interface MoveAnswersPayload {
	questionId: number;
	positions: MoveAnswerPosition[];
}

export interface MoveAnswerPayload {
	questionId: number;
	position: MoveAnswerPosition;
}

export interface MoveAnswersSuccessPayload extends MoveAnswerPayload {}

export interface DeleteAnswersPayload {
	id: number[];
	questionId: number;
}

export interface DeleteAnswerPayload {
	id: number;
	questionId: number;
}

export interface DeleteAnswersSuccessPayload extends DeleteAnswerPayload {}

export type CreateTestRequest = PayloadAction<CreateTestPayload>;
export type CreateTestSuccess = PayloadAction<CreateTestSuccessPayload>;
export type FetchAllTestsRequest = PayloadAction<FetchAllTestsPayload>;
export type FetchAllTestsSuccess = PayloadAction<FetchAllTestsSuccessPayload>;
export type FetchTestByIdRequest = PayloadAction<FetchTestByIdPayload>;
export type FetchTestByIdSuccess = PayloadAction<FetchTestByIdSuccessPayload>;
export type UpdateTestRequest = PayloadAction<UpdateTestPayload>;
export type UpdateTestSuccess = PayloadAction<UpdateTestSuccessPayload>;
export type DeleteTestRequest = PayloadAction<DeleteTestPayload>;
export type DeleteTestSuccess = PayloadAction<DeleteTestSuccessPayload>;

export type CreateQuestionRequest = PayloadAction<CreateQuestionPayload>;
export type CreateQuestionSuccess = PayloadAction<CreateQuestionSuccessPayload>;
export type UpdateQuestionRequest = PayloadAction<UpdateQuestionPayload>;
export type UpdateQuestionSuccess = PayloadAction<UpdateQuestionSuccessPayload>;
export type DeleteQuestionRequest = PayloadAction<DeleteQuestionPayload>;
export type DeleteQuestionSuccess = PayloadAction<DeleteQuestionSuccessPayload>;

export type CreateAnswersAction = PayloadAction<CreateAnswersPayload>;
export type CreateAnswersSuccess = PayloadAction<CreateAnswersSuccessPayload>;
export type UpdateAnswersAction = PayloadAction<UpdateAnswersPayload>;
export type UpdateAnswersSuccess = PayloadAction<UpdateAnswersSuccessPayload>;
export type MoveAnswersAction = PayloadAction<MoveAnswersPayload>;
export type MoveAnswersSuccess = PayloadAction<MoveAnswersSuccessPayload>;
export type DeleteAnswersAction = PayloadAction<DeleteAnswersPayload>;
export type DeleteAnswersSuccess = PayloadAction<DeleteAnswersSuccessPayload>;
