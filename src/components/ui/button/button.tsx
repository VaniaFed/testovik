import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './button.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ children, variant = 'primary', startIcon, endIcon, className, ...rest }, ref) => {
		return (
			<button className={cx('button', `button_${variant}`, className)} {...rest} ref={ref}>
				{startIcon && startIcon}
				<div className={cx('button__content')}>{children}</div>
				{endIcon && endIcon}
			</button>
		);
	},
);

Button.displayName = 'Button';
