import { useSearchParams } from 'next/navigation';
import { useWriteToUrlParams } from '@/hooks/use-write-to-url-params';
import { ChangeEvent, useState } from 'react';

export const useSearch = () => {
	const searchUrl = useSearchParams().get('search') || '';
	const [search, setSearch] = useState(searchUrl);

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleClearSearch = () => {
		setSearch('');
	};

	useWriteToUrlParams('search', search);

	return {
		search,
		handleChangeSearch,
		handleClearSearch,
	};
};
