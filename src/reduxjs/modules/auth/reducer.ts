import { User } from '@/lib/definitions';
import { createAction, createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	user: User | undefined;
	loading: boolean;
	error?: string;
}

const initialState: AuthState = {
	user: undefined,
	loading: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload;
		},
		fetchUserSuccess(state, action: PayloadAction<User>) {
			state.user = action.payload;
		},
		fetchUserError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
	},
});

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUser = createAction(FETCH_USER_REQUEST);

export default authSlice.reducer;
