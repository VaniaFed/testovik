import React from 'react';
import classNames from 'classnames/bind';

import styles from './icon-button.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const IconButton: FC<Props> = ({ variant, children, className, ...rest }) => {
	return (
		<button className={cx('icon-button', variant && `icon-button_${variant}`, className)} {...rest}>
			{children}
		</button>
	);
};
