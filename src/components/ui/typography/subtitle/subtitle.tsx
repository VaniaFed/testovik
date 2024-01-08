import React from 'react';
import classNames from 'classnames/bind';

import styles from './subtitle.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Subtitle: FC<Props> = ({ children, style, className }) => {
	return <div className={cx('subtitle', style && `subtitle_${style}`, className)}>{children}</div>;
};
