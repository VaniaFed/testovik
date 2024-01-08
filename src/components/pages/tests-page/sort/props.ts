import { TestSort } from '@/types/common';

export interface Props {
	sort: TestSort;
	handleSetSort: () => void;
	className?: string;
}
