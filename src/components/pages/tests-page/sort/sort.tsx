import React from 'react';
import classNames from 'classnames/bind';
import { Button } from '@/components/ui/button';
import { Sort as SortIcon } from '@/components/ui/icons/sort/sort';
import styles from './sort.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Sort: FC<Props> = ({ sort, handleChangeSort, className }) => {
	return (
		<Button
			className={cx('sort', className)}
			variant="text_black"
			endIcon={<SortIcon size="24" className={cx(sort === 'created_at_asc' && 'sort-icon_reversed')} />}
			onClick={handleChangeSort}>
			{sort === 'created_at_asc' ? 'Сначала новые' : 'Сначала старые'}
		</Button>
	);
};
