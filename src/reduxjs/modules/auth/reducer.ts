import { SignUpSuccess, SignInSuccess, FetchUserSuccess, LogOutSuccess } from './types';
import { createSlice } from '@reduxjs/toolkit';
import type { ActionError } from '@/reduxjs/common/types';
import type { AuthState } from '@/reduxjs/modules/auth/types';

const initialState: AuthState = {
	user: undefined,
	status: 'IDLE',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setPending(state) {
			state.status = 'PENDING';
		},

		setSucceeded(state) {
			state.status = 'SUCCEEDED';
		},

		setError(state, action: ActionError) {
			state.error = action.payload;
			state.status = 'FAILED';
		},

		fetchUserSuccess(state, action: FetchUserSuccess) {
			state.user = action.payload.user;
		},

		signUpSuccess(state, action: SignUpSuccess) {
			state.user = action.payload.user;
		},

		signInSuccess(state, action: SignInSuccess) {
			state.user = action.payload.user;
		},

		fetchUserError(state, action: ActionError) {
			state.user = null;
			state.error = action.payload;
			state.status = 'FAILED';
		},

		// eslint-disable-next-line
		logoutSuccess(state, action: LogOutSuccess) {
			state.user = null;
		},
	},
});

export const reducer = authSlice.reducer;
