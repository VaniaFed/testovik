import classNames from 'classnames/bind';
import React from 'react';

import { Loader } from '@/components/ui/loader/loader';
import { Overlay } from '@/components/ui/overlay';

import styles from './loader-box.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const LoaderBox: FC<Props> = ({ className }) => {
	return (
		<Overlay className={cx('loader-box', className)}>
			<Loader />
		</Overlay>
	);
};
