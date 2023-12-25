import { authSlice } from '@/reduxjs/modules/auth/reducer';
import { SignInRequest, SignUpRequest } from '@/reduxjs/modules/auth/types';
import { createAction } from '@reduxjs/toolkit';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';

export const fetchUser = createAction(FETCH_USER_REQUEST);
export const signUp = createAction<SignUpRequest>(SIGN_UP_REQUEST);
export const signIn = createAction<SignInRequest>(SIGN_IN_REQUEST);
export const logOut = createAction(LOG_OUT_REQUEST);

export const { setUserPending, fetchUserSuccess, fetchUserError, logoutSuccess } = authSlice.actions;