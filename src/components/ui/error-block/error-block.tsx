import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from './error-block.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ErrorBlock: FC<Props> = ({ errorType, errorLabel, children, className }) => {
	return (
		<div className={cx('error-block', className)}>
			<Image width={438} height={438} src={`/${errorType}.svg`} alt={errorLabel} priority={true} />
			{children}
		</div>
	);
};
