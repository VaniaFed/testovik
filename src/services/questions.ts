import { axiosProxy } from '@/utils/axios';
import { Question } from '@/lib/definitions';

type CreateQuestionRequest = Pick<Question, 'title' | 'question_type' | 'answer'>;
type PatchQuestionRequest = Partial<Question>;

export const questionsApi = {
	create: async (data: CreateQuestionRequest, testId: number) => {
		const res = await axiosProxy.post(`/tests/${testId}/questions`, data);
		return await res.data;
	},
	patch: async (data: PatchQuestionRequest, id: number) => {
		const res = await axiosProxy.patch(`/questions/${id}`, data);
		return res.data;
	},
	delete: async (id: number) => {
		const res = await axiosProxy.delete(`/questions/${id}`);
		return res.data;
	},
};
