import { call, put } from 'redux-saga/effects';
import { fetchUserSuccess, logoutSuccess, setUserPending } from '@/reduxjs/modules/auth/actions';
import { authApi } from '@/services/auth';
import type { SignInAction, SignUpAction } from './types';
import type { User } from '@/reduxjs/modules/auth/types';

export function* fetchUserSaga() {
	yield put(setUserPending());

	const user: User = yield call(authApi.getCurrentUser);

	yield put(fetchUserSuccess(user));
}

export function* signUpSaga({ payload }: SignUpAction) {
	const user: User = yield call(authApi.signUp, payload);

	yield put(fetchUserSuccess(user));
}

export function* signInSaga({ payload }: SignInAction) {
	const user: User = yield call(authApi.signIn, payload);

	yield put(fetchUserSuccess(user));
}

export function* logOutSaga() {
	const res: { success: boolean } = yield call(authApi.logOut);
	if (res.success) {
		yield put(logoutSuccess());
	}
}
