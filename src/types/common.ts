import { QuestionType } from '@/reduxjs/modules/tests/types';

export interface PassTestParams {
	params: { id: string };
}

export interface Pagination {
	total_pages: number;
	total_count: number;
}

export interface DropdownItem {
	label: string;
	value: QuestionType;
}

export type IconSize = '18' | '24' | '32' | '64';
