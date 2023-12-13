import { RootState } from '@/reduxjs/store';
import { isUser } from '@/utils/type-guards';

import type { User } from '@/reduxjs/modules/auth/types';

export const selectUser = ({ auth: { user } }: RootState): User | undefined | null => {
	if (isUser(user)) {
		return user;
	}
	return undefined;
};

export const selectAuthStatus = (state: RootState) => state.auth.status;
