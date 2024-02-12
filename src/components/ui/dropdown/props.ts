import type { FocusEvent } from 'react';
import type { DropdownItem } from '@/types/common';

export interface Props<T = string> {
	items: DropdownItem<T>[];
	active: DropdownItem<T>;
	onChange?: (item: DropdownItem<T>) => void;
	name: string;
	placeholder?: string;
	isInvalid?: boolean;
	className?: string;
	onBlur?: (e: FocusEvent) => void;
}
