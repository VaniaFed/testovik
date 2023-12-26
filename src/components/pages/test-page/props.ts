import { TestPageParams, TestMode } from '@/types/common';

export interface Props extends TestPageParams {
	testMode: TestMode;
	className?: string;
}
