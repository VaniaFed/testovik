import { QuestionType } from '@/reduxjs/modules/tests/types';
import { PayloadAction } from '@reduxjs/toolkit';

export type ButtonVariant =
	| 'accent'
	| 'positive'
	| 'attention'
	| 'negative'
	| 'secondary'
	| 'text_accent'
	| 'text_negative';

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

export type IconSize = '18' | '24' | '32' | '64';

export type ModalMode = 'create' | 'edit';
export type TestMode = 'edit' | 'pass';

export type ActionError = PayloadAction<string>;
