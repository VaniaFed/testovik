import { useRouter } from 'next/navigation';
import { call, put } from 'redux-saga/effects';
import type { AnyAction } from '@reduxjs/toolkit';

interface RequestSuccess<TData> {
	data: TData;
	redirect?: string;
	onSuccess?: (data: TData) => AnyAction;
	callback?: (data: TData) => Generator;
}

export default function* requestSuccess<TData>({ data, redirect, onSuccess, callback }: RequestSuccess<TData>) {
	if (redirect) {
		const router = useRouter();
		yield router.push(redirect);
	}

	if (onSuccess) {
		yield put(onSuccess(data));
	}

	if (callback) {
		yield call(callback, data);
	}
}
