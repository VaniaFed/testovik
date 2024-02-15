import React from 'react';
import classNames from 'classnames/bind';
import { Loader } from '@/components/ui/loader/loader';
import styles from './loader-box.module.scss';
import type { FC } from 'react';
import type { Props } from './props';
import { Overlay } from '@/components/ui/overlay';

const cx = classNames.bind(styles);

export const LoaderBox: FC<Props> = ({ className }) => {
	return (
		<Overlay className={cx('loader-box', className)}>
			<Loader />
		</Overlay>
	);
};
