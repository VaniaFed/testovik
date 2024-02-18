import classNames from 'classnames/bind';
import React from 'react';

import { Link } from '@/components/ui/link';

import styles from './logo.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Logo: FC<Props> = ({ href, className }) => {
	return (
		<Link underline={false} className={cx('logo', className)} href={href}>
			<h1 className={cx('logo__text')}>Testovik</h1>
		</Link>
	);
};
