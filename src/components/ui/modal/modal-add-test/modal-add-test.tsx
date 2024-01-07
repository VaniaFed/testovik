import React from 'react';
import * as yup from 'yup';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography/heading';
import { Form } from '@/components/ui/form';
import { Modal } from '@/components/ui/modal/modal';
import { useCustomForm } from '@/hooks/use-custom-form';
import { useAppDispatch } from '@/reduxjs/hooks';
import { createTest } from '@/reduxjs/modules/tests';
import type { FC } from 'react';
import type { Props } from './props';

export const ModalAddTest: FC<Props> = ({ close, closable = false, className }) => {
	const { register, errors, onSubmit } = useCustomForm({
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

	const dispatch = useAppDispatch();

	const onCreateTest = (title: string) => {
		dispatch(createTest({ title }));
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
			<Form
				id="add-test-form"
				onSubmit={(e) => {
					onSubmit(e, onCreateTest);
				}}>
				<Field id="test-name" label="Название теста" errMessage={errors.title?.message as string}>
					<Input id="test-name" placeholder="География 7 класс" autoFocus {...register('title')} />
				</Field>
			</Form>
		</Modal>
	);
};
