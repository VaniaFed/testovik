import classNames from 'classnames/bind';
import React from 'react';

import styles from './divider.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Divider: FC<Props> = ({ className }) => {
	return <div className={cx('divider', className)} />;
};
