import { axiosProxy } from '@/utils/axios';

interface CreateAnswerRequest {
	text: string;
	is_right: boolean;
}

type PatchAnswerRequest = Partial<CreateAnswerRequest>;

interface MoveAnswerRequest {
	position: number;
}

// TODO: хорошо бы иметь некий обработчик, который автоматически заберет данные, установит status и ошибку
export const answersApi = {
	create: async (data: CreateAnswerRequest, questionId: number) => {
		const res = await axiosProxy.post(`/questions/${questionId}/answers`, data);
		return await res.data;
	},
	patch: async (data: PatchAnswerRequest, id: number) => {
		const res = await axiosProxy.patch(`/answers/${id}`, data);
		return res.data;
	},
	move: async ({ position }: MoveAnswerRequest, id: number) => {
		const res = await axiosProxy.patch(`/answers/${id}/insert_at/${position}`);
		return res.data;
	},
	delete: async (id: number) => {
		const res = await axiosProxy.delete(`/answers/${id}`);
		return res.data;
	},
};
