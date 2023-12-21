'use client';
import { PassTestPage as passTestPage } from '@/components/pages/pass-test-page';
import { Auth } from '@/components/utils/auth';
import { PassTestParams } from '@/types/common';

export default function PassTestPage({ params }: { params: PassTestParams }) {
	return Auth(passTestPage, false, params);
}
