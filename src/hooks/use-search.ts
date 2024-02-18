import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import { useWriteToUrlParams } from '@/hooks/use-write-to-url-params';

export const useSearch = (urlParam: string) => {
	const searchUrl = useSearchParams().get(urlParam) || '';
	const [search, setSearch] = useState(searchUrl);

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleClearSearch = () => {
		setSearch('');
	};

	useWriteToUrlParams(urlParam, search);

	return {
		search,
		handleChangeSearch,
		handleClearSearch,
	};
};
