import { User, Status } from '@/types/auth';
import { createAction, createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

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
			state.error = action.payload;
			state.status = 'FAILED';
		},
	},
});

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUser = createAction(FETCH_USER_REQUEST);

export default authSlice.reducer;
