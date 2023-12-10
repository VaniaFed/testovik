'use client';
import React from 'react';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader } from '@/components/ui/loader';

import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { selectStatus, selectUser } from '@/reduxjs/modules/auth/selectors';
import { fetchUser } from '@/reduxjs/modules/auth/actions';

export const Auth = (ComponentToProtect: React.ComponentType, adminOnly = false) => {
	return function AuthComponent() {
		const status = useAppSelector(selectStatus);
		const user = useAppSelector(selectUser);

		const dispatch = useAppDispatch();
		const router = useRouter();

		useEffect(() => {
			if (!user) {
				dispatch(fetchUser());
			}
		}, [user, dispatch]);

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

		return status === 'PENDING' ? <Loader /> : <ComponentToProtect />;
	};
};
