import { call, put } from 'redux-saga/effects';
import type { AnyAction } from '@reduxjs/toolkit';

interface RequestSuccess<TData> {
	data: TData;
	onSuccess?: (data: TData) => AnyAction;
	callback?: (data: TData) => Generator;
}

export default function* requestSuccess<TData>({ data, onSuccess, callback }: RequestSuccess<TData>) {
	if (onSuccess) {
		yield put(onSuccess(data));
	}

	if (callback) {
		yield call(callback, data);
	}
}
