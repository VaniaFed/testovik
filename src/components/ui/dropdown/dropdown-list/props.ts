import type { DropdownItem } from '@/types/common';

export interface Props {
	items: DropdownItem[];
	active: DropdownItem;
	className?: string;
	onClick?: (item: DropdownItem) => void;
}
