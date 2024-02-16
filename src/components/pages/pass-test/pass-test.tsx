import classNames from 'classnames/bind';
import React from 'react';

import { Stack } from '@/components/layout/stack';
import { ModalResults } from '@/components/pages/pass-test/modal-results';
import { usePassTest } from '@/components/pages/pass-test/use-pass-test';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { LoaderBox } from '@/components/ui/loader-box';
import { Panel } from '@/components/ui/panel';
import { Question } from '@/components/ui/question';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';
import { Subtitle } from '@/components/ui/typography/subtitle';
import { useAppSelector } from '@/reduxjs/hooks';
import { selectTestsStatus } from '@/reduxjs/modules/tests';

import styles from './pass-test.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

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
	const status = useAppSelector(selectTestsStatus);

	return (
		<div className={cx('pass-test')}>
			{status === 'PENDING' && <LoaderBox />}
			<header className={cx('pass-test__header')}>
				<Heading className={cx('pass-test__heading')}>{test?.title}</Heading>
				<Label>{test?.questions.length} вопросов</Label>
			</header>
			{test && test.questions.length ? (
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
			) : (
				<Subtitle style="light">Вопросы еще не созданы</Subtitle>
			)}
			<Panel className={cx('pass-test__panel')}>
				{test && test.questions.length ? (
					<Button variant="accent" onClick={handleSubmit}>
						Завершить
					</Button>
				) : (
					<Link level="button_accent" color="blue_reversed" href="/">
						Вернуться к списку тестов
					</Link>
				)}
			</Panel>
			{isModalShown && <ModalResults close={hideModal} results={getUserResults()} />}
		</div>
	);
};
