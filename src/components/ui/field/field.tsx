import React from 'react';
import classNames from 'classnames/bind';

import { Label } from '../typography/label';

import styles from './field.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import { Paragraph } from '@/components/ui/typography/paragraph';

const cx = classNames.bind(styles);

export const Field: FC<Props> = ({
	children,
	id,
	label = '',
	required,
	errMessage = '',
	className,
	labelClassName,
}) => {
	return (
		<div className={cx('field', className)}>
			{label?.length > 0 && (
				<Label required={required} htmlFor={id} className={cx('field__label', labelClassName)}>
					{label}
				</Label>
			)}
			{children}
			{errMessage.length > 0 && <Paragraph className={cx('field__error')}>{errMessage}</Paragraph>}
		</div>
	);
};
