import React from 'react';
import classNames from 'classnames/bind';

import styles from './pass-test-page.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import { useAppSelector } from '@/reduxjs/hooks';
import { selectTestById } from '@/reduxjs/modules/tests/selectors';

const cx = classNames.bind(styles);

export const PassTestPage: FC<Props> = ({ params, className }) => {
	const test = useAppSelector((state) => selectTestById(state, Number(params.id)));
	console.log(test);
	// запрос за тестом по id

	return <div className={cx('pass-test-page', className)}>id: {params.id}</div>;
};
