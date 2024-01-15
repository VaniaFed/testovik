import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { TestsList } from '@/components/pages/tests-page/tests-list';
import { Pagination } from '@/components/ui/pagination';
import { ModalAddTest } from './modal-add-test';
import { Panel } from '@/components/ui/panel';
import { Filter } from '@/components/pages/tests-page/filter/filter';
import { Heading } from '@/components/ui/typography/heading';
import { Button } from '@/components/ui/button';
import { User, selectUser } from '@/reduxjs/modules/auth';
import { fetchAllTests, selectAllTests } from '@/reduxjs/modules/tests';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { useModal } from '@/hooks/use-modal';
import { usePagination } from '@/components/pages/tests-page/use-pagination';
import { useSearch } from '@/components/pages/tests-page/use-search';
import { useSort } from '@/components/pages/tests-page/use-sort';
import styles from './tests-page.module.scss';
import type { FC } from 'react';
import { Sort } from '@/components/pages/tests-page/sort/sort';

const cx = classNames.bind(styles);

export const TestsPage: FC<unknown> = () => {
	const tests = useAppSelector(selectAllTests);
	const user = useAppSelector(selectUser);
	const { isModalShown, showModal, hideModal } = useModal(false);
	const { search, handleChangeSearch, handleClearSearch } = useSearch();
	const { sort, handleChangeSort } = useSort('created_at_desc');
	const { page, pagination, handlePrevPageClick, handleNextPageClick, handleGoToPage } = usePagination();
	const [testsPerPage] = useState(4);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllTests({ page: page, per: testsPerPage, sort: sort || 'created_at_desc', search }));
	}, [dispatch, page, sort, search]);

	return (
		<div className={cx('tests-page')}>
			<div className={cx('tests-page__content')}>
				<Filter
					className={cx('tests-page__filter')}
					value={search}
					onChange={handleChangeSearch}
					onClear={handleClearSearch}
				/>
				<Heading size="1" className={cx('tests-page__title')}>
					Тесты
				</Heading>
				<Sort sort={sort} handleChangeSort={handleChangeSort} className={cx('tests-page__sort')} />
				<TestsList tests={tests} user={user as User} className={cx('tests-page__list')} />
				{pagination.total_pages > 1 && (
					<Pagination
						totalPages={pagination.total_pages}
						totalItems={pagination.total_count}
						itemsPerPage={testsPerPage}
						currentPage={page}
						onPrevPageClick={handlePrevPageClick}
						onNextPageClick={handleNextPageClick}
						onItemClick={handleGoToPage}
						className={cx('tests-page__pagination')}
					/>
				)}
			</div>
			{user?.is_admin && (
				<Panel className={cx('tests-page__panel')}>
					<Button variant="accent" onClick={showModal}>
						Добавить тест
					</Button>
				</Panel>
			)}
			{isModalShown && <ModalAddTest closable close={hideModal} />}
		</div>
	);
};
