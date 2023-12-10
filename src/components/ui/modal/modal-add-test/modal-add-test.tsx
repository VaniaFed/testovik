'use client';
import React from 'react';
import * as yup from 'yup';

import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography/heading';
import { Form } from '@/components/ui/form';

import { useCustomForm } from '@/hooks/use-custom-form';

import { Modal } from '../modal';

import type { FC } from 'react';
import type { Props } from './props';
import { axios } from '@/lib/axios';
import { Test } from '@/lib/definitions';

const createTest = async (data: Pick<Test, 'title'>) => {
	const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/tests`, data);

	return await res.data;
};

export const ModalAddTest: FC<Props> = ({ onClose, closable = false, className }) => {
	const { register, errors, getValues, onSubmit } = useCustomForm({
		title: yup.string().min(3).max(150).required(),
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

	return (
		<Modal
			header={header}
			footer={footer}
			className={className}
			closable={closable}
			closeModal={() => {
				onClose();
			}}
		>
			<Form
				id="add-test-form"
				onSubmit={(e) => {
					onSubmit(e, () => {
						createTest(getValues() as Pick<Test, 'title'>).then((res) => {
							console.log(res);
						});
					});
				}}
			>
				<Field id="test-name" label="Название теста" errMessage={errors.title?.message as string}>
					<Input id="test-name" placeholder="География 7 класс" autoFocus {...register('title')} />
				</Field>
			</Form>
		</Modal>
	);
};
