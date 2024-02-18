import { createAction } from '@reduxjs/toolkit';

import {
	FETCH_USER_REQUEST,
	LOG_OUT_REQUEST,
	SIGN_IN_REQUEST,
	SIGN_UP_REQUEST,
} from '@/reduxjs/modules/auth/constants';

import type { SignInPayload, SignUpPayload } from '@/reduxjs/modules/auth/types';

export const fetchUser = createAction(FETCH_USER_REQUEST);
export const signUp = createAction<SignUpPayload>(SIGN_UP_REQUEST);
export const signIn = createAction<SignInPayload>(SIGN_IN_REQUEST);
export const logOut = createAction(LOG_OUT_REQUEST);
