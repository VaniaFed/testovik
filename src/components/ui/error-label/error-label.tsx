import React from 'react';
import classNames from 'classnames/bind';
import { Paragraph } from '@/components/ui/typography/paragraph';
import styles from './error-label.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ErrorLabel: FC<Props> = ({ children, className }) => {
	return <Paragraph className={cx('error-label', className)}>{children}</Paragraph>;
};
