'use client';
import React from 'react';
import { Loader } from '@/components/ui/loader';
import { useAuth } from '@/hooks/use-auth';
import type { FC } from 'react';
import { TestMode, TestPageParams } from '@/types/common';

export const Auth = (
	UnprotectedComponent: FC<any>,
	adminOnly: boolean,
	testMode: TestMode,
	params?: TestPageParams,
) => {
	const { status } = useAuth(adminOnly);
	const ProtectedComponent = (props: any) => {
		return status === 'IDLE' || status === 'PENDING' ? <Loader /> : <UnprotectedComponent {...props} />;
	};
	return <ProtectedComponent params={params} testMode={testMode} />;
};
