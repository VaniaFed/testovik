import { ChangeEvent, useState } from 'react';

export const useSearch = () => {
	const [search, setSearch] = useState('');

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return {
		search,
		handleChangeSearch,
	};
};
