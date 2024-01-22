import { call, put } from 'redux-saga/effects';
import request from '@/reduxjs/helpers/request';
import { testApi } from '@/services/test';
import { questionApi } from '@/services/question';
import { answerApi } from '@/services/answer';
import {
	setPending,
	setError,
	createQuestionSuccess,
	deleteQuestionSuccess,
	updateQuestionSuccess,
	createAnswerSuccess,
	createTestSuccess,
	fetchAllTestsSuccess,
	fetchTestByIdSuccess,
	deleteAnswerSuccess,
	updateAnswerSuccess,
	deleteTestSuccess,
	updateTestSuccess,
} from '@/reduxjs/modules/tests/actions';
import {
	CreateAnswersRequest,
	CreateQuestionRequest,
	DeleteQuestionRequest,
	UpdateQuestionRequest,
	CreateTestRequest,
	CreateTestSuccessPayload,
	FetchAllTestsSuccessPayload,
	FetchTestByIdRequest,
	FetchTestByIdSuccessPayload,
	CreateQuestionPayload,
	DeleteQuestionPayload,
	UpdateQuestionPayload,
	CreateQuestionSuccessPayload,
	CreateTestPayload,
	FetchTestByIdPayload,
	UpdateQuestionSuccessPayload,
	DeleteQuestionSuccessPayload,
	CreateAnswerPayload,
	CreateAnswersSuccessPayload,
	DeleteAnswersAction,
	DeleteAnswerPayload,
	DeleteAnswersSuccessPayload,
	UpdateAnswersAction,
	UpdateAnswerPayload,
	Answer,
	UpdateAnswersSuccessPayload,
	FetchAllTestsRequest,
	FetchAllTestsPayload,
	DeleteTestRequest,
	DeleteTestPayload,
	DeleteTestSuccessPayload,
	UpdateTestPayload,
	UpdateTestSuccessPayload,
	UpdateTestRequest,
} from '@/reduxjs/modules/tests/types';
import { createAnswers, deleteAnswers, updateAnswers } from '@/reduxjs/modules/tests/async-actions';

export function* createTestSaga(action: CreateTestRequest) {
	yield call(request<CreateTestPayload, CreateTestSuccessPayload>, {
		service: testApi.create,
		params: {
			title: action.payload.title,
		},
		setPending,
		onSuccess: createTestSuccess,
		onFailure: setError,
	});
}

export function* fetchAllTestsSaga(action: FetchAllTestsRequest) {
	yield call(request<FetchAllTestsPayload, FetchAllTestsSuccessPayload>, {
		service: testApi.getAll,
		params: action.payload,
		setPending,
		onSuccess: fetchAllTestsSuccess,
		onFailure: setError,
	});
}

export function* fetchTestByIdSaga(action: FetchTestByIdRequest) {
	const { id } = action.payload;
	yield call(request<FetchTestByIdPayload, FetchTestByIdSuccessPayload>, {
		service: testApi.getById,
		params: {
			id,
		},
		setPending,
		onSuccess: fetchTestByIdSuccess,
		onFailure: setError,
	});
}

export function* updateTestSaga(action: UpdateTestRequest) {
	yield call(request<UpdateTestPayload, UpdateTestSuccessPayload>, {
		service: testApi.patch,
		params: action.payload,
		setPending,
		onSuccess: updateTestSuccess,
		onFailure: setError,
	});
}

export function* deleteTestSaga(action: DeleteTestRequest) {
	yield call(request<DeleteTestPayload, DeleteTestSuccessPayload>, {
		service: testApi.delete,
		params: action.payload,
		setPending,
		onSuccess: deleteTestSuccess,
		onFailure: setError,
	});
}

export function* createQuestionSaga(action: CreateQuestionRequest) {
	const { testId, question } = action.payload;
	yield call(request<CreateQuestionPayload, CreateQuestionSuccessPayload>, {
		service: questionApi.create,
		params: {
			question,
			testId,
		},
		setPending,
		onSuccess: createQuestionSuccess,
		onFailure: setError,
		callback: function* ({ question: { id } }) {
			yield put(createAnswers({ answers: question.answers, questionId: id }));
		},
	});
}

export function* updateQuestionSaga(action: UpdateQuestionRequest) {
	const { question, answersToAdd, answersToUpdate, answersToMove, answersToDelete } = action.payload;
	yield call(request<Pick<UpdateQuestionPayload, 'question'>, UpdateQuestionSuccessPayload>, {
		service: questionApi.patch,
		params: {
			question,
		},
		setPending,
		onSuccess: updateQuestionSuccess,
		onFailure: setError,
		callback: function* () {
			if (answersToDelete.length) {
				yield put(deleteAnswers({ id: answersToDelete, questionId: question.id }));
			}
			if (answersToAdd.length) {
				yield put(createAnswers({ answers: answersToAdd, questionId: question.id }));
			}
			if (answersToUpdate.length) {
				yield put(updateAnswers({ answers: answersToUpdate, questionId: question.id }));
			}
		},
	});
}

export function* deleteQuestionSaga(action: DeleteQuestionRequest) {
	const { id } = action.payload;
	yield call(request<DeleteQuestionPayload, DeleteQuestionSuccessPayload>, {
		service: questionApi.delete,
		params: {
			id,
		},
		setPending,
		onSuccess: deleteQuestionSuccess,
		onFailure: setError,
	});
}

export function* createAnswersSaga(action: CreateAnswersRequest) {
	const { questionId, answers } = action.payload;

	for (const answer of answers) {
		yield call(createAnswerSaga, { answer, questionId });
	}
}

function* createAnswerSaga(payload: CreateAnswerPayload) {
	const { answer, questionId } = payload;
	yield call(request<CreateAnswerPayload, CreateAnswersSuccessPayload>, {
		service: answerApi.create,
		params: {
			answer,
			questionId,
		},
		setPending,
		onFailure: setError,
		callback: function* ({ answer }) {
			yield put(createAnswerSuccess({ answer, questionId }));
		},
	});
}

export function* updateAnswersSaga(action: UpdateAnswersAction) {
	const { answers, questionId } = action.payload;

	for (const answer of answers) {
		yield call(updateAnswerSaga, { answer, questionId });
	}
}

function* updateAnswerSaga(payload: UpdateAnswerPayload) {
	const { answer, questionId } = payload;
	yield call(request<{ answer: Answer }, UpdateAnswersSuccessPayload>, {
		service: answerApi.patch,
		params: {
			answer,
		},
		setPending,
		onFailure: setError,
		callback: function* ({ answer }) {
			yield put(updateAnswerSuccess({ answer, questionId }));
		},
	});
}

export function* deleteAnswersSaga(action: DeleteAnswersAction) {
	const { id: answersToDelete, questionId } = action.payload;

	for (const id of answersToDelete) {
		yield call(deleteAnswerSaga, { id, questionId });
	}
}

export function* deleteAnswerSaga(payload: DeleteAnswerPayload) {
	const { id, questionId } = payload;
	yield call(request<{ id: number }, DeleteAnswersSuccessPayload>, {
		service: answerApi.delete,
		params: { id },
		setPending,
		onFailure: setError,
		callback: function* () {
			yield put(deleteAnswerSuccess({ id, questionId }));
		},
	});
}
