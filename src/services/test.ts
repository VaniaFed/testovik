import { axiosProxy } from '@/utils/axios';
import type {
	CreateTestPayload,
	CreateTestSuccessPayload,
	FetchAllTestsSuccessPayload,
	FetchTestByIdPayload,
	Test,
} from '@/reduxjs/modules/tests';

type PatchTestRequest = Partial<Test>;

export const testApi = {
	create: async ({ title }: CreateTestPayload) => await axiosProxy.post<CreateTestSuccessPayload>('/tests', title),
	getAll: async () => await axiosProxy.get<Test[]>('/tests'),
	getById: async ({ id }: FetchTestByIdPayload) => await axiosProxy.get<FetchAllTestsSuccessPayload>(`/tests/${id}`),
	// TODO: add types:
	// 1. PatchTestPayload
	// 2. DeleteTestPayload
	patch: async ({ data, id }: { data: PatchTestRequest; id: number }) => await axiosProxy.patch(`/tests/${id}`, data),
	delete: async ({ id }: { id: number }) => await axiosProxy.delete(`/tests/${id}`),
};
