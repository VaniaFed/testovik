'use client';
import React from 'react';
import classNames from 'classnames/bind';
import { Modal } from '@/components/ui/modal/modal';
import { Heading } from '@/components/ui/typography/heading';
import { Button } from '@/components/ui/button';
import styles from './modal-results.module.scss';
import type { FC } from 'react';
import type { Props } from './props';
import { Paragraph } from '@/components/ui/typography/paragraph';
import { Subtitle } from '@/components/ui/typography/subtitle';
import { Link } from '@/components/ui/link';

const cx = classNames.bind(styles);

export const ModalResults: FC<Props> = ({ results, close, className }) => {
	return (
		<Modal
			header={
				<>
					<Heading size="1" className={cx('modal-results__header')}>
						Результаты
					</Heading>
					<Heading size="2">
						{results.correctNumber}/{results.totalAnswers}
					</Heading>
				</>
			}
			footer={
				<>
					<Link level="button_accent" color="blue_reversed" href="/">
						Вернуться к списку тестов
					</Link>
					<Button variant="secondary" onClick={close}>
						Закрыть
					</Button>
				</>
			}
			className={cx('modal-results', className)}
			close={close}>
			<Subtitle style="light" className={cx('modal-results__subtitle')}>
				{results.wrongQuestions.length ? 'Вопросы, которые можно улучшить:' : 'Вы успешно прошли тест!'}
			</Subtitle>
			{results.wrongQuestions.map((question) => (
				<Paragraph key={question.id}>{question.title}</Paragraph>
			))}
		</Modal>
	);
};
