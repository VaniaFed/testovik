import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { useWriteToUrlParams } from '@/hooks/use-write-to-url-params';

import type { SortOrder } from '@/types/common';

export const useSort = (urlParam: string, defaultSort: SortOrder) => {
	const sortUrl = (useSearchParams().get(urlParam) as SortOrder) || defaultSort;
	const [sort, setSort] = useState<SortOrder>(sortUrl);

	const handleChangeSort = () => {
		setSort(sort === 'created_at_asc' ? 'created_at_desc' : 'created_at_asc');
	};

	useWriteToUrlParams(urlParam, sort);

	return {
		sort,
		handleChangeSort,
	};
};
