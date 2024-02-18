import classNames from 'classnames/bind';
import React from 'react';

import styles from './box-container.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const BoxContainer: FC<Props> = ({ children, className }) => {
	return <div className={cx('box-container', className)}>{children}</div>;
};
