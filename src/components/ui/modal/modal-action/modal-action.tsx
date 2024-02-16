'use client';
import classNames from 'classnames/bind';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal/modal';
import { Heading } from '@/components/ui/typography/heading';

import styles from './modal-action.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

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
			close={close}
		/>
	);
};
