import { RootState } from '@/reduxjs/store';
import { isUser } from '@/lib/type-guards';

import type { User, Status } from '@/types/auth';

export const selectUser = (state: RootState): User | undefined | null => {
	if (isUser(state.auth.user)) {
		return state.auth.user;
	}
	return undefined;
};

export const selectStatus = (state: RootState): Status => {
	return state.auth.status;
};
