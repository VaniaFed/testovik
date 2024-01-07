import { createAction } from '@reduxjs/toolkit';
import {
	FETCH_USER_REQUEST,
	SIGN_UP_REQUEST,
	SIGN_IN_REQUEST,
	LOG_OUT_REQUEST,
} from '@/reduxjs/modules/auth/constants';
import type { SignInRequest, SignUpRequest } from '@/reduxjs/modules/auth/types';

export const fetchUser = createAction(FETCH_USER_REQUEST);
export const signUp = createAction<SignUpRequest>(SIGN_UP_REQUEST);
export const signIn = createAction<SignInRequest>(SIGN_IN_REQUEST);
export const logOut = createAction(LOG_OUT_REQUEST);
