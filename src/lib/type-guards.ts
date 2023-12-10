import type { User } from '@/types/auth';

export const isUser = (user: User | undefined | null): user is User => {
	if (user === undefined || user === null) return false;

	return true;
};
