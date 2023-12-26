import { axiosProxy } from '@/utils/axios';
import { Question } from '@/reduxjs/modules/tests/types';

type CreateQuestionRequest = Pick<Question, 'title' | 'question_type' | 'answer'>;
type PatchQuestionRequest = Partial<Question>;

export const questionApi = {
	create: async (data: CreateQuestionRequest, testId: number) =>
		await axiosProxy.post(`/tests/${testId}/questions`, data),
	patch: async (data: PatchQuestionRequest, id: number) => await axiosProxy.patch(`/questions/${id}`, data),
	delete: async (id: number) => await axiosProxy.delete(`/questions/${id}`),
};
