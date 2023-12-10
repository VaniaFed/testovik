import { authSlice } from '@/reduxjs/modules/auth/reducer';
import { LogOutRequest, SignInRequest, SignUpRequest } from '@/types/auth';
import { PayloadAction, createAction } from '@reduxjs/toolkit';

export const { setUserPending, fetchUserSuccess, fetchUserError } = authSlice.actions;

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';

export const fetchUser = createAction(FETCH_USER_REQUEST);
export const signUp = createAction<PayloadAction<SignUpRequest>>(SIGN_UP_REQUEST);
export const signIn = createAction<PayloadAction<SignInRequest>>(SIGN_IN_REQUEST);
export const logOut = createAction<PayloadAction<LogOutRequest>>(LOG_OUT_REQUEST);
