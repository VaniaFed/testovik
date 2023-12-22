import type { FocusEvent } from 'react';
import type { DropdownItem } from '@/types/common';

export interface Props {
	items: DropdownItem[];
	active: DropdownItem;
	name: string;
	placeholder?: string;
	isInvalid?: boolean;
	className?: string;
	onChange?: (item: DropdownItem) => void;
	onBlur?: (e: FocusEvent) => void;
}
