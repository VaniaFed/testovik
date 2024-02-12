import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { fetchTestById, deleteQuestion, selectCurrentTest, deleteTest, updateTest } from '@/reduxjs/modules/tests';
import { Panel } from '@/components/ui/panel';
import { Button } from '@/components/ui/button';
import { questionTypeDropdownItems } from '@/utils/data';
import { useRouter } from 'next/navigation';
import { AddQuestion } from '@/components/pages/edit-test-page/add-question';
import { QuestionList } from '@/components/pages/edit-test-page/question-list';
import { Loader } from '@/components/ui/loader';
import { Modals } from '@/components/pages/edit-test-page/modals';
import { EditTestModals } from '@/components/pages/edit-test-page/modals/modals';
import { TestPageHeader } from '@/components/pages/edit-test-page/test-page-header';
import styles from './edit-test-page.module.scss';
import type { ChangeEvent, FC } from 'react';
import type { Question as IQuestion } from '@/reduxjs/modules/tests';
import type { Props } from './props';
import type { ModalMode } from '@/types/common';

const cx = classNames.bind(styles);

export const EditTestPage: FC<Props> = ({ params: { id }, className }) => {
	const test = useAppSelector(selectCurrentTest);
	const [mode, setMode] = useState<ModalMode>('create');
	const [question, setQuestion] = useState<IQuestion | undefined>(undefined);
	const [questionType, setQuestionType] = useState(questionTypeDropdownItems[0]);
	const [title, setTitle] = useState('');
	const router = useRouter();

	const modalsRef = useRef<EditTestModals>(null);

	const handleAddQuestion = () => {
		setMode('create');
		setQuestion(undefined);
		modalsRef.current?.showEditQuestionModal();
	};

	const handleEditQuestion = (question: IQuestion) => {
		setMode('edit');
		setQuestion(question);
		modalsRef.current?.showEditQuestionModal();
	};

	const handleShowDeleteQuestionModal = (question: IQuestion) => {
		setQuestion(question);

		modalsRef.current?.showDeleteQuestionModal();
	};

	const handleChangeTitle = (e: ChangeEvent) => {
		setTitle(e.currentTarget.innerHTML.trim());
	};

	const handleClickSaveTest = () => {
		if (test?.title === title) {
			router.push('/');
		} else {
			modalsRef.current?.showSaveTestModal();
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

			modalsRef.current?.hideDeleteQuestionModal();
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
			{test ? (
				<>
					<TestPageHeader
						className={cx('edit-test-page__header')}
						title={title}
						onChangeTitle={handleChangeTitle}
						questionLength={test.questions.length}
					/>
					<QuestionList
						className={cx('question__list')}
						questions={test.questions}
						onEditQuestion={handleEditQuestion}
						onShowDeleteQuestionModal={handleShowDeleteQuestionModal}
					/>
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
						<Button variant="negative" onClick={modalsRef.current?.showDeleteTestModal}>
							Удалить
						</Button>
					</Panel>
					<Modals
						mode={mode}
						testId={id}
						test={test}
						question={question}
						questionType={questionType}
						title={title}
						onDeleteQuestion={handleDeleteQuestion}
						onDeleteTest={handleDeleteTest}
						onSaveTest={handleSaveTest}
						ref={modalsRef}
					/>
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};
