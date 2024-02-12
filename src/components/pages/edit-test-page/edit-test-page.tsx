import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { fetchTestById, deleteQuestion, selectCurrentTest, deleteTest, updateTest } from '@/reduxjs/modules/tests';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';
import { Panel } from '@/components/ui/panel';
import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/use-modal';
import { questionTypeDropdownItems } from '@/utils/data';
import { ModalQuestion } from '@/components/pages/edit-test-page/modal-question/modal-question';
import { Stack } from '@/components/layout/stack';
import { Question } from '@/components/ui/question';
import { ModalAction } from '@/components/ui/modal/modal-action';
import { useRouter } from 'next/navigation';
import styles from './edit-test-page.module.scss';
import type { ChangeEvent, FC } from 'react';
import type { Question as IQuestion } from '@/reduxjs/modules/tests';
import type { Props } from './props';
import { AddQuestion } from '@/components/pages/edit-test-page/add-question';

const cx = classNames.bind(styles);

export const EditTestPage: FC<Props> = ({ params: { id }, className }) => {
	const test = useAppSelector(selectCurrentTest);
	const [mode, setMode] = useState<'create' | 'edit'>('create');
	const [question, setQuestion] = useState<IQuestion | undefined>(undefined);
	const [questionType, setQuestionType] = useState(questionTypeDropdownItems[0]);
	const [title, setTitle] = useState('');
	const router = useRouter();

	const [isModalSaveTestShown, showSaveTestModal, hideSaveTestModal] = useModal();
	const [isModalDeleteTestShown, showDeleteTestModal, hideDeleteTestModal] = useModal();
	const [isModalEditQuestionShown, showEditQuestionModal, hideEditQuestionModal] = useModal();
	const [isModalDeleteQuestionShown, showDeleteQuestionModal, hideDeleteQuestionModal] = useModal();

	const handleAddQuestion = () => {
		setMode('create');
		setQuestion(undefined);
		showEditQuestionModal();
	};

	const handleEditQuestion = (question: IQuestion) => {
		setMode('edit');
		setQuestion(question);
		showEditQuestionModal();
	};

	const handleShowDeleteQuestionModal = (question: IQuestion) => {
		setQuestion(question);

		showDeleteQuestionModal();
	};

	const handleTitleChange = (e: ChangeEvent) => {
		setTitle(e.currentTarget.innerHTML);
	};

	const handleClickSaveTest = () => {
		if (test?.title === title) {
			router.push('/');
		} else {
			showSaveTestModal();
		}
	};

	const dispatch = useAppDispatch();

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
		<div className={cx('edit-test-page', className)}>
			<header className={cx('edit-test-page__header')}>
				<Heading
					className={cx('edit-test-page__heading')}
					contentEditable
					suppressContentEditableWarning={true}
					onBlur={handleTitleChange}>
					{title}
				</Heading>
				<Label>{test?.questions.length} вопросов</Label>
			</header>
			<Stack className={cx('question-list')}>
				{test?.questions.map((question, index) => (
					<li key={index}>
						<Question
							question={question}
							mode="edit"
							bottomContent={
								<Stack direction="row">
									<Button variant="text_accent" onClick={() => handleEditQuestion(question)}>
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
			<AddQuestion
				className={cx('question__add')}
				allQuestionTypes={questionTypeDropdownItems}
				activeQuestionType={questionType}
				setQuestionType={setQuestionType}
				onAdd={handleAddQuestion}
			/>
			<Panel>
				<Button variant="positive" onClick={handleClickSaveTest}>
					Сохранить
				</Button>
				<Button variant="negative" onClick={showDeleteTestModal}>
					Удалить
				</Button>
			</Panel>
			{isModalEditQuestionShown && (
				<ModalQuestion
					mode={mode}
					question={question}
					questionType={questionType.value}
					testId={Number(id)}
					close={hideEditQuestionModal}
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
			{isModalSaveTestShown && (
				<ModalAction
					title="Сохранить изменения?"
					subtitle={`${test?.title as string} -> ${title}`}
					actionText="Сохранить"
					primaryButtonVariant="positive"
					onAction={handleSaveTest}
					close={hideSaveTestModal}
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
