import classNames from 'classnames/bind';
import React from 'react';
import { createPortal } from 'react-dom';

import styles from './overlay.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Overlay: FC<Props> = ({ className, withDarkBackground, children }) => {
	return createPortal(
		<div className={cx('overlay', withDarkBackground && 'overlay_dark-bg', className)}>{children}</div>,
		document.body,
	);
};
