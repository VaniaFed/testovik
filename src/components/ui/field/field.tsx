import classNames from 'classnames/bind';
import React, { FC } from 'react';

import { ErrorLabel } from '@/components/ui/error-label';

import styles from './field.module.scss';
import { Label } from '../typography/label';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Field: FC<Props> = ({
	id,
	label = '',
	labelClassName,
	children,
	leftContent,
	rightContent,
	required,
	errMessage = '',
	className,
	innerRef,
	...rest
}) => {
	return (
		<div className={cx('field', className)} ref={innerRef} {...rest}>
			{!!label && (
				<Label required={required} htmlFor={id} className={cx('field__label', labelClassName)}>
					{label}
				</Label>
			)}
			<div className={cx('field__content')}>
				{leftContent && leftContent}
				{children}
				{rightContent && rightContent}
			</div>
			{!!errMessage && <ErrorLabel className={cx('field__error')}>{errMessage}</ErrorLabel>}
		</div>
	);
};
