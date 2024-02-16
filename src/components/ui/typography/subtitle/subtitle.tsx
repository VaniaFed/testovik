import classNames from 'classnames/bind';
import React from 'react';

import styles from './subtitle.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Subtitle: FC<Props> = ({ children, style, className }) => {
	return <div className={cx('subtitle', style && `subtitle_${style}`, className)}>{children}</div>;
};
