import { RootState } from '@/reduxjs/store';

import type { User } from '@/reduxjs/modules/auth/types';

export const selectUser = ({ auth: { user } }: RootState): User | undefined | null => {
	return user;
};

export const selectAuthStatus = (state: RootState) => state.auth.status;
