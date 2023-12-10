import React from 'react';
import classNames from 'classnames/bind';

import styles from './test-list.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const TestList: FC<unknown> = () => {
	return <div className={cx('test-list')}>TESTS</div>;
};
