'use client';

import classNames from 'classnames/bind';

import { Button } from '@/components/ui/button';
import { ErrorBlock } from '@/components/ui/error-block';
import { Link } from '@/components/ui/link';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';
import { Paragraph } from '@/components/ui/typography/paragraph';

import styles from './error.module.scss';

const cx = classNames.bind(styles);

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<ErrorBlock className={cx('error')} errorType="no_access" errorLabel="No access">
			<div className={cx('error__text')}>
				<Heading>Ошибка!</Heading>
				<Label>{error.message}</Label>
				<Paragraph>
					Произошла непредвиденная ошибка. Попробуйте вернуться на&nbsp;
					<Link color="blue" href="/" className={cx('error__link')}>
						главную
					</Link>
					, или повторить операцию позже.
				</Paragraph>
				<Button variant="accent" onClick={reset} className={cx('error__button')}>
					Попробовать еще раз
				</Button>
			</div>
		</ErrorBlock>
	);
}
