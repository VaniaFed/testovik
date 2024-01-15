import { axiosProxy } from '@/utils/axios';
import type {
	CreateTestPayload,
	CreateTestSuccessPayload,
	FetchAllTestsPayload,
	FetchAllTestsSuccessPayload,
	FetchTestByIdPayload,
	Test,
	UpdateTestPayload,
} from '@/reduxjs/modules/tests';

export const testApi = {
	create: async ({ title }: CreateTestPayload) => await axiosProxy.post<CreateTestSuccessPayload>('/tests', title),
	getAll: async (data: FetchAllTestsPayload) =>
		await axiosProxy.get<Test[]>('/tests', {
			params: data,
		}),
	getById: async ({ id }: FetchTestByIdPayload) => await axiosProxy.get<FetchAllTestsSuccessPayload>(`/tests/${id}`),
	patch: async ({ id, title }: UpdateTestPayload) => await axiosProxy.patch(`/tests/${id}`, { title }),
	delete: async ({ id }: { id: number }) => await axiosProxy.delete(`/tests/${id}`),
};
