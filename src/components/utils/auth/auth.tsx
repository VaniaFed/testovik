'use client';
import React from 'react';

import { LoaderBox } from '@/components/ui/loader-box';
import { useAuth } from '@/hooks/use-auth';

import type { FC } from 'react';

interface Props {
	children: React.ReactNode;
	adminOnly?: boolean;
}

export const Auth: FC<Props> = ({ children, adminOnly = false }) => {
	const { status } = useAuth(adminOnly);
	return status === 'IDLE' || status === 'PENDING' ? <LoaderBox /> : children;
};
