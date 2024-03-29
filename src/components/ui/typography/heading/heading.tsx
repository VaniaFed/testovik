import classNames from 'classnames/bind';
import React from 'react';

import styles from './heading.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Heading: FC<Props> = ({ children, size = '1', className, ...rest }) => {
	switch (size) {
		case '1':
			return (
				<h1 className={cx('h1', className)} {...rest}>
					{children}
				</h1>
			);

		case '2':
			return (
				<h2 className={cx('h2', className)} {...rest}>
					{children}
				</h2>
			);

		case '3':
			return (
				<h3 className={cx('h3', className)} {...rest}>
					{children}
				</h3>
			);
	}
};
