import React, { forwardRef, useImperativeHandle } from 'react';

import { ModalQuestion } from '@/components/pages/edit-test-page/modal-question';
import { ModalAction } from '@/components/ui/modal/modal-action';
import { useModal } from '@/hooks/use-modal';

import type { Props } from './props';

export interface EditTestModals {
	showSaveTestModal: () => void;
	showDeleteTestModal: () => void;
	showEditQuestionModal: () => void;
	showDeleteQuestionModal: () => void;
	hideDeleteQuestionModal: () => void;
}

export const Modals = forwardRef<EditTestModals, Props>(
	({ mode, testId, test, title, question, questionType, onDeleteQuestion, onDeleteTest, onSaveTest }, ref) => {
		const [isModalSaveTestShown, showSaveTestModal, hideSaveTestModal] = useModal();
		const [isModalDeleteTestShown, showDeleteTestModal, hideDeleteTestModal] = useModal();
		const [isModalEditQuestionShown, showEditQuestionModal, hideEditQuestionModal] = useModal();
		const [isModalDeleteQuestionShown, showDeleteQuestionModal, hideDeleteQuestionModal] = useModal();

		useImperativeHandle(ref, () => ({
			showSaveTestModal,
			showDeleteTestModal,
			showEditQuestionModal,
			showDeleteQuestionModal,
			hideDeleteQuestionModal,
		}));

		return (
			<>
				{isModalEditQuestionShown && (
					<ModalQuestion
						mode={mode}
						question={question}
						questionType={questionType.value}
						testId={Number(testId)}
						close={hideEditQuestionModal}
					/>
				)}
				{isModalDeleteQuestionShown && (
					<ModalAction
						title="Удалить вопрос?"
						subtitle={question?.title as string}
						actionText="Удалить"
						primaryButtonVariant="negative"
						onAction={onDeleteQuestion}
						close={hideDeleteQuestionModal}
					/>
				)}
				{isModalSaveTestShown && (
					<ModalAction
						title="Сохранить изменения?"
						subtitle={`${test?.title as string} -> ${title}`}
						actionText="Сохранить"
						primaryButtonVariant="positive"
						onAction={onSaveTest}
						close={hideSaveTestModal}
					/>
				)}
				{isModalDeleteTestShown && (
					<ModalAction
						title="Удалить тест?"
						subtitle={test?.title as string}
						actionText="Удалить"
						primaryButtonVariant="negative"
						onAction={onDeleteTest}
						close={hideDeleteTestModal}
					/>
				)}
			</>
		);
	},
);

Modals.displayName = 'Modals';
