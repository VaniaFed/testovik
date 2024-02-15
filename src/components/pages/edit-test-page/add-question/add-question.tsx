import React from 'react';
import { Button } from '@/components/ui/button';
import { Dropdown } from '@/components/ui/dropdown';
import { Heading } from '@/components/ui/typography/heading';
import classNames from 'classnames/bind';
import styles from './add-question.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const AddQuestion: FC<Props> = ({ allQuestionTypes, activeQuestionType, setQuestionType, className, onAdd }) => {
	return (
		<div className={cx('add-question', className)}>
			<Heading size="3" className={cx('add-question__heading')}>
				Добавить вопрос
			</Heading>
			<Dropdown
				name="dropdown-question-type"
				items={allQuestionTypes}
				active={activeQuestionType}
				onChange={setQuestionType}
				className={cx('add-question__dropdown')}
			/>
			<Button variant="accent" onClick={onAdd}>
				Добавить вопрос
			</Button>
		</div>
	);
};
