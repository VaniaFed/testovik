import { useWriteToUrlParams } from '@/hooks/use-write-to-url-params';
import { useAppSelector } from '@/reduxjs/hooks';
import { selectPagination } from '@/reduxjs/modules/tests';
import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export const usePagination = () => {
	const pagination = useAppSelector(selectPagination);
	const pageUrl = Number(useSearchParams().get('page')) || 1;
	const [page, setPage] = useState(pageUrl);

	useWriteToUrlParams('page', String(page));

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
