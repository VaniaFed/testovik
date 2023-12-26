import type { FormFields } from '@/components/ui/modal/modal-question/modal-question';
import type { QuestionType } from '@/reduxjs/modules/tests/types';
import type { ModalMode } from '@/types/common';

export const getValidationMessage = ({ answers }: FormFields, questionType: QuestionType, mode: ModalMode) => {
	let errorMessage = '';

	if ((questionType !== 'number' && !answers) || !answers?.length) {
		return null;
	}

	const correctAnswers = answers.filter((answer) => answer.is_right);

	if (questionType === 'single' || questionType === 'multiple') {
		if (answers.length < 2) {
			errorMessage = 'Вопрос не может содержать менее 2-х вариантов ответа';
		} else if (correctAnswers.length === 0) {
			errorMessage = 'Вопрос не может не иметь правильных вариантов ответа';
		}
	}

	if (questionType === 'single') {
		if (correctAnswers.length >= 2) {
			errorMessage = 'У вопроса не может быть 2 и более правильных вариантов ответа';
		}
	}

	if (questionType === 'multiple') {
		if (correctAnswers.length < 2) {
			errorMessage = 'У вопроса не может быть меньше 2-х правильных вариантов ответа';
		}
	}

	return errorMessage;
};
