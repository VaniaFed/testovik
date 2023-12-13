import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { fetchUser } from '@/reduxjs/modules/auth/actions';
import { selectUser } from '@/reduxjs/modules/auth/selectors';
import { selectAuthStatus } from '@/reduxjs/modules/auth/selectors';

export const useAuth = (adminOnly: boolean) => {
	const status = useAppSelector(selectAuthStatus);
	const user = useAppSelector(selectUser);

	const dispatch = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			dispatch(fetchUser());
		}
	}, [user, status, dispatch]);

	useEffect(() => {
		const isUserReceived = user !== undefined;
		if (isUserReceived) {
			const isNotAuthorized = user === null && status === 'SUCCEEDED';
			if (isNotAuthorized) {
				router.push('/signin');
			}

			const noAccess = user && !user.is_admin && adminOnly;
			if (noAccess) {
				router.push('/no-access');
			}

			if (status === 'FAILED') {
				console.error('error');
				router.push('/no-access');
			}
		}
	}, [user, status]);

	return { user, status };
};
