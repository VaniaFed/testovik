import classNames from 'classnames/bind';
import React from 'react';

import styles from './label.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Label: FC<Props> = ({ children, required = false, small, className, ...rest }) => {
	return (
		<label className={cx('label', required && 'label_required', small && 'label_small', className)} {...rest}>
			{children}
		</label>
	);
};
