import { all, call, put } from 'redux-saga/effects';
import { testApi } from '@/services/test';
import type { AxiosResponse } from 'axios';
import type {
	AddAnswersAction,
	AddQuestionAction,
	Answer,
	CreateTestAction,
	DeleteQuestionAction,
	EditQuestionAction,
	FetchAllTestsResponse,
	FetchTestByIdAction,
	Question,
	Test,
} from '@/reduxjs/modules/tests/types';
import {
	setTestsPending,
	createTestError,
	createTestSuccess,
	fetchAllTestsError,
	fetchAllTestsSuccess,
	fetchTestByIdError,
	fetchTestByIdSuccess,
	addQuestionSuccess,
	addQuestionError,
	addAnswerSuccess,
	addAnswers,
	addAnswerError,
	deleteQuestionSuccess,
	editQuestionSuccess,
} from '@/reduxjs/modules/tests/actions';
import { questionApi } from '@/services/question';
import { answerApi } from '@/services/answer';

export function* createTestSaga(action: CreateTestAction) {
	yield put(setTestsPending());
	const title = action.payload;
	try {
		const test: AxiosResponse = yield call(testApi.create, title);
		yield put(createTestSuccess(test.data));
	} catch (error) {
		yield put(createTestError('Error while creating a test'));
	}
}

export function* fetchAllTestsSaga() {
	yield put(setTestsPending());
	try {
		const res: AxiosResponse<FetchAllTestsResponse> = yield call(testApi.getAll);
		yield put(
			fetchAllTestsSuccess({
				tests: res.data.tests,
				meta: res.data.meta,
			}),
		);
	} catch (error) {
		yield put(fetchAllTestsError('Error during fetching tests'));
	}
}

export function* fetchTestByIdSaga(action: FetchTestByIdAction) {
	yield put(setTestsPending());
	const id = action.payload;
	try {
		const res: AxiosResponse<Test> = yield call(testApi.getById, id);
		yield put(fetchTestByIdSuccess(res.data));
	} catch (error) {
		yield put(fetchTestByIdError('Error during fetching test'));
	}
}

export function* addQuestionSaga(action: AddQuestionAction) {
	yield put(setTestsPending());
	const { question, testId } = action.payload;
	try {
		const res: AxiosResponse<Question> = yield call(questionApi.create, question, testId);
		yield put(addQuestionSuccess(res.data));
		yield put(addAnswers({ answers: question.answers, questionId: res.data.id }));
	} catch (error) {
		addQuestionError('Error during adding a question');
	}
}

export function* deleteQuestionSaga(action: DeleteQuestionAction) {
	yield put(setTestsPending());
	const id = action.payload;
	try {
		const res: AxiosResponse<{ status: 'ok' }> = yield call(questionApi.delete, id);
		if (res.data.status === 'ok') {
			yield put(deleteQuestionSuccess(id));
		}
	} catch (error) {
		addQuestionError('Error during adding a question');
	}
}

export function* editQuestionSaga(action: EditQuestionAction) {
	yield put(setTestsPending());
	const question = action.payload;

	try {
		const res: AxiosResponse<Question> = yield call(questionApi.patch, question, question.id);
		yield put(editQuestionSuccess(res.data));
	} catch (error) {
		addQuestionError('Error during adding a question');
	}
}

export function* getAnswersDetailsSaga(action: AddAnswersAction) {
	yield put(setTestsPending());
	const { answers, questionId } = action.payload;
	const response: AxiosResponse<Answer> = yield all(
		answers.map((answer) => call(answerApi.create, answer, questionId)),
	);
	return response;
}

export function* addAnswersSaga(action: AddAnswersAction) {
	yield put(setTestsPending());
	const { questionId } = action.payload;

	try {
		const responses: AxiosResponse<Answer>[] = yield call(getAnswersDetailsSaga, addAnswers(action.payload));
		yield all(
			responses.map((res) =>
				put(
					addAnswerSuccess({
						answer: res.data,
						questionId,
					}),
				),
			),
		);
	} catch (error) {
		addAnswerError('Error during adding an answer');
	}
}
