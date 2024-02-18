'use client';
import { TestsPage as _TestsPage } from '@/components/pages/tests-page';
import { Auth } from '@/components/utils/auth';

export default function TestsPage() {
	return (
		<Auth>
			<_TestsPage />
		</Auth>
	);
}
