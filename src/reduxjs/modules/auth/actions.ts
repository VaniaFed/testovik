import { authSlice } from '@/reduxjs/modules/auth/reducer';

export const {
	setPending,
	setSucceeded,
	setError,
	signUpSuccess,
	signInSuccess,
	fetchUserSuccess,
	fetchUserError,
	logoutSuccess,
} = authSlice.actions;
