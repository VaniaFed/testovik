// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// export const useCustomForm = <T>(formSchema: yup.ObjectSchema<T>) => {
// 	interface FormFields extends yup.InferType<typeof formSchema>;

// 	const {
// 		register,
// 		handleSubmit,
// 		getValues,
// 		formState: { errors },
// 	} = useForm<FormFields>({
// 		resolver: yupResolver<FormFields>(formSchema),
// 	});

// 	const onFormSubmit = (e: React.FormEvent, onSubmit: () => void) => {
// 		e.preventDefault();
// 		handleSubmit(onSubmit)();
// 	};

// 	return {
// 		register,
// 		onSubmit: onFormSubmit,
// 		getValues,
// 		errors,
// 	};
// };
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const useCustomForm = (schema: yup.AnyObject) => {
	const formSchema = yup.object(schema).required();

	interface FormFields extends yup.InferType<typeof formSchema> {}

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: yupResolver<FormFields>(schema),
	});

	const onFormSubmit = (e: React.FormEvent, onSubmit: () => void) => {
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
