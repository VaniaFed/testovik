'use client';
import classNames from 'classnames/bind';
import React, { useRef } from 'react';

import { BoxContainer } from '@/components/layout/box-container';
import { IconButton } from '@/components/ui/icon-button';
import { Cross } from '@/components/ui/icons/cross';
import { Overlay } from '@/components/ui/overlay';
import { useClickOutside } from '@/hooks/use-click-outside';

import styles from './modal.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Modal: FC<Props> = ({ header, children, footer, close, className, overlayContentClassName }) => {
	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, close);

	return (
		<Overlay
			className={cx('modal', className)}
			overlayContentClassName={overlayContentClassName}
			withDarkBackground
			contentRef={ref}>
			<BoxContainer className={cx('modal__container')}>
				<div className={cx('modal__inner')} ref={ref}>
					{close && (
						<IconButton className={cx('modal__close-btn')} zeroSpacing onClick={close}>
							<Cross size="24" />
						</IconButton>
					)}
					<header className={cx('modal__header')}>{header}</header>
					{children && <section className={cx('modal__content')}>{children}</section>}
					<footer className={cx('modal__footer')}>{footer}</footer>
				</div>
			</BoxContainer>
		</Overlay>
	);
};
