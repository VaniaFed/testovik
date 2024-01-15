import { authSlice } from '@/reduxjs/modules/auth/reducer';

export const { setPending, setError, signUpSuccess, signInSuccess, fetchUserSuccess, fetchUserError, logoutSuccess } =
	authSlice.actions;
