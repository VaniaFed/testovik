'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Checkbox } from '@/components/ui/checkbox';
import { Field } from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Paragraph } from '@/components/ui/typography/paragraph';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { selectAuthStatus, selectUser, signUp } from '@/reduxjs/modules/auth';

import type { FC } from 'react';

const schema = yup
	.object({
		username: yup.string().min(3).max(50).required(),
		password: yup.string().min(6).max(50).required(),
		password_confirmation: yup
			.string()
			.min(6)
			.max(50)
			.required()
			.oneOf([yup.ref('password')], 'Password does not match!'),
		is_admin: yup.boolean().required(),
	})
	.required();

export type FormFields = yup.InferType<typeof schema>;

export const SignUpForm: FC<unknown> = () => {
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
		dispatch(signUp(formData));
	};

	useEffect(() => {
		if (!user && status === 'FAILED') {
			setError('root', { message: 'Пользователь с таким логином уже существует' });
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
			<Field
				id="form-password-confirmation"
				label="Подтвердите пароль"
				required
				errMessage={errors.password_confirmation?.message as string}
			>
				<Input
					id="form-password-confirmation"
					type="password"
					autoComplete="password-confirmation"
					placeholder="••••••"
					{...register('password_confirmation')}
				/>
			</Field>
			<Field id="form-is-admin" label="Хотите быть админом?" errMessage={errors.is_admin?.message as string}>
				<Checkbox id="form-is-admin" {...register('is_admin')}>
					<Paragraph>Быть админом</Paragraph>
				</Checkbox>
			</Field>
		</Form>
	);
};
