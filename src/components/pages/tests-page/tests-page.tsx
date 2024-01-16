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
import { Test, fetchAllTests, selectAllTests } from '@/reduxjs/modules/tests';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { useModal } from '@/hooks/use-modal';
import { usePagination } from '@/components/pages/tests-page/use-pagination';
import { useSearch } from '@/components/pages/tests-page/use-search';
import { useSort } from '@/components/pages/tests-page/use-sort';
import styles from './tests-page.module.scss';
import type { FC } from 'react';
import { Sort } from '@/components/pages/tests-page/sort/sort';
import { ModalAction } from '@/components/ui/modal/modal-action';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

export const TestsPage: FC<unknown> = () => {
	const tests = useAppSelector(selectAllTests);
	const user = useAppSelector(selectUser);
	const { search, handleChangeSearch, handleClearSearch } = useSearch();
	const { sort, handleChangeSort } = useSort('created_at_desc');
	const { page, pagination, handlePrevPageClick, handleNextPageClick, handleGoToPage } = usePagination();
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
			{isModalAddTestShown && <ModalAddTest closable close={hideModalAddTest} />}
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
