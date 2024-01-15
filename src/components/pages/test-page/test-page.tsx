import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { fetchTestById, deleteQuestion, selectCurrentTest, deleteTest, updateTest } from '@/reduxjs/modules/tests';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';
import { Panel } from '@/components/ui/panel';
import { Button } from '@/components/ui/button';
import { Dropdown } from '@/components/ui/dropdown';
import { useModal } from '@/hooks/use-modal';
import { questionTypeDropdownItems } from '@/utils/data';
import { ModalQuestion } from '@/components/ui/modal/modal-question/modal-question';
import { Stack } from '@/components/layout/stack';
import { Question } from '@/components/ui/question';
import { ModalAction } from '@/components/ui/modal/modal-action';
import { useRouter } from 'next/navigation';
import styles from './test-page.module.scss';
import type { ChangeEvent, FC } from 'react';
import type { Question as IQuestion } from '@/reduxjs/modules/tests';
import type { DropdownItem } from '@/types/common';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const TestPage: FC<Props> = ({ params: { id }, className }) => {
	const [mode, setMode] = useState<'create' | 'edit'>('create');
	const [question, setQuestion] = useState<IQuestion | null>(null);
	const [questionType, setQuestionType] = useState<DropdownItem>(questionTypeDropdownItems[0]);
	const [title, setTitle] = useState('');
	const router = useRouter();

	const {
		isModalShown: isModalQuestionShown,
		hideModal: hideQuestionModal,
		showModal: showQuestionModal,
	} = useModal();

	const {
		isModalShown: isModalDeleteQuestionShown,
		hideModal: hideDeleteQuestionModal,
		showModal: showDeleteQuestionModal,
	} = useModal();

	const {
		isModalShown: isModalDeleteTestShown,
		hideModal: hideDeleteTestModal,
		showModal: showDeleteTestModal,
	} = useModal();

	const test = useAppSelector(selectCurrentTest);

	const handleAddQuestion = () => {
		setMode('create');
		setQuestion(null);
		showQuestionModal();
	};

	const handleEdit = (question: IQuestion) => {
		setMode('edit');
		setQuestion(question);
		showQuestionModal();
	};

	const handleShowDeleteQuestionModal = (question: IQuestion) => {
		setQuestion(question);

		showDeleteQuestionModal();
	};

	const dispatch = useAppDispatch();

	const handleTitleChange = (e: ChangeEvent) => {
		setTitle(e.currentTarget.innerHTML);
	};

	const handleSaveTest = () => {
		if (test) {
			dispatch(updateTest({ id: test.id, title }));
			router.push('/');
		}
	};

	const handleDeleteTest = () => {
		if (test) {
			dispatch(deleteTest({ id: test.id }));
			router.push('/');
		}
	};

	const handleDeleteQuestion = () => {
		if (question) {
			dispatch(deleteQuestion({ id: question.id }));
			hideDeleteQuestionModal();
		}
	};

	useEffect(() => {
		if (id) {
			dispatch(fetchTestById({ id: Number(id) }));
		}
	}, [dispatch, id]);

	useEffect(() => {
		if (test) {
			setTitle(test.title);
		}
	}, [test]);

	return (
		<div className={cx('test-page', className)}>
			<header className={cx('test-page__header')}>
				<Heading
					className={cx('test-page__heading')}
					contentEditable
					suppressContentEditableWarning={true}
					onBlur={handleTitleChange}>
					{title}
				</Heading>
				<Label>{test?.questions.length} вопросов</Label>
			</header>
			<Stack className={cx('question-list')}>
				<Stack className={cx('question-list')}>
					{test?.questions.map((question, index) => (
						<li key={index}>
							<Question
								question={question}
								mode="edit"
								bottomContent={
									<Stack direction="row">
										<Button variant="text_accent" onClick={() => handleEdit(question)}>
											Редактировать
										</Button>
										<Button
											variant="text_negative"
											onClick={() => handleShowDeleteQuestionModal(question)}>
											Удалить
										</Button>
									</Stack>
								}
							/>
						</li>
					))}
				</Stack>
			</Stack>
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
			<Panel>
				<Button variant="positive" onClick={handleSaveTest}>
					Сохранить
				</Button>
				<Button variant="negative" onClick={showDeleteTestModal}>
					Удалить
				</Button>
			</Panel>
			{isModalQuestionShown && (
				<ModalQuestion
					mode={mode}
					question={question}
					questionType={questionType.value}
					testId={Number(id)}
					close={hideQuestionModal}
				/>
			)}
			{isModalDeleteQuestionShown && (
				<ModalAction
					title="Удалить вопрос?"
					subtitle={question?.title as string}
					actionText="Удалить"
					primaryButtonVariant="negative"
					onAction={handleDeleteQuestion}
					close={hideDeleteQuestionModal}
				/>
			)}
			{isModalDeleteTestShown && (
				<ModalAction
					title="Удалить тест?"
					subtitle={test?.title as string}
					actionText="Удалить"
					primaryButtonVariant="negative"
					onAction={handleDeleteTest}
					close={hideDeleteTestModal}
				/>
			)}
		</div>
	);
};
