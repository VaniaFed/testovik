import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { EditTestModals } from '@/components/pages/edit-test-page/modals/modals';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import {
	Question,
	deleteQuestion,
	deleteTest,
	fetchTestById,
	selectCurrentTest,
	updateTest,
} from '@/reduxjs/modules/tests';
import { ModalMode } from '@/types/common';
import { questionTypeDropdownItems } from '@/utils/data';

export const useEditTest = (testId: string) => {
	const test = useAppSelector(selectCurrentTest);
	const [mode, setMode] = useState<ModalMode>('create');
	const [question, setQuestion] = useState<Question | undefined>(undefined);
	const [questionType, setQuestionType] = useState(questionTypeDropdownItems[0]);
	const [title, setTitle] = useState('');
	const router = useRouter();

	const modalsRef = useRef<EditTestModals>(null);

	const handleAddQuestion = () => {
		setMode('create');
		setQuestion(undefined);
		modalsRef.current?.showEditQuestionModal();
	};

	const handleEditQuestion = (question: Question) => {
		setMode('edit');
		setQuestion(question);
		modalsRef.current?.showEditQuestionModal();
	};

	const handleShowDeleteQuestionModal = (question: Question) => {
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
		if (testId) {
			dispatch(fetchTestById({ id: Number(testId) }));
		}
	}, [dispatch, testId]);

	useEffect(() => {
		if (test) {
			setTitle(test.title);
		}
	}, [test]);

	return {
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
	};
};
