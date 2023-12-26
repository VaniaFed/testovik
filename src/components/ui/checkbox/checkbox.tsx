import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './checkbox.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Checkbox = forwardRef<HTMLInputElement, Props>(
	({ children, checked, checkboxSize = '24', ...rest }, ref) => {
		return (
			<label className={cx('checkbox')}>
				<input className={cx('checkbox__input')} checked={checked} type="checkbox" {...rest} ref={ref} />
				<span
					className={cx(
						'fake-control',
						checked && 'fake-control_completed',
						`fake-control_size_${checkboxSize}`,
					)}
				/>
				{children}
			</label>
		);
	},
);

Checkbox.displayName = 'Checkbox';
