'use client';
import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import { BoxContainer } from '@/components/layout/box-container';
import { IconButton } from '@/components/ui/icon-button';
import { Cross } from '@/components/ui/icons/cross';
import { useClickOutside } from '@/hooks/use-click-outside';
import styles from './modal.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Modal: FC<Props> = ({ header, children, footer, closable = false, closeModal = () => {}, className }) => {
	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, closeModal);

	return (
		<div className={cx('modal', className)}>
			<BoxContainer className={cx('modal__container')}>
				<div className={cx('modal__inner')} ref={ref}>
					{closable && (
						<IconButton className={cx('modal__close-btn')} onClick={closeModal}>
							<Cross size="24" />
						</IconButton>
					)}
					<header className={cx('modal__header')}>{header}</header>
					<section className={cx('modal__content')}>{children}</section>
					<footer className={cx('modal__footer')}>{footer}</footer>
				</div>
			</BoxContainer>
		</div>
	);
};
