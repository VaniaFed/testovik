'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

import { Form } from '@/components/ui/form';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useCustomForm } from '@/hooks/use-custom-form';

import type { FC } from 'react';
import type { SignInRequest } from '@/reduxjs/modules/auth/types';
import { signIn } from '@/reduxjs/modules/auth/actions';

export const SignInForm: FC<unknown> = () => {
	const router = useRouter();

	const dispatch = useDispatch();

	const onSignIn = (e: React.FormEvent) => (data: SignInRequest) => {
		e.preventDefault();
		dispatch(signIn(data));
		// TODO: then redirect to /
	};

	const { register, onSubmit, getValues, errors } = useCustomForm({
		username: yup.string().min(3).max(50).required(),
		password: yup.string().min(6).max(50).required(),
	});

	return (
		<Form
			id="sign-up-form"
			onSubmit={(e) =>
				onSubmit(e, () => {
					// TODO: temporarily any
					onSignIn(getValues() as any);
				})
			}>
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
