import { axios } from "@/lib/axios";

export type CreateTestRequest = { title: string };

export const testsApi = {
  create: async (data: CreateTestRequest) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tests`,
      data
    );

    return await res.data;
  },
  getAll: async () => {
    const tests = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tests`);
    return tests.data;
  },
};
