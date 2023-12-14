import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './pass-test-page.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { selectCurrentTest } from '@/reduxjs/modules/tests/selectors';
import { useAuth } from '@/hooks/use-auth';
import { Loader } from '@/components/ui/loader';
import { fetchTestById } from '@/reduxjs/modules/tests/actions';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';

const cx = classNames.bind(styles);

export const PassTestPage: FC<Props> = ({ params: { id }, className }) => {
	const { user, status } = useAuth(true);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) {
			dispatch(fetchTestById(Number(id)));
		}
	}, [dispatch, id]);

	const test = useAppSelector(selectCurrentTest);
	console.log(test);

	// запрос за тестом по id

	return (
		<>
			{status === 'IDLE' || status === 'PENDING' || !test ? (
				<Loader />
			) : (
				<div className={cx('pass-test-page', className)}>
					<div className={cx('pass-test-page__heading')}>
						<Heading>{test.title}</Heading>
						<Label>{test.questions.length} вопросов</Label>
					</div>
					<ul>
						<li>список</li>
						<li>вопросов</li>
					</ul>
					id: {id}
				</div>
			)}
		</>
	);
};
