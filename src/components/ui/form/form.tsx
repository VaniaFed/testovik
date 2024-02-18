import classNames from 'classnames/bind';
import React from 'react';

import { Paragraph } from '@/components/ui/typography/paragraph';

import styles from './form.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Form: FC<Props> = ({ children, errMessage, className, ...rest }) => {
	return (
		<form className={cx('form', className)} {...rest}>
			{children}
			{errMessage && <Paragraph className={cx('form__error')}>{errMessage}</Paragraph>}
		</form>
	);
};
