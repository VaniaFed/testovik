'use client';
import { EditTestPage as _EditTestPage } from '@/components/pages/edit-test-page';
import { Auth } from '@/components/utils/auth';
import { TestPageParams } from '@/types/common';

export default function EditTestPage({ params }: TestPageParams) {
	return (
		<Auth adminOnly>
			<_EditTestPage params={params} />
		</Auth>
	);
}
