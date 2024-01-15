import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './checkbox.module.scss';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ children, checked, _size = '24', ...rest }, ref) => {
	return (
		<label className={cx('checkbox')}>
			<input type="checkbox" className={cx('checkbox__input')} checked={checked} {...rest} ref={ref} />
			<span className={cx('fake-control', checked && 'fake-control_completed', `fake-control_size_${_size}`)} />
			{children}
		</label>
	);
});

Checkbox.displayName = 'Checkbox';
