import React from 'react';
import classNames from 'classnames/bind';
import { Heading } from '@/components/ui/typography/heading';
import { Question } from '@/components/ui/question';
import { Label } from '@/components/ui/typography/label';
import { Stack } from '@/components/layout/stack';
import { Button } from '@/components/ui/button';
import { Panel } from '@/components/ui/panel';
import { ModalResults } from '@/components/pages/pass-test/modal-results';
import { usePassTest } from '@/components/pages/pass-test/use-pass-test';
import styles from './pass-test.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const PassTest: FC<Props> = ({ params: { id } }) => {
	const {
		test,
		getUserAnswer,
		handleAnswerChange,
		checkIfAnswerChecked,
		handleSubmit,
		getUserResults,
		isModalShown,
		hideModal,
	} = usePassTest(id);

	return (
		<div className={cx('pass-test')}>
			<header className={cx('pass-test__header')}>
				<Heading className={cx('pass-test__heading')}>{test?.title}</Heading>
				<Label>{test?.questions.length} вопросов</Label>
			</header>
			<Stack className={cx('question-list')}>
				{test?.questions.map((question, index) => (
					<li key={index}>
						<Question
							question={question}
							handleAnswerChange={handleAnswerChange}
							checkIfAnswerChecked={checkIfAnswerChecked}
							getUserAnswer={getUserAnswer}
							lastQuestion={index === test.questions.length - 1}
						/>
					</li>
				))}
			</Stack>
			<Panel className={cx('pass-test__panel')}>
				<Button variant="accent" onClick={handleSubmit}>
					Завершить
				</Button>
			</Panel>
			{isModalShown && <ModalResults close={hideModal} results={getUserResults()} />}
		</div>
	);
};
