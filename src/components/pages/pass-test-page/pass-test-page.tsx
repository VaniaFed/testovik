import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './pass-test-page.module.scss';

import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { selectCurrentTest } from '@/reduxjs/modules/tests/selectors';
import { fetchTestById } from '@/reduxjs/modules/tests/actions';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const PassTestPage: FC<Props> = ({ params: { id }, className }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) {
			dispatch(fetchTestById(Number(id)));
		}
	}, [dispatch, id]);

	const test = useAppSelector(selectCurrentTest);

	return (
		<div className={cx('pass-test-page', className)}>
			<div className={cx('pass-test-page__heading')}>
				<Heading>{test?.title}</Heading>
				<Label>{test?.questions.length} вопросов</Label>
			</div>
			<ul>
				<li>список</li>
				<li>вопросов</li>
			</ul>
			id: {id}
		</div>
	);
};
