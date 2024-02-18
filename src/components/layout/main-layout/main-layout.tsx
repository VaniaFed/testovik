import classNames from 'classnames/bind';
import React from 'react';

import styles from './main-layout.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const MainLayout: FC<Props> = ({ children, className }) => {
	return <main className={cx('main-layout', className)}>{children}</main>;
};
