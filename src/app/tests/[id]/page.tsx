'use client';
import { PassTest as _PassTestPage } from '@/components/pages/pass-test';
import { Auth } from '@/components/utils/auth';
import { TestPageParams } from '@/types/common';

export default function PassTestPage({ params }: TestPageParams) {
	return (
		<Auth>
			<_PassTestPage params={params} />
		</Auth>
	);
}
