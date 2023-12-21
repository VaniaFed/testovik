import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { fetchUser } from '@/reduxjs/modules/auth/actions';
import { selectUser } from '@/reduxjs/modules/auth/selectors';
import { selectAuthStatus } from '@/reduxjs/modules/auth/selectors';

export const useAuth = (adminOnly: boolean) => {
	const user = useAppSelector(selectUser);
	const status = useAppSelector(selectAuthStatus);
	const router = useRouter();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!user) {
			dispatch(fetchUser());
		}
	}, []);

	useEffect(() => {
		const isUserReceived = user !== undefined;
		if (isUserReceived) {
			const isNotAuthenticated = user === null;

			if (isNotAuthenticated) {
				router.push('/signin');
			}

			const isNoAccess = user && !user.is_admin && adminOnly;

			if (isNoAccess) {
				router.push('/no-access');
			}
		}
	}, [user, status]);

	return { status };
};
