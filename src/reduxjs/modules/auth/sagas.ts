import type { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import {
	fetchUserError,
	fetchUserSuccess,
	logoutSuccess,
	setPending,
	setError,
	signUpSuccess,
	signInSuccess,
} from '@/reduxjs/modules/auth/actions';
import { authApi } from '@/services/auth';
import { SignUpPayload, typeSignInRequest, typeSignUpRequest, LogOutSuccessPayload } from './types';
import type {
	FetchUserSuccessPayload,
	LogOutSuccessPayload,
	SignInPayload,
	SignInSuccessPayload,
	SignUpSuccessPayload,
	User,
} from '@/reduxjs/modules/auth/types';
import request from '@/reduxjs/helpers/request';

// TODO: request instead
export function* fetchUserSaga() {
	yield call(request<null, FetchUserSuccessPayload>, {
		service: authApi.getCurrentUser,
		setPending,
		onSuccess: fetchUserSuccess,
		onFailure: fetchUserError,
	});
}

export function* signUpSaga({ payload }: SignUpRequest) {
	yield call(request<SignUpPayload, SignUpSuccessPayload>, {
		service: authApi.signUp,
		params: payload,
		onSuccess: signUpSuccess,
		onFailure: setError,
	});
}

export function* signInSaga({ payload }: SignInRequest) {
	yield call(request<SignInPayload, SignInSuccessPayload>, {
		service: authApi.signIn,
		params: payload,
		onSuccess: signInSuccess,
		onFailure: setError,
	});
}

export function* logOutSaga() {
	yield call(request<null, LogOutSuccessPayload>, {
		service: authApi.logOut,
		onSuccess: logoutSuccess,
		onFailure: setError,
	});
}
