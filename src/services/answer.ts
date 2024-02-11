import { axiosProxy } from '@/utils/axios';
import {
	UpdateAnswersSuccessPayload,
	type CreateAnswerPayload,
	Answer,
	MoveAnswerPosition,
} from '@/reduxjs/modules/tests';

export const answerApi = {
	create: async ({ answer, questionId }: CreateAnswerPayload) =>
		await axiosProxy.post<{ answer: Answer }>(`/questions/${questionId}/answers`, answer),
	patch: async ({ answer }: { answer: Answer }) =>
		await axiosProxy.patch<UpdateAnswersSuccessPayload>(`/answers/${answer.id}`, answer),
	move: async (position: MoveAnswerPosition) =>
		await axiosProxy.patch(`/answers/${position.id}/insert_at/${position.destination + 1}`),
	delete: async ({ id }: { id: number }) => await axiosProxy.delete(`/answers/${id}`),
};
