import classNames from 'classnames/bind';
import React from 'react';

import styles from './paragraph.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Paragraph: FC<Props> = ({ children, small = false, className, ...rest }) => {
	return (
		<p className={cx('paragraph', small && 'paragraph_small', className)} {...rest}>
			{children}
		</p>
	);
};
