'use client';
import classNames from 'classnames/bind';
import React from 'react';
import { createPortal } from 'react-dom';

import { useClient } from '@/hooks/use-client';
import { useOverflow } from '@/hooks/use-overflow';

import styles from './overlay.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Overlay: FC<Props> = ({
	className,
	overlayContentClassName,
	withDarkBackground,
	contentRef,
	children,
}) => {
	const { isClient } = useClient();

	const { isOverflowed, contentHeight } = useOverflow(contentRef, isClient);
	const darkBgStyle = { height: isOverflowed && contentHeight ? contentHeight + 40 : '100%' };

	return (
		isClient &&
		createPortal(
			<div className={cx('overlay', isOverflowed && 'overlay_compact', className)}>
				{withDarkBackground && <div className={cx('overlay__dark-bg')} style={darkBgStyle}></div>}
				<div
					className={cx(
						'overlay__content',
						isOverflowed && 'overlay__content_compact',
						overlayContentClassName,
					)}>
					{children}
				</div>
			</div>,
			document.body,
		)
	);
};
