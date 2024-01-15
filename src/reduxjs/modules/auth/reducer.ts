import { SignUpSuccess, SignInSuccess, FetchUserSuccess, LogOutSuccess } from './types';
import { createSlice } from '@reduxjs/toolkit';
import type { ActionError } from '@/reduxjs/common/types';
import type { User } from '@/reduxjs/modules/auth/types';
import type { Status } from '@/types/common';

export interface AuthState {
	user: User | undefined | null;
	status: Status;
	error?: string;
}

const initialState: AuthState = {
	user: undefined,
	status: 'IDLE',
};

// FIXME: user === пустая строка при первом включении
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
