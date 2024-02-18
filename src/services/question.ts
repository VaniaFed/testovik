import { axiosProxy } from '@/utils/axios';

import type {
	CreateQuestionPayload,
	CreateQuestionSuccessPayload,
	DeleteQuestionPayload,
	UpdateQuestionPayload,
	UpdateQuestionSuccessPayload,
} from '@/reduxjs/modules/tests';

export const questionApi = {
	create: async ({ question, testId }: CreateQuestionPayload) =>
		await axiosProxy.post<CreateQuestionSuccessPayload>(`/tests/${testId}/questions`, question),
	patch: async ({ question }: UpdateQuestionPayload) =>
		await axiosProxy.patch<UpdateQuestionSuccessPayload>(`/questions/${question.id}`, question),
	delete: async ({ id }: DeleteQuestionPayload) => await axiosProxy.delete(`/questions/${id}`),
};
