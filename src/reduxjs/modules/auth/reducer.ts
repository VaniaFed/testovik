import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
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

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserPending(state) {
			state.status = 'PENDING';
		},
		fetchUserSuccess(state, action: PayloadAction<User>) {
			state.user = action.payload;
			state.status = 'SUCCEEDED';
		},
		fetchUserError(state, action: PayloadAction<string>) {
			state.user = null;
			state.error = action.payload;
			state.status = 'FAILED';
		},
		logoutSuccess(state) {
			state.user = null;
			state.status = 'SUCCEEDED';
		},
	},
});

export const reducer = authSlice.reducer;
