import classNames from 'classnames/bind';

import { ErrorBlock } from '@/components/ui/error-block';
import { Link } from '@/components/ui/link';
import { Heading } from '@/components/ui/typography/heading';
import { Paragraph } from '@/components/ui/typography/paragraph';

import styles from './no-access.module.scss';

const cx = classNames.bind(styles);

export default function NoAccessPage() {
	return (
		<ErrorBlock className={cx('no-access')} errorType="no_access" errorLabel="No access">
			<div className={cx('no-access__text')}>
				<Heading>У вас нет доступа к этой странице</Heading>
				<Paragraph>Убедитесь, что вы вошли в аккаунт и обладаете правами администратора.</Paragraph>
				<Link level="button_accent" color="blue_reversed" href="/signin" className={cx('no-access__link')}>
					Войти
				</Link>
			</div>
		</ErrorBlock>
	);
}
