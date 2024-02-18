import classNames from 'classnames/bind';
import Image from 'next/image';
import React from 'react';

import styles from './error-block.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const ErrorBlock: FC<Props> = ({ errorType, errorLabel, children, className }) => {
	return (
		<div className={cx('error-block', className)}>
			<Image width={438} height={438} src={`/${errorType}.svg`} alt={errorLabel} priority={true} />
			{children}
		</div>
	);
};
