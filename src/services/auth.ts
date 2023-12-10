import { axios } from '@/lib/axios';
import type { User } from '@/lib/definitions';
import { SignInRequest, SignUpRequest } from '@/types/auth';

// TODO: add return types

export const authApi = {
	getCurrentUser: async () => {
		const user = await axios.get<User>(`${process.env.NEXT_PUBLIC_BASE_URL}/users/current`);
		return user.data;
	},
	signUp: async (data: SignUpRequest) => {
		const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/signin`, data);
		return res.data;
	},
	signIn: async (data: SignInRequest) => {
		const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/signin`, data);
		return res.data;
	},
	logOut: async () => {
		const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/logout`);
		return res.data;
	},
};
