import { axiosProxy } from '@/utils/axios';
import { Test } from '@/lib/definitions';

export type CreateTestRequest = { title: string };
export type PatchTestRequest = Partial<Test>;

export const testsApi = {
	create: async (data: CreateTestRequest) => {
		const res = await axiosProxy.post('/tests', data);

		return await res.data;
	},
	patch: async (data: PatchTestRequest, id: number) => {
		const res = await axiosProxy.patch(`/tests/${id}`, data);
		return res.data;
	},
	delete: async (id: number) => {
		const res = await axiosProxy.delete(`/tests/${id}`);
		return res.data;
	},
	getById: async (id: number) => {
		const tests = await axiosProxy.get<Test>(`/tests/${id}`);
		return tests.data;
	},
	getAll: async () => {
		const tests = await axiosProxy.get<Test[]>('/tests');
		return tests.data;
	},
};
