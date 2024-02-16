import { all, call, fork, put } from 'redux-saga/effects';
import request from '@/reduxjs/helpers/request';
import { testApi } from '@/services/test';
import { questionApi } from '@/services/question';
import { answerApi } from '@/services/answer';
import {
	setPending,
	setSucceeded,
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
	moveAnswerSuccess,
} from '@/reduxjs/modules/tests/actions';
import {
	CreateAnswersAction,
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
	MoveAnswersAction,
	MoveAnswerPosition,
	MoveAnswerPayload,
} from '@/reduxjs/modules/tests/types';
import { createAnswers, deleteAnswers, moveAnswers, updateAnswers } from '@/reduxjs/modules/tests/async-actions';

export function* createTestSaga({ payload }: CreateTestRequest) {
	yield call(request<CreateTestPayload, CreateTestSuccessPayload>, {
		service: testApi.create,
		params: payload,
		setPending,
		setSucceeded,
		onSuccess: createTestSuccess,
		onFailure: setError,
	});
}

export function* fetchAllTestsSaga({ payload }: FetchAllTestsRequest) {
	yield call(request<FetchAllTestsPayload, FetchAllTestsSuccessPayload>, {
		service: testApi.getAll,
		params: payload,
		setPending,
		setSucceeded,
		onSuccess: fetchAllTestsSuccess,
		onFailure: setError,
	});
}

export function* fetchTestByIdSaga({ payload: { id } }: FetchTestByIdRequest) {
	yield call(request<FetchTestByIdPayload, FetchTestByIdSuccessPayload>, {
		service: testApi.getById,
		params: {
			id,
		},
		setPending,
		setSucceeded,
		onSuccess: fetchTestByIdSuccess,
		onFailure: setError,
	});
}

export function* updateTestSaga({ payload }: UpdateTestRequest) {
	yield call(request<UpdateTestPayload, UpdateTestSuccessPayload>, {
		service: testApi.patch,
		params: payload,
		setPending,
		onSuccess: updateTestSuccess,
		onFailure: setError,
	});
}

export function* deleteTestSaga({ payload }: DeleteTestRequest) {
	yield call(request<DeleteTestPayload, DeleteTestSuccessPayload>, {
		service: testApi.delete,
		params: payload,
		setPending,
		onSuccess: deleteTestSuccess,
		onFailure: setError,
	});
}

export function* createQuestionSaga({ payload: { testId, question } }: CreateQuestionRequest) {
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
			if (question.answers) {
				yield call(createAnswersSaga, createAnswers({ answers: question.answers, questionId: id }));
			}
			yield put(setSucceeded());
		},
	});
}

export function* updateQuestionSaga({ payload }: UpdateQuestionRequest) {
	const { question, answersToAdd, answersToUpdate, answersToMove, answersToDelete } = payload;
	yield call(request<Pick<UpdateQuestionPayload, 'question'>, UpdateQuestionSuccessPayload>, {
		service: questionApi.patch,
		params: {
			question,
		},
		setPending,
		onSuccess: updateQuestionSuccess,
		onFailure: setError,
		callback: function* () {
			yield all([
				call(deleteAnswersSaga, deleteAnswers({ id: answersToDelete, questionId: question.id })),
				call(createAnswersSaga, createAnswers({ answers: answersToAdd, questionId: question.id })),
				call(moveAnswersSaga, moveAnswers({ positions: answersToMove, questionId: question.id })),
				call(updateAnswersSaga, updateAnswers({ answers: answersToUpdate, questionId: question.id })),
			]);
			yield put(setSucceeded());
		},
	});
}

export function* deleteQuestionSaga({ payload }: DeleteQuestionRequest) {
	yield call(request<DeleteQuestionPayload, DeleteQuestionSuccessPayload>, {
		service: questionApi.delete,
		params: payload,
		setPending,
		setSucceeded,
		onFailure: setError,
		callback: function* () {
			yield put(deleteQuestionSuccess({ id: payload.id }));
		},
	});
}

export function* createAnswersSaga({ payload: { questionId, answers } }: CreateAnswersAction) {
	for (const answer of answers) {
		yield call(createAnswerSaga, { answer, questionId });
	}
}

function* createAnswerSaga(payload: CreateAnswerPayload) {
	const { answer, questionId } = payload;
	yield call(request<CreateAnswerPayload, CreateAnswersSuccessPayload>, {
		service: answerApi.create,
		params: payload,
		setPending,
		onFailure: setError,
		callback: function* ({ answer: resAnswer }) {
			yield put(createAnswerSuccess({ answer: resAnswer, questionId }));
			if (answer.position) {
				const position: MoveAnswerPosition = {
					...answer.position,
					id: resAnswer.id,
				};
				yield put(moveAnswers({ positions: [position], questionId }));
			}
		},
	});
}

export function* updateAnswersSaga({ payload: { questionId, answers } }: UpdateAnswersAction) {
	for (const answer of answers) {
		yield fork(updateAnswerSaga, { answer, questionId });
	}
}

function* updateAnswerSaga({ questionId, answer }: UpdateAnswerPayload) {
	yield call(request<{ answer: Answer }, UpdateAnswersSuccessPayload>, {
		service: answerApi.patch,
		params: {
			answer,
		},
		onFailure: setError,
		callback: function* ({ answer }) {
			yield put(updateAnswerSuccess({ answer, questionId }));
		},
	});
}

export function* moveAnswersSaga({ payload: { questionId, positions } }: MoveAnswersAction) {
	for (const position of positions) {
		yield call(moveAnswerSaga, { position, questionId });
	}
}

function* moveAnswerSaga({ questionId, position }: MoveAnswerPayload) {
	yield call(request<MoveAnswerPosition, null>, {
		service: answerApi.move,
		params: position,
		setPending,
		onFailure: setError,
		callback: function* () {
			yield put(moveAnswerSuccess({ position, questionId }));
		},
	});
}

export function* deleteAnswersSaga({ payload: { id: answersToDelete, questionId } }: DeleteAnswersAction) {
	for (const id of answersToDelete) {
		yield fork(deleteAnswerSaga, { id, questionId });
	}
}

export function* deleteAnswerSaga({ questionId, id }: DeleteAnswerPayload) {
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
