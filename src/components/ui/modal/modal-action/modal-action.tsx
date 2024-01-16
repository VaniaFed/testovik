'use client';
import React from 'react';
import classNames from 'classnames/bind';
import { Modal } from '@/components/ui/modal/modal';
import { Heading } from '@/components/ui/typography/heading';
import { Button } from '@/components/ui/button';
import styles from './modal-action.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const ModalAction: FC<Props> = ({
	title = '',
	subtitle = '',
	actionText = '',
	primaryButtonVariant = 'accent',
	className,
	onAction,
	close,
}) => {
	return (
		<Modal
			header={
				<>
					<Heading size="1" className={cx('modal-action__header')}>
						{title}
					</Heading>
					{subtitle && <Heading size="2"> {subtitle}</Heading>}
				</>
			}
			footer={
				<>
					<Button variant={primaryButtonVariant} form="modal-action" onClick={onAction}>
						{actionText}
					</Button>
					<Button variant="secondary" onClick={close}>
						Отмена
					</Button>
				</>
			}
			className={cx('modal-action', className)}
			closable
			closeModal={() => {
				close();
			}}
		/>
	);
};
