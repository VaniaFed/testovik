import { useState } from 'react';
import { useWriteToUrlParams } from '@/hooks/use-write-to-url-params';
import { useSearchParams } from 'next/navigation';
import type { TestSort } from '@/types/common';

export const useSort = (defaultSort: TestSort) => {
	const sortUrl = (useSearchParams().get('sort') as TestSort) || defaultSort;
	const [sort, setSort] = useState<TestSort>(sortUrl);

	const handleChangeSort = () => {
		setSort(sort === 'created_at_asc' ? 'created_at_desc' : 'created_at_asc');
	};

	useWriteToUrlParams('sort', sort);

	return {
		sort,
		handleChangeSort,
	};
};
