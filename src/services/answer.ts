import { axiosProxy } from '@/utils/axios';
import { UpdateAnswersSuccessPayload, type CreateAnswerPayload, Answer } from '@/reduxjs/modules/tests';

interface MoveAnswerRequest {
	id: number;
	position: number;
}

export const answerApi = {
	create: async ({ answer, questionId }: CreateAnswerPayload) =>
		await axiosProxy.post<{ answer: Answer }>(`/questions/${questionId}/answers`, answer),
	patch: async ({ answer }: { answer: Answer }) =>
		await axiosProxy.patch<UpdateAnswersSuccessPayload>(`/answers/${answer.id}`, answer),
	move: async ({ id, position }: MoveAnswerRequest) => await axiosProxy.patch(`/answers/${id}/insert_at/${position}`),
	delete: async ({ id }: { id: number }) => await axiosProxy.delete(`/answers/${id}`),
};
