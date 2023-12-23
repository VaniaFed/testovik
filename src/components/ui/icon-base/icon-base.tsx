import React from 'react';
import classNames from 'classnames/bind';
import styles from './icon-base.module.scss';
import type { FC } from 'react';
import type { IconBaseProps } from './props';

const cx = classNames.bind(styles);

export const IconBase: FC<IconBaseProps> = ({ children, size = 18, color = 'black', className }) => {
	return (
		<div className={cx('icon-base', `icon-base_size_${size}`, `icon-base_color_${color}`, className)}>
			{children}
		</div>
	);
};
