import React from 'react';
import classNames from 'classnames/bind';

import styles from './panel.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Panel: FC<Props> = ({ children, className }) => {
	return <div className={cx('panel', className)}>{children}</div>;
};
