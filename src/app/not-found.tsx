'use client';
import React from 'react';
import classNames from 'classnames/bind';
import { ErrorBlock } from '@/components/ui/error-block';
import { Heading } from '@/components/ui/typography/heading';
import { Paragraph } from '@/components/ui/typography/paragraph';
import { Link } from '@/components/ui/link';

import styles from './not-found.module.scss';

const cx = classNames.bind(styles);

export default function NotFound() {
	return (
		<ErrorBlock className={cx('not-found')} errorType="404" errorLabel="Not found">
			<div className={cx('not-found__text')}>
				<Heading>То, что вы ищите, не ищется</Heading>
				<Paragraph>
					Вернуться на&nbsp;
					<Link color="blue" href="/" className={cx('not-found__link')}>
						главную
					</Link>
				</Paragraph>
			</div>
		</ErrorBlock>
	);
}
