import type { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { fetchUserError, fetchUserSuccess, logoutSuccess, setUserPending } from '@/reduxjs/modules/auth/actions';
import { authApi } from '@/services/auth';
import type { SignInAction, SignUpAction } from './types';
import type { User } from '@/reduxjs/modules/auth/types';

// TODO: request instead
export function* fetchUserSaga() {
	try {
		yield put(setUserPending());
		const userResponse: AxiosResponse<User> = yield call(authApi.getCurrentUser);

		yield put(fetchUserSuccess(userResponse.data));
	} catch (error) {
		yield put(fetchUserError('Fetch user error'));
	}
}

export function* signUpSaga({ payload }: SignUpAction) {
	try {
		const res: AxiosResponse<User> = yield call(authApi.signUp, payload);
		yield put(fetchUserSuccess(res.data));
	} catch (error) {
		yield put(fetchUserError('Error during signing up'));
	}
}

export function* signInSaga({ payload }: SignInAction) {
	try {
		const res: AxiosResponse<User> = yield call(authApi.signIn, payload);
		yield put(fetchUserSuccess(res.data));
	} catch (error) {
		yield put(fetchUserError('Error during signing in'));
	}
}

export function* logOutSaga() {
	const res: AxiosResponse<{ success: boolean }> = yield call(authApi.logOut);
	if (res.data.success) {
		yield put(logoutSuccess());
	}
}
