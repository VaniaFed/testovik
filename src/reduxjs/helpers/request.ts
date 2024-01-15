import { call, put } from 'redux-saga/effects';
import requestSuccess from '@/reduxjs/helpers/request-success';
import type { AxiosResponse } from 'axios';
import type { AnyAction } from '@reduxjs/toolkit';
import requestFailure from '@/reduxjs/helpers/failure-request';

interface Request<TPayload, TData> {
	service: (params?: any) => any;
	params?: TPayload;
	setPending?: () => AnyAction;
	onSuccess?: (data: TData) => AnyAction;
	onFailure?: (message: string) => AnyAction;
	callback?: (data: TData) => Generator;
}

/**
 *
 * @service service function (e.g. answers.get)
 * @params params to pass to service
 * @setPending action to set pending
 * @onSuccess action to call call on success
 * @onFailure action to call on failure
 * @callback function that calls when success
 */
export default function* request<TPayload = object, TData = object>({
	service,
	params,
	setPending,
	onSuccess,
	onFailure,
	callback,
}: Request<TPayload, TData>) {
	if (setPending) {
		yield put(setPending());
	}

	try {
		const response: AxiosResponse<TData> = yield call(service, params);
		const { status, data } = response;

		if ([200, 201].includes(status)) {
			yield call(requestSuccess<TData>, {
				data,
				onSuccess,
				callback,
			});
		} else {
			const errorMessage = data instanceof Error ? data.message : 'Произошла непредвиденная ошибка';
			yield call(requestFailure, { message: errorMessage, onFailure });
		}
	} catch (err) {
		console.log('catch');

		const errorMessage = 'Произошла непредвиденная ошибка';
		yield call(requestFailure, { message: errorMessage, onFailure });
	}
}
