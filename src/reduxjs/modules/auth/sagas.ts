import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { fetchUser, fetchUserSuccess, setUserLoading } from '@/reduxjs/modules/auth/actions';
import { authApi } from '@/services/auth';

import type { SignInRequest, SignUpRequest } from '@/types/auth';
import { User } from '@/lib/definitions';

export function* fetchUserSaga(): Generator {
	yield put(setUserLoading(true));
	const user: User = (yield call(authApi.getCurrentUser)) as User;

	yield put(fetchUserSuccess(user));
}

export function* signUpSaga({ payload }: PayloadAction<SignUpRequest>): Generator {
	const user = yield call(authApi.signUp, payload);

	yield put(fetchUser());
}

export function* signInSaga({ payload }: PayloadAction<SignInRequest>): Generator {
	const user = yield call(authApi.signIn, payload);

	yield put(fetchUser());
}

export function* logOutSaga() {
	const user = (yield call(authApi.logOut)) as User;
}
