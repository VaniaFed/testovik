import { TestResults } from '@/components/pages/pass-test/modal-results/props';
import { useModal } from '@/hooks/use-modal';
import { useAppDispatch, useAppSelector } from '@/reduxjs/hooks';
import { Answer, Question, QuestionType, fetchTestById, selectCurrentTest } from '@/reduxjs/modules/tests';
import { useEffect, useState } from 'react';

// in case of multiple and single answers
// we collect answer ids in order to determine the right ones
// by comparing with the correct ones later on
type AnswerValue = number | Answer['id'] | Answer['id'][];

export interface UserAnswer {
	question: Pick<Question, 'id' | 'question_type'>;
	correctAnswer: AnswerValue;
	userAnswer?: AnswerValue;
	error: string;
}

export const usePassTest = (id: string) => {
	const test = useAppSelector(selectCurrentTest);
	const [answers, setAnswers] = useState<UserAnswer[]>([]);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSuccessModalShown, showSuccessModal, hideSuccessModal] = useModal();

	const getUserAnswer = (questionId: number) => {
		return answers.find((answer) => answer.question.id === questionId);
	};

	const toggleMultipleAnswers = (userAnswer: number, answers: number[]) => {
		return answers.includes(userAnswer)
			? answers.filter((answer) => answer !== userAnswer)
			: [...answers, userAnswer];
	};

	const handleAnswerChange = (questionType: QuestionType) => (questionId: number, value: number) => {
		setAnswers((prev) =>
			prev.map((answer) => {
				const isTargetAnswer = answer.question.id === questionId;
				return isTargetAnswer
					? {
							...answer,
							userAnswer:
								questionType === 'multiple'
									? toggleMultipleAnswers(value, answer.userAnswer as number[])
									: value,
						}
					: answer;
			}),
		);
	};

	const checkIfAnswerChecked = (questionType: QuestionType, questionId: number) => (answerId: number) => {
		const answer = getUserAnswer(questionId);

		if (!answer) {
			return false;
		}

		return questionType === 'single'
			? answer.userAnswer === answerId
			: (answer.userAnswer as number[]).includes(answerId);
	};

	const handleSubmit = () => {
		setAnswers((prev) => [
			...prev.map((answer) => {
				if (answer.question.question_type === 'number' && typeof answer.userAnswer !== 'number') {
					return { ...answer, error: 'Ответ должен быть числом' };
				}
				if (answer.userAnswer === undefined || !String(answer.userAnswer).length) {
					return { ...answer, error: 'На вопросы нужно отвечать' };
				}
				return { ...answer, error: '' };
			}),
		]);
		setIsSubmitted(true);
	};

	const checkIfFormValid = () => answers.every((answer) => answer.error === '');

	const checkMultipleAnswers = (answers: number[], correctAnswers: number[]) => {
		return answers.every((answer) => correctAnswers.includes(answer)) && answers.length === correctAnswers.length;
	};

	const getWrongQuestions = (questions: Question[]) => {
		return questions.filter(
			(question) =>
				answers.filter(
					(answer) =>
						question.id === answer.question.id &&
						(answer.question.question_type === 'multiple'
							? !checkMultipleAnswers(answer.userAnswer as number[], answer.correctAnswer as number[])
							: answer.userAnswer !== answer.correctAnswer),
				).length,
		);
	};

	const getUserResults = (): TestResults => {
		const correctAnswers = answers.filter((answer) =>
			answer.question.question_type === 'multiple'
				? checkMultipleAnswers(answer.userAnswer as number[], answer.correctAnswer as number[])
				: answer.userAnswer === answer.correctAnswer,
		);
		return {
			totalAnswers: answers.length,
			correctNumber: correctAnswers.length,
			wrongQuestions: getWrongQuestions(test?.questions as Question[]),
		};
	};

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) {
			dispatch(fetchTestById({ id: Number(id) }));
		}
	}, [dispatch, id]);

	useEffect(() => {
		if (test && test.questions.length) {
			setAnswers(test?.questions.map(initUserAnswers));
		}
	}, [test]);

	useEffect(() => {
		const isFormValid = checkIfFormValid();

		if (isSubmitted && isFormValid) {
			showSuccessModal();
		}

		setIsSubmitted(false);
	}, [isSubmitted]);

	return {
		test,
		answers,
		getUserAnswer,
		handleAnswerChange,
		checkIfAnswerChecked,
		handleSubmit,
		getUserResults,
		isModalShown: isSuccessModalShown,
		hideModal: hideSuccessModal,
	};
};

const initUserAnswers = (question: Question): UserAnswer => {
	const { question_type, answer, answers } = question;
	const correctAnswer =
		question_type === 'number'
			? (answer as number)
			: question_type === 'multiple'
				? answers.filter((answer) => answer.is_right).map((answer) => answer.id)
				: (answers.find((answer) => answer.is_right)?.id as number);

	return {
		question,
		correctAnswer,
		userAnswer: question_type === 'multiple' ? [] : undefined,
		error: '',
	};
};
