'use client';
import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from '@/components/layout/box-container';
import { Logo } from '@/components/ui/logo';
import { Login } from '@/components/ui/login';

import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { selectUser } from '@/reduxjs/modules/auth/selectors';

import styles from './header.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import { logOut } from '@/reduxjs/modules/auth/actions';

const cx = classNames.bind(styles);

export const Header: FC<Props> = ({ className }) => {
	const user = useAppSelector(selectUser);

	const dispatch = useAppDispatch();

	const onLogOut = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log('hi');

		dispatch(logOut());
	};

	return (
		<header className={cx('header', className)}>
			<BoxContainer className={cx('header__container')}>
				<nav className={cx('header__nav')}>
					<Logo href="/" />

					<Login
						loggedIn={!!user}
						userName={user?.username}
						userRole={user?.is_admin ? 'admin' : 'user'}
						onLogOut={onLogOut}
					/>
				</nav>
			</BoxContainer>
		</header>
	);
};
