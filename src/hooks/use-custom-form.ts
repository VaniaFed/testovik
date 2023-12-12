import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SignInRequest, SignUpRequest } from '@/reduxjs/modules/auth/types';

export const useCustomForm = (schema: yup.ObjectShape) => {
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

	const onFormSubmit = (e: React.FormEvent, onSubmit: (formData: SignUpRequest | SignInRequest) => void) => {
		e.preventDefault();
		handleSubmit(onSubmit)();
	};

	return {
		register,
		onSubmit: onFormSubmit,
		getValues,
		errors,
	};
};
