'use client';
import { TestPage as _EditTestPage } from '@/components/pages/test-page';
import { Auth } from '@/components/utils/auth';
import { TestPageParams } from '@/types/common';

export default function EditTestPage({ params }: TestPageParams) {
	return (
		<Auth adminOnly>
			<_EditTestPage params={params} testMode="edit" />
		</Auth>
	);
}
