'use client';
import { TestPage as editTestPage } from '@/components/pages/test-page';
import { Auth } from '@/components/utils/auth';
import { TestPageParams } from '@/types/common';

export default function EditTestPage({ params }: { params: TestPageParams }) {
	return Auth(editTestPage, false, 'edit', params);
}
