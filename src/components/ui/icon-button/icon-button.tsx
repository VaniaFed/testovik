import classNames from 'classnames/bind';
import React from 'react';

import styles from './icon-button.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const IconButton: FC<Props> = ({
	variant,
	zeroSpacing = false,
	circle = false,
	children,
	className,
	...rest
}) => {
	return (
		<button
			type="button"
			className={cx(
				'icon-button',
				variant && `icon-button_${variant}`,
				circle && `icon-button_circle`,
				zeroSpacing && 'icon-button_zero-spacing',
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
