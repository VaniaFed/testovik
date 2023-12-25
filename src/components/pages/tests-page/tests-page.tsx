import React, { useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import { Button } from '@/components/ui/button';
import { Panel } from '@/components/ui/panel';
import { ModalAddTest } from '@/components/ui/modal';
import { Heading } from '@/components/ui/typography/heading';
import { Paragraph } from '@/components/ui/typography/paragraph';
import { Filter } from '@/components/pages/tests-page/filter/filter';
import { Label } from '@/components/ui/typography/label';
import { TestItem } from '@/components/ui/test-item';

import { useModal } from '@/hooks/use-modal';

import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { fetchAllTests } from '@/reduxjs/modules/tests/actions';
import { selectAllTests } from '@/reduxjs/modules/tests/selectors';
import { selectUser } from '@/reduxjs/modules/auth/selectors';

import styles from './tests-page.module.scss';

import type { FC } from 'react';
import { Sort } from '@/components/ui/icons/sort/sort';

const cx = classNames.bind(styles);

export const TestsPage: FC<unknown> = () => {
	const tests = useAppSelector(selectAllTests);
	const user = useAppSelector(selectUser);
	const { isModalShown, showModal, hideModal } = useModal(false);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllTests());
	}, [dispatch]);

	return (
		<div className={cx('tests-page')}>
			<div className={cx('tests-page__content')}>
				<Filter className={cx('tests-page__filter')} />
				<Heading size="1" className={cx('tests-page__title')}>
					Тесты
				</Heading>
				<div className={cx('tests-page__sort')}>
					<Label className={cx('tests-page__sort-label')}>Сначала новые</Label>
					<Sort size="24" />
				</div>
				<div className={cx('tests-page__list')}>
					{tests && tests.length > 0 ? (
						tests.map((test, key) => (
							<TestItem
								title={test.title}
								testId={test.id}
								questionNumber={test.questions.length}
								key={key}
								canEdit={user ? user.is_admin : false}
							/>
						))
					) : (
						<Paragraph>Тестов нет</Paragraph>
					)}
				</div>
			</div>
			{user?.is_admin && (
				<Panel>
					<Button variant="accent" onClick={showModal}>
						Добавить тест
					</Button>
				</Panel>
			)}
			{isModalShown && <ModalAddTest closable close={hideModal} />}
		</div>
	);
};