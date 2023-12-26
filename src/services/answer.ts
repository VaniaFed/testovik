import type { Answer } from '@/reduxjs/modules/tests/types';
import { axiosProxy } from '@/utils/axios';

interface MoveAnswerRequest {
	position: number;
}

// TODO: хорошо бы иметь некий обработчик, который автоматически заберет данные, установит status и ошибку
export const answerApi = {
	create: async (data: Answer, questionId: number) => await axiosProxy.post(`/questions/${questionId}/answers`, data),
	patch: async (data: Partial<Answer>, id: number) => await axiosProxy.patch(`/answers/${id}`, data),
	move: async ({ position }: MoveAnswerRequest, id: number) =>
		await axiosProxy.patch(`/answers/${id}/insert_at/${position}`),
	delete: async (id: number) => await axiosProxy.delete(`/answers/${id}`),
};
