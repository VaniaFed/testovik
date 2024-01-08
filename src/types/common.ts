import type { PayloadAction } from '@reduxjs/toolkit';
import type { QuestionType } from '@/reduxjs/modules/tests';

export type Status = 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCEEDED';

export type IconSize = '18' | '24' | '32' | '64';

export type ModalMode = 'create' | 'edit';

export type TestMode = 'edit' | 'pass';

export type TestSort = 'created_at_desc' | 'created_at_asc';

export interface TestPageParams {
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

export type ActionError = PayloadAction<string>;

export type ButtonVariant =
	| 'accent'
	| 'positive'
	| 'attention'
	| 'negative'
	| 'secondary'
	| 'text_black'
	| 'text_accent'
	| 'text_negative';
