import classNames from 'classnames/bind';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Label } from '@/components/ui/typography/label';

import styles from './login.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Login: FC<Props> = ({ loggedIn = false, userName, userRole, onLogOut, className }) => {
	return (
		<div className={cx('login', className)}>
			{loggedIn ? (
				<>
					<div className={cx('login__user')}>
						<Label small className={cx('login__role')}>
							{userRole}
						</Label>
						<Label>{userName}</Label>
					</div>
					<Button variant="text_black" onClick={onLogOut}>
						Выйти
					</Button>
				</>
			) : (
				<Link href="/signin" level="label">
					Войти
				</Link>
			)}
		</div>
	);
};
