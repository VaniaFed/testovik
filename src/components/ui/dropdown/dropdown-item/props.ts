import type { DropdownItem } from '@/types/common';

export interface Props<T = string> {
	label: string;
	value: T;
	isActive: boolean;
	className?: string;
	onClick?: (item: DropdownItem<T>) => void;
}
