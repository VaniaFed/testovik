import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal/modal';
import { Heading } from '@/components/ui/typography/heading';
import { useAppDispatch } from '@/reduxjs/hooks';
import { createTest } from '@/reduxjs/modules/tests';

import type { Props } from './props';
import type { FC } from 'react';

const schema = yup
	.object({
		title: yup
			.string()
			.min(4, 'Поле слишком короткое')
			.max(30, 'Поле слишком длинное')
			.required('Это обязательное поле'),
	})
	.required();

export type FormFields = yup.InferType<typeof schema>;

export const ModalAddTest: FC<Props> = ({ close, className }) => {
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

	const onSubmit: SubmitHandler<FormFields> = (formData) => {
		dispatch(createTest({ title: formData.title }));
		close();
	};

	return (
		<Modal header={header} footer={footer} close={close} className={className}>
			<Form id="add-test-form" onSubmit={handleSubmit(onSubmit)}>
				<Field id="test-name" label="Название теста" errMessage={errors.title?.message as string}>
					<Input id="test-name" placeholder="География 7 класс" autoFocus {...register('title')} />
				</Field>
			</Form>
		</Modal>
	);
};
