'use client';
import { PassTestPage } from '@/components/pages/pass-test-page';
import { PassTestParams } from '@/types/common';

export default function passTestPage({ params }: PassTestParams) {
	return <PassTestPage params={params} />;
}
