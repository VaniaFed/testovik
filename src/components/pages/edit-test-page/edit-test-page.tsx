import React from 'react';
import classNames from 'classnames/bind';
import { Panel } from '@/components/ui/panel';
import { Button } from '@/components/ui/button';
import { questionTypeDropdownItems } from '@/utils/data';
import { AddQuestion } from '@/components/pages/edit-test-page/add-question';
import { QuestionList } from '@/components/pages/edit-test-page/question-list';
import { Loader } from '@/components/ui/loader';
import { Modals } from '@/components/pages/edit-test-page/modals';
import { TestPageHeader } from '@/components/pages/edit-test-page/test-page-header';
import { useEditTest } from '@/components/pages/edit-test-page/use-edit-test';
import styles from './edit-test-page.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const EditTestPage: FC<Props> = ({ params: { id }, className }) => {
	const {
		mode,
		title,
		test,
		question,
		modalsRef,
		questionType,
		setQuestionType,
		handleAddQuestion,
		handleEditQuestion,
		handleDeleteQuestion,
		handleShowDeleteQuestionModal,
		handleChangeTitle,
		handleClickSaveTest,
		handleSaveTest,
		handleDeleteTest,
	} = useEditTest(id);

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
