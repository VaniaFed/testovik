import classNames from 'classnames/bind';
import React from 'react';

import styles from './loader.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Loader: FC<Props> = ({ className }) => {
	return <div className={cx('loader', className)} />;
};
