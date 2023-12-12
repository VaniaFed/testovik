import type { User } from '@/reduxjs/modules/auth/types';

export const isUser = (user: User | undefined | null): user is User => {
	if (user === undefined || user === null) return false;

	return true;
};
