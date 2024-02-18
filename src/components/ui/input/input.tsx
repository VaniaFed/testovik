import classNames from 'classnames/bind';
import React, { forwardRef } from 'react';

import { IconButton } from '@/components/ui/icon-button';
import { Cross } from '@/components/ui/icons/cross';

import styles from './input.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Input = forwardRef<HTMLInputElement, Props>(
	({ solid = false, isInvalid = false, className, defaultValue, value, onClear, ...rest }, ref) => {
		return (
			<div className={cx('input-wrapper')}>
				<input
					className={cx('input', solid && 'input_solid', isInvalid && 'input_invalid', className)}
					defaultValue={defaultValue}
					value={value}
					{...rest}
					ref={ref}
				/>
				{(defaultValue || value) && onClear && (
					<IconButton className={cx('input-clear')} onClick={onClear}>
						<Cross />
					</IconButton>
				)}
			</div>
		);
	},
);

Input.displayName = 'Input';
