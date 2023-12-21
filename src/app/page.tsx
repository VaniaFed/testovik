'use client';
import { TestsPage as testsPage } from '@/components/pages/tests-page';
import { Auth } from '@/components/utils/auth';

export default function TestsPage() {
	return Auth(testsPage, false);
}
