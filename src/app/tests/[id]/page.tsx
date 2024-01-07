'use client';
import { TestPage as _PassTestPage } from '@/components/pages/test-page';
import { Auth } from '@/components/utils/auth';
import { TestPageParams } from '@/types/common';

export default function PassTestPage({ params }: TestPageParams) {
	return (
		<Auth>
			<_PassTestPage params={params} testMode="pass" />
		</Auth>
	);
}
