import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { selectCurrentTest } from '@/reduxjs/modules/tests/selectors';
import { fetchTestById } from '@/reduxjs/modules/tests/actions';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';
import { Panel } from '@/components/ui/panel';
import { Button } from '@/components/ui/button';
import { Dropdown } from '@/components/ui/dropdown';
import { useModal } from '@/hooks/use-modal';
import { questionTypeDropdownItems } from '@/utils/data';
import { ModalQuestion } from '@/components/ui/modal/modal-question/modal-question';
import { AnswerItem } from '@/components/ui/answer-item';
import { Stack } from '@/components/layout/stack';
import { Divider } from '@/components/ui/divider';
import styles from './test-page.module.scss';
import type { FC } from 'react';
import type { Question } from '@/reduxjs/modules/tests/types';
import type { DropdownItem } from '@/types/common';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const TestPage: FC<Props> = ({ params: { id }, testMode, className }) => {
	const [mode, setMode] = useState<'create' | 'edit'>('create');
	const [question, setQuestion] = useState<Question | null>(null);
	const [questionType, setQuestionType] = useState<DropdownItem>(questionTypeDropdownItems[0]);

	const { isModalShown, hideModal, showModal } = useModal(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) {
			dispatch(fetchTestById(Number(id)));
		}
	}, [dispatch, id]);

	const test = useAppSelector(selectCurrentTest);

	const handleAddQuestion = () => {
		setMode('create');
		setQuestion(null);
		showModal();
	};

	const handleEdit = (question: Question) => {
		setMode('edit');
		setQuestion(question);
		showModal();
	};

	return (
		<div className={cx('test-page', className)}>
			<header className={cx('pass-test-page__header')}>
				<Heading
					className={cx('pass-test-page__heading')}
					contentEditable
					suppressContentEditableWarning={true}>
					{test?.title}
				</Heading>
				<Label>{test?.questions.length} вопросов</Label>
			</header>
			<Stack className={cx('question-list')}>
				{test?.questions.map((question, index) => (
					<Stack gap="18" key={index}>
						<Heading size="3" className={cx('question-list__heading')}>
							{question.title}
						</Heading>
						{question.answers.length > 0 ? (
							<Stack gap="18" className={cx('question-list__answers')}>
								{question.answers.map((answer, index) => (
									<AnswerItem
										value={answer.text}
										isRight={answer.is_right}
										key={index}
										readOnly={testMode === 'edit'}
									/>
								))}
							</Stack>
						) : typeof question.answer === 'number' ? (
							<AnswerItem value={question.answer} isRight key={index} readOnly={testMode === 'edit'} />
						) : (
							<Label>Ответов пока нет</Label>
						)}
						{testMode === 'edit' && (
							<Stack direction="row">
								<Button variant="text_accent" onClick={() => handleEdit(question)}>
									Редактировать
								</Button>
								<Button variant="text_negative">Удалить</Button>
							</Stack>
						)}
						<Divider />
					</Stack>
				))}
			</Stack>
			{testMode === 'edit' && (
				<div className={cx('question-add')}>
					<Heading size="3" className={cx('question-add__heading')}>
						Добавить вопрос
					</Heading>
					<Dropdown
						placeholder="Тип вопроса"
						name="dropdown-question-type"
						items={questionTypeDropdownItems}
						active={questionType}
						onChange={setQuestionType}
						className={cx('question-add__dropdown')}
					/>
					<Button variant="accent" onClick={() => handleAddQuestion()}>
						Добавить вопрос
					</Button>
				</div>
			)}

			{testMode === 'edit' ? (
				<Panel>
					<Button variant="positive">Сохранить</Button>
					<Button variant="negative">Удалить</Button>
				</Panel>
			) : (
				<Panel>
					<Button variant="accent">Завершить</Button>
				</Panel>
			)}
			{isModalShown && testMode === 'edit' && (
				<ModalQuestion
					mode={mode}
					question={question}
					questionType={questionType.value}
					testId={Number(id)}
					close={hideModal}
				/>
			)}
		</div>
	);
};