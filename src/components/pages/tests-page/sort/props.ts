import { TestSort } from '@/types/common';

export interface Props {
	sort: TestSort;
	handleChangeSort: () => void;
	className?: string;
}
