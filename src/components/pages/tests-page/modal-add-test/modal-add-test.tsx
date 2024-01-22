import React from 'react';
import * as yup from 'yup';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography/heading';
import { Form } from '@/components/ui/form';
import { Modal } from '@/components/ui/modal/modal';
import { useAppDispatch } from '@/reduxjs/hooks';
import { createTest } from '@/reduxjs/modules/tests';
import type { FC } from 'react';
import type { Props } from './props';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
	.object({
		title: yup
			.string()
			.min(4, 'Поле слишком короткое')
			.max(30, 'Поле слишком длинное')
			.required('Это обязательное поле'),
	})
	.required();

export interface FormFields extends yup.InferType<typeof schema> {}

export const ModalAddTest: FC<Props> = ({ close, closable = false, className }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: yupResolver<FormFields>(schema),
	});

	const header = (
		<>
			<Heading size="1">Добавить тест</Heading>
		</>
	);

	const footer = (
		<>
			<Button variant="accent" form="add-test-form">
				Добавить
			</Button>
		</>
	);

	const dispatch = useAppDispatch();

	const onCreateTest = (formData: FormFields) => {
		dispatch(createTest({ title: formData.title }));
		close();
	};

	return (
		<Modal
			header={header}
			footer={footer}
			className={className}
			closable={closable}
			closeModal={() => {
				close();
			}}>
			<Form id="add-test-form" onSubmit={handleSubmit(onCreateTest)}>
				<Field id="test-name" label="Название теста" errMessage={errors.title?.message as string}>
					<Input id="test-name" placeholder="География 7 класс" autoFocus {...register('title')} />
				</Field>
			</Form>
		</Modal>
	);
};
