import React from 'react';
import classNames from 'classnames/bind';

import styles from './base-icon.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BaseIcon: FC<Props> = ({ children, size = 18, className }) => {
	return <div className={cx('base-icon', `base-icon_size_${size}`, className)}>{children}</div>;
};
