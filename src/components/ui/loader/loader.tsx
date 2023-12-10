import React from 'react';
import classNames from 'classnames/bind';

import styles from './loader.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Loader: FC<Props> = ({ className }) => {
	return <div className={cx('loader', className)} />;
};
