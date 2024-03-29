import type { ChangeEvent } from 'react';

export type Status = 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCEEDED';

export type IconSize = '18' | '24' | '32' | '64';

export type ModalMode = 'create' | 'edit';

export type TestMode = 'edit' | 'pass';

export type SortOrder = 'created_at_desc' | 'created_at_asc';

export interface TestPageParams {
	params: { id: string };
}

export interface Pagination {
	total_pages: number;
	total_count: number;
}

export interface DropdownItem<T = string> {
	label: string;
	value: T;
}

export type ButtonVariant =
	| 'accent'
	| 'positive'
	| 'attention'
	| 'negative'
	| 'secondary'
	| 'text_black'
	| 'text_accent'
	| 'text_negative';

export type InputChangeEvent = ChangeEvent & { target: HTMLInputElement };
export type InputFocusEvent = ChangeEvent & { target: HTMLInputElement };

export type AbstractObjectWithId<T = number> = {
	id: T;
};
