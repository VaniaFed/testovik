import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put } from 'redux-saga/effects';
import { fetchUser, fetchUserSuccess, setUserPending } from '@/reduxjs/modules/auth/actions';
import { authApi } from '@/services/auth';

import type { SignInRequest, SignUpRequest, User } from '@/types/auth';

export function* fetchUserSaga(): Generator {
	yield put(setUserPending());
	yield delay(2000);
	const user: User = (yield call(authApi.getCurrentUser)) as User;

	yield put(fetchUserSuccess(user));
}

export function* signUpSaga({ payload }: PayloadAction<SignUpRequest>): Generator {
	// const user = yield call(authApi.signUp, payload);

	console.log(payload);

	yield put(fetchUser());
}

export function* signInSaga({ payload }: PayloadAction<SignInRequest>): Generator {
	// const user = yield call(authApi.signIn, payload);

	console.log(payload);

	yield put(fetchUser());
}

export function* logOutSaga() {
	// const user = (yield call(authApi.logOut)) as User;
}
