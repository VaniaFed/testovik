import { RootState } from '@/reduxjs/store';
import { isUser } from '@/utils/type-guards';

import type { Status } from '@/types/auth';
import type { User } from '@/reduxjs/modules/auth/types';

export const selectUser = ({ auth: { user } }: RootState): User | undefined | null => {
	if (isUser(user)) {
		return user;
	}
	return undefined;
};

export const selectStatus = ({ auth: { status } }: RootState): Status => {
	return status;
};
