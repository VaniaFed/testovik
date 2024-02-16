import { SortOrder } from '@/types/common';

export interface Props {
	sort: SortOrder;
	handleChangeSort: () => void;
	className?: string;
}
