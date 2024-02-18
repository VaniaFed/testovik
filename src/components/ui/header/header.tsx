'use client';
import classNames from 'classnames/bind';
import React from 'react';

import { BoxContainer } from '@/components/layout/box-container';
import { Login } from '@/components/ui/login';
import { Logo } from '@/components/ui/logo';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { logOut, selectUser } from '@/reduxjs/modules/auth';

import styles from './header.module.scss';

import type { Props } from './props';
import type { FC, MouseEvent } from 'react';

const cx = classNames.bind(styles);

export const Header: FC<Props> = ({ className }) => {
	const user = useAppSelector(selectUser);

	const dispatch = useAppDispatch();

	const onLogOut = (e: MouseEvent) => {
		e.preventDefault();

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
