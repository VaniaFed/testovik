import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import { useWriteToUrlParams } from '@/hooks/use-write-to-url-params';
import { useAppSelector } from '@/reduxjs/hooks';
import { selectPagination } from '@/reduxjs/modules/tests';

export const usePagination = (urlParam: string) => {
	const pagination = useAppSelector(selectPagination);
	const pageUrl = Number(useSearchParams().get(urlParam)) || 1;
	const [page, setPage] = useState(pageUrl);

	useWriteToUrlParams(urlParam, String(page));

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
