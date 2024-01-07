import { authSlice } from '@/reduxjs/modules/auth/reducer';

export const { setUserPending, fetchUserSuccess, fetchUserError, logoutSuccess } = authSlice.actions;
