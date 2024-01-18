import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './radio.module.scss';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Radio = forwardRef<HTMLInputElement, Props>(({ name, children, className, ...rest }, ref) => {
	return (
		<label className={cx('radio', className)}>
			<input type="radio" name={name} className={cx('radio__input')} ref={ref} {...rest} />
			<span className={cx('fake-control')}></span>
			{children && children}
		</label>
	);
});

Radio.displayName = 'Radio';
