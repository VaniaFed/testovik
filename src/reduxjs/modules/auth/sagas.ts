import { call } from 'redux-saga/effects';
import {
	fetchUserError,
	fetchUserSuccess,
	logoutSuccess,
	setPending,
	setSucceeded,
	setError,
	signUpSuccess,
	signInSuccess,
} from '@/reduxjs/modules/auth/actions';
import { authApi } from '@/services/auth';
import request from '@/reduxjs/helpers/request';
import type {
	FetchUserSuccessPayload,
	LogOutSuccessPayload,
	SignInPayload,
	SignInRequest,
	SignInSuccessPayload,
	SignUpPayload,
	SignUpRequest,
	SignUpSuccessPayload,
} from '@/reduxjs/modules/auth/types';

export function* fetchUserSaga() {
	yield call(request<null, FetchUserSuccessPayload>, {
		service: authApi.getCurrentUser,
		setPending,
		setSucceeded,
		onSuccess: fetchUserSuccess,
		onFailure: fetchUserError,
	});
}

export function* signUpSaga({ payload }: SignUpRequest) {
	yield call(request<SignUpPayload, SignUpSuccessPayload>, {
		service: authApi.signUp,
		params: payload,
		setSucceeded,
		onSuccess: signUpSuccess,
		onFailure: setError,
	});
}

export function* signInSaga({ payload }: SignInRequest) {
	yield call(request<SignInPayload, SignInSuccessPayload>, {
		service: authApi.signIn,
		params: payload,
		setSucceeded,
		onSuccess: signInSuccess,
		onFailure: setError,
	});
}

export function* logOutSaga() {
	yield call(request<null, LogOutSuccessPayload>, {
		service: authApi.logOut,
		setSucceeded,
		onSuccess: logoutSuccess,
		onFailure: setError,
	});
}
