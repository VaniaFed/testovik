import { put } from 'redux-saga/effects';

import type { AnyAction } from '@reduxjs/toolkit';

interface RequestFailure {
	message: string;
	onFailure?: (message: string) => AnyAction;
}

export default function* requestFailure({ message, onFailure }: RequestFailure) {
	if (onFailure) {
		yield put(onFailure(message));
	}
}
