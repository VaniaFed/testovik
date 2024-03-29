import classNames from 'classnames/bind';
import React from 'react';

import { Stack } from '@/components/layout/stack';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Arrow } from '@/components/ui/icons/arrow/arrow';

import styles from './pagination.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

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
			{pageNumbers.map((pageNumber, index) => (
				<Button
					variant={pageNumber === currentPage ? 'text_accent' : 'text_black'}
					key={index}
					onClick={() => onItemClick(pageNumber)}
				>
					{pageNumber}
				</Button>
			))}
			<IconButton disabled={totalPages === currentPage} circle onClick={onNextPageClick}>
				<Arrow direction="right" />
			</IconButton>
		</Stack>
	);
};
