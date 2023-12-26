import type { FormFields } from '@/components/ui/modal/modal-add-single-question/modal-question';
import type { QuestionType } from '@/reduxjs/modules/tests/types';
import type { ModalMode } from '@/types/common';

export const getValidationMessage = (formData: FormFields, mode: ModalMode, questionType: QuestionType) => {
	let errorMessage = '';

	if ((questionType !== 'number' && !formData.answers) || !formData.answers?.length) {
		return null;
	}

	const correctAnswers = formData.answers.filter((answer) => answer.is_right);

	if (questionType === 'single') {
		if (formData.answers.length < 2) {
			errorMessage = 'Вопрос не может содержать менее 2 вариантов ответа';
		} else if (correctAnswers.length >= 2) {
			errorMessage = 'У вопроса не может быть 2 и более правильных вариантов ответа';
		} else if (correctAnswers.length === 0) {
			errorMessage = 'Вопрос не может не иметь правильных вариантов ответа';
		}
	}

	return errorMessage;
};
