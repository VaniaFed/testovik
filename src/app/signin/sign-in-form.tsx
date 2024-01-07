'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { Form } from '@/components/ui/form';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useCustomForm } from '@/hooks/use-custom-form';
import { signIn, selectAuthStatus, selectUser } from '@/reduxjs/modules/auth';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import type { FC } from 'react';

export const SignInForm: FC<unknown> = () => {
	const user = useAppSelector(selectUser);
	const status = useAppSelector(selectAuthStatus);
	const router = useRouter();
	const dispatch = useAppDispatch();

	const onSignIn = (formData: any) => {
		dispatch(signIn(formData));
	};

	const { register, onSubmit, setFormError, formError, errors } = useCustomForm({
		username: yup.string().min(3).max(50).required(),
		password: yup.string().min(6).max(50).required(),
	});

	useEffect(() => {
		if (!user && status === 'FAILED') {
			setFormError('Такого пользователя в системе нет');
		}
		if (user && user.username) {
			router.push('/');
		}
	}, [user, status]);

	return (
		<Form id="sign-up-form" onSubmit={(e) => onSubmit(e, onSignIn)} formError={formError}>
			<Field id="form-username" label="Логин" required errMessage={errors.username?.message as string}>
				<Input
					id="form-username"
					autoFocus
					autoComplete="login"
					placeholder="username2004"
					{...register('username')}
				/>
			</Field>
			<Field id="form-password" label="Пароль" required errMessage={errors.password?.message as string}>
				<Input
					id="form-password"
					type="password"
					autoComplete="password"
					placeholder="••••••"
					{...register('password')}
				/>
			</Field>
		</Form>
	);
};
