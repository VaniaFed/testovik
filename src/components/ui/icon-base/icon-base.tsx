import classNames from 'classnames/bind';
import React from 'react';

import styles from './icon-base.module.scss';

import type { IconBaseProps } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const IconBase: FC<IconBaseProps> = ({ children, size = 18, color = 'black', className, ...rest }) => {
	return (
		<div className={cx('icon-base', `icon-base_size_${size}`, `icon-base_color_${color}`, className)} {...rest}>
			{children}
		</div>
	);
};
