'use client';
import { TestPage as passTestPage } from '@/components/pages/test-page';
import { Auth } from '@/components/utils/auth';
import { TestPageParams } from '@/types/common';

export default function PassTestPage({ params }: { params: TestPageParams }) {
	return Auth(passTestPage, false, 'pass', params);
}
