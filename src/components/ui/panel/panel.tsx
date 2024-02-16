import classNames from 'classnames/bind';
import React from 'react';

import styles from './panel.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Panel: FC<Props> = ({ children, className }) => {
	return <div className={cx('panel', className)}>{children}</div>;
};
