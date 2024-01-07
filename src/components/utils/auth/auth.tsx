'use client';
import React from 'react';
import { Loader } from '@/components/ui/loader';
import { useAuth } from '@/hooks/use-auth';
import type { FC } from 'react';

interface Props {
	children: React.ReactNode;
	adminOnly?: boolean;
}

export const Auth: FC<Props> = ({ children, adminOnly = false }) => {
	const { status } = useAuth(adminOnly);
	return status === 'IDLE' || status === 'PENDING' ? <Loader /> : children;
};
