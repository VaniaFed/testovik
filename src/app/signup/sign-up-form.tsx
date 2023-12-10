'use client';

import React from 'react';
import * as yup from 'yup';

import { Form } from '@/components/ui/form';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Paragraph } from '@/components/ui/typography/paragraph';
import { useCustomForm } from '@/hooks/use-custom-form';

import type { FC } from 'react';

export const SignUpForm: FC<unknown> = () => {
	const { register, onSubmit, getValues, errors } = useCustomForm({
		username: yup.string().min(3).max(50).required(),
		password: yup.string().min(6).max(50).required(),
		password_confirmation: yup
			.string()
			.min(6)
			.max(50)
			.required()
			.oneOf([yup.ref('password')], 'Password does not match!'),
		is_admin: yup.string(),
	});

	const onSignUp = () => {
		const values = getValues();
		console.log(values);
	};

	return (
		<Form id="sign-up-form" onSubmit={(e) => onSubmit(e, onSignUp)}>
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
