import classNames from 'classnames/bind';
import React from 'react';

import { AddQuestion } from '@/components/pages/edit-test-page/add-question';
import { Modals } from '@/components/pages/edit-test-page/modals';
import { QuestionList } from '@/components/pages/edit-test-page/question-list';
import { TestPageHeader } from '@/components/pages/edit-test-page/test-page-header';
import { useEditTest } from '@/components/pages/edit-test-page/use-edit-test';
import { Button } from '@/components/ui/button';
import { LoaderBox } from '@/components/ui/loader-box';
import { Panel } from '@/components/ui/panel';
import { useAppSelector } from '@/reduxjs/hooks';
import { selectTestsStatus } from '@/reduxjs/modules/tests';
import { questionTypeDropdownItems } from '@/utils/data';

import styles from './edit-test-page.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

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

	const status = useAppSelector(selectTestsStatus);

	return (
		<div className={cx('edit-test-page', className)}>
			{status === 'PENDING' && <LoaderBox />}
			{test && (
				<>
					<TestPageHeader
						className={cx('edit-test-page__header')}
						title={title}
						onChangeTitle={handleChangeTitle}
						questionLength={test.questions.length}
					/>
					<QuestionList
						className={cx('edit-test-page__question-list')}
						questions={test.questions}
						onEditQuestion={handleEditQuestion}
						onShowDeleteQuestionModal={handleShowDeleteQuestionModal}
					/>
					<AddQuestion
						className={cx('edit-test-page__question-add')}
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
			)}
		</div>
	);
};
