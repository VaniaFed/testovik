import React from 'react';
import classNames from 'classnames/bind';

import styles from './divider.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Divider: FC<Props> = ({ className }) => {
	return <div className={cx('divider', className)} />;
};
