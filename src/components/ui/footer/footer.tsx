import classNames from 'classnames/bind';
import React from 'react';

import { BoxContainer } from '@/components/layout/box-container';
import { Paragraph } from '@/components/ui/typography/paragraph';

import styles from './footer.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

export const Footer: FC<Props> = ({ className }) => {
	const cx = classNames.bind(styles);

	return (
		<footer className={cx('footer', className)}>
			<BoxContainer>
				<div className={cx('footer__inner')}>
					<Paragraph>Testovik 2023, все права защищены</Paragraph>
				</div>
			</BoxContainer>
		</footer>
	);
};
