import { axiosProxy } from '@/utils/axios';
import { Test } from '@/reduxjs/modules/tests/types';

export type CreateTestRequest = { title: string };
export type PatchTestRequest = Partial<Test>;

export const testApi = {
	create: async (title: string) => await axiosProxy.post<Test>('/tests', title),
	patch: async (data: PatchTestRequest, id: number) => await axiosProxy.patch(`/tests/${id}`, data),
	delete: async (id: number) => await axiosProxy.delete(`/tests/${id}`),
	getById: async (id: number) => await axiosProxy.get<Test>(`/tests/${id}`),
	getAll: async () => await axiosProxy.get<Test[]>('/tests'),
};
