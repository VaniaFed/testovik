'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SignInPayload, SignUpPayload } from '@/reduxjs/modules/auth';
import { FormEvent, useState } from 'react';

export const useCustomForm = (schema: yup.ObjectShape) => {
	const [formError, setFormError] = useState('');
	const formSchema = yup.object(schema).required();

	interface FormFields extends yup.InferType<typeof formSchema> {}

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: yupResolver<FormFields>(formSchema),
	});

	// TODO: get rid of any
	const onFormSubmit = (e: FormEvent, onSubmit: (formData: SignUpPayload | SignInPayload | any) => void) => {
		e.preventDefault();
		handleSubmit(onSubmit)();
	};

	return {
		register,
		onSubmit: onFormSubmit,
		getValues,
		setFormError,
		formError,
		errors,
	};
};
