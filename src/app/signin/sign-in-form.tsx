'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Field } from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { selectAuthStatus, selectUser, signIn } from '@/reduxjs/modules/auth';

import type { FC } from 'react';

const schema = yup
	.object({
		username: yup.string().min(3).max(50).required(),
		password: yup.string().min(6).max(50).required(),
	})
	.required();

export type FormFields = yup.InferType<typeof schema>;

export const SignInForm: FC<unknown> = () => {
	const user = useAppSelector(selectUser);
	const status = useAppSelector(selectAuthStatus);
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: yupResolver<FormFields>(schema),
	});

	const router = useRouter();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<FormFields> = (formData) => {
		dispatch(signIn(formData));
	};

	useEffect(() => {
		if (!user && status === 'FAILED') {
			setError('root', {
				message: 'Такого пользователя в системе нет',
			});
		}
		if (user && user.username) {
			router.push('/');
		}
	}, [user, status]);

	return (
		<Form id="sign-up-form" onSubmit={handleSubmit(onSubmit)} errMessage={errors.root?.message}>
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
