import { useState } from 'react';
import type { TestSort } from '@/types/common';

export const useSort = (defaultSort: TestSort) => {
	const [sort, setSort] = useState<TestSort>(defaultSort);

	const handleSetSort = () => {
		setSort(sort === 'created_at_asc' ? 'created_at_desc' : 'created_at_asc');
	};

	return {
		sort,
		handleSetSort,
	};
};
