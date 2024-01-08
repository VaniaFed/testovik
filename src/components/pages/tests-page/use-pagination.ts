import { useAppSelector } from '@/reduxjs/hooks';
import { selectPagination } from '@/reduxjs/modules/tests';
import { useCallback, useState } from 'react';

export const usePagination = () => {
	const pagination = useAppSelector(selectPagination);
	const [page, setPage] = useState(1);

	const handlePrevPageClick = useCallback(() => {
		const current = page;
		const prev = current - 1;

		setPage(prev >= 1 ? prev : current);
	}, [page, pagination]);

	const handleNextPageClick = useCallback(() => {
		const current = page;
		const next = current + 1;

		setPage(next <= pagination.total_pages ? next : current);
	}, [page, pagination]);

	const handleGoToPage = useCallback(
		(p: number) => {
			setPage(p);
		},
		[page, pagination],
	);

	return {
		handlePrevPageClick,
		handleNextPageClick,
		handleGoToPage,
		page,
		pagination,
	};
};
