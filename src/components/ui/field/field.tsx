import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { Paragraph } from '@/components/ui/typography/paragraph';
import { Label } from '../typography/label';
import styles from './field.module.scss';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Field: FC<Props> = ({
	children,
	id,
	label = '',
	leftContent,
	rightContent,
	required,
	errMessage = '',
	className,
	labelClassName,
}) => {
	return (
		<div className={cx('field', className)}>
			{label.length > 0 && (
				<Label required={required} htmlFor={id} className={cx('field__label', labelClassName)}>
					{label}
				</Label>
			)}
			<div className={cx('field__content')}>
				{leftContent && leftContent}
				{children}
				{rightContent && rightContent}
			</div>
			{errMessage.length > 0 && <Paragraph className={cx('field__error')}>{errMessage}</Paragraph>}
		</div>
	);
};
