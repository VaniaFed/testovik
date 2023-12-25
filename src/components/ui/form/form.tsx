import React from 'react';
import classNames from 'classnames/bind';
import { Paragraph } from '@/components/ui/typography/paragraph';
import styles from './form.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Form: FC<Props> = ({ children, formError, className, ...rest }) => {
	return (
		<form className={cx('form', className)} {...rest}>
			{children}
			{formError && <Paragraph className={cx('form__error')}>{formError}</Paragraph>}
		</form>
	);
};