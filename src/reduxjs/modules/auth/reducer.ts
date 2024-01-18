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

		setError(state, action: ActionError) {
			state.error = action.payload;
			state.status = 'FAILED';
		},

		fetchUserSuccess(state, action: FetchUserSuccess) {
			state.user = action.payload.user;
			state.status = 'SUCCEEDED';
		},

		signUpSuccess(state, action: SignUpSuccess) {
			state.user = action.payload.user;
			state.status = 'SUCCEEDED';
		},

		signInSuccess(state, action: SignInSuccess) {
			state.user = action.payload.user;
			state.status = 'SUCCEEDED';
		},

		fetchUserError(state, action: ActionError) {
			state.user = null;
			state.error = action.payload;
			state.status = 'FAILED';
		},

		logoutSuccess(state, action: LogOutSuccess) {
			state.user = null;
			state.status = 'SUCCEEDED';
		},
	},
});

export const reducer = authSlice.reducer;
