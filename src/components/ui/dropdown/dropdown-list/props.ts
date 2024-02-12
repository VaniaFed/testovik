import type { DropdownItem } from '@/types/common';
import { Ref } from 'react';

export interface Props<T = string> {
	items: DropdownItem<T>[];
	active: DropdownItem<T>;
	className?: string;
	customRef?: Ref<HTMLUListElement>;
	onClick?: (item: DropdownItem<T>) => void;
}
