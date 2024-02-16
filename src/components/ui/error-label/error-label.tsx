import classNames from 'classnames/bind';
import React from 'react';

import { Paragraph } from '@/components/ui/typography/paragraph';

import styles from './error-label.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const ErrorLabel: FC<Props> = ({ children, className }) => {
	return <Paragraph className={cx('error-label', className)}>{children}</Paragraph>;
};
