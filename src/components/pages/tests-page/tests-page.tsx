import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { Filter } from '@/components/pages/tests-page/filter/filter';
import { Sort } from '@/components/pages/tests-page/sort/sort';
import { TestsList } from '@/components/pages/tests-page/tests-list';
import { Button } from '@/components/ui/button';
import { ModalAction } from '@/components/ui/modal/modal-action';
import { Pagination } from '@/components/ui/pagination';
import { Panel } from '@/components/ui/panel';
import { Heading } from '@/components/ui/typography/heading';
import { useModal } from '@/hooks/use-modal';
import { usePagination } from '@/hooks/use-pagination';
import { useSearch } from '@/hooks/use-search';
import { useSort } from '@/hooks/use-sort';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { User, selectUser } from '@/reduxjs/modules/auth';
import { Test, fetchAllTests, selectAllTests } from '@/reduxjs/modules/tests';

import { ModalAddTest } from './modal-add-test';
import styles from './tests-page.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const TestsPage: FC<unknown> = () => {
	const tests = useAppSelector(selectAllTests);
	const user = useAppSelector(selectUser);
	const { search, handleChangeSearch, handleClearSearch } = useSearch('search');
	const { sort, handleChangeSort } = useSort('sort', 'created_at_desc');
	const { page, pagination, handlePrevPageClick, handleNextPageClick, handleGoToPage } = usePagination('page');
	const [testsPerPage] = useState(4);
	const [isModalAddTestShown, showModalAddTest, hideModalAddTest] = useModal();
	const [isModalPassTestShown, showModalPassTest, hideModalPassTest] = useModal();
	const router = useRouter();

	const [testToPass, setTestToPass] = useState<Test>();

	const handleClickPassTest = (test: Test) => {
		setTestToPass(test);

		showModalPassTest();
	};

	const handlePassTest = () => {
		if (testToPass) {
			router.push(`/tests/${testToPass.id}`);
		}
	};

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			fetchAllTests({ page: search ? 1 : page, per: testsPerPage, sort: sort || 'created_at_desc', search }),
		);
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
				<TestsList
					tests={tests}
					user={user as User}
					className={cx('tests-page__list')}
					onItemClick={handleClickPassTest}
				/>
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
					<Button variant="accent" onClick={showModalAddTest}>
						Добавить тест
					</Button>
				</Panel>
			)}
			{isModalAddTestShown && <ModalAddTest close={hideModalAddTest} />}
			{isModalPassTestShown && (
				<ModalAction
					title="Вы действительно хотите пройти тест?"
					actionText="Пройти тест"
					close={hideModalPassTest}
					onAction={handlePassTest}
					primaryButtonVariant="accent"
					subtitle={testToPass?.title as string}
				/>
			)}
		</div>
	);
};
