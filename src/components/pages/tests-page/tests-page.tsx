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
import { Loader } from '@/components/ui/loader';
import { TestItem } from '@/components/ui/test-item';

import { useModal } from '@/hooks/use-modal';
import { useAuth } from '@/hooks/use-auth';

import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { fetchAllTests } from '@/reduxjs/modules/tests/actions';
import { selectAllTests } from '@/reduxjs/modules/tests/selectors';

import styles from './tests-page.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const TestsPage: FC<{ params: { params: { id: string } } }> = (params) => {
	console.log(params);

	const { user, status } = useAuth(false);
	const tests = useAppSelector(selectAllTests);
	const { isModalShown, showModal, hideModal } = useModal(false);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllTests());
	}, [dispatch]);

	return (
		<>
			{status === 'IDLE' || status === 'PENDING' ? (
				<Loader />
			) : (
				<div className={cx('tests-page')}>
					<div className={cx('tests-page__content')}>
						<Filter className={cx('tests-page__filter')} />
						<Heading size="1" className={cx('tests-page__title')}>
							Тесты
						</Heading>
						<div className={cx('tests-page__sort')}>
							<Label className={cx('tests-page__sort-label')}>Сначала новые</Label>
							<Image src={'/sort.svg'} width={24} height={24} alt="Сначала новые" />
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
					<Panel>
						<Button variant="accent" onClick={showModal}>
							Добавить тест
						</Button>
					</Panel>
					{isModalShown && <ModalAddTest closable onClose={hideModal} />}
				</div>
			)}
		</>
	);
};
