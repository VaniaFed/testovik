import type { DropdownItem } from '@/types/common';
import type { FocusEvent } from 'react';

export interface Props<T = string> {
	items: DropdownItem<T>[];
	active: DropdownItem<T>;
	onChange?: (item: DropdownItem<T>) => void;
	name: string;
	isInvalid?: boolean;
	className?: string;
	onBlur?: (e: FocusEvent) => void;
}
