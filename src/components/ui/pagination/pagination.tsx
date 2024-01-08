import React from 'react';
import classNames from 'classnames/bind';

import styles from './pagination.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import { Stack } from '@/components/layout/stack';
import { IconButton } from '@/components/ui/icon-button';
import { Arrow } from '@/components/ui/icons/arrow/arrow';
import { Button } from '@/components/ui/button';

const cx = classNames.bind(styles);

export const Pagination: FC<Props> = ({
	totalPages,
	currentPage,
	className,
	onPrevPageClick,
	onNextPageClick,
	onItemClick,
}) => {
	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}
	return (
		<Stack direction="row" className={cx('pagination', className)}>
			<IconButton disabled={currentPage === 1} circle onClick={onPrevPageClick}>
				<Arrow direction="left" />
			</IconButton>
			{pageNumbers.map((item, index) => (
				<Button
					variant={item === currentPage ? 'text_accent' : 'text_black'}
					key={index}
					onClick={() => onItemClick(item)}>
					{item}
				</Button>
			))}
			<IconButton disabled={totalPages === currentPage} circle onClick={onNextPageClick}>
				<Arrow direction="right" />
			</IconButton>
		</Stack>
	);
};
