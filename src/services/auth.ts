import { axiosProxy } from '@/utils/axios';
import { SignInRequest, SignUpRequest, User } from '@/reduxjs/modules/auth/types';

// TODO: add return types

export const authApi = {
	signUp: async (data: SignUpRequest) => {
		const res = await axiosProxy.post<SignUpRequest>('/signup', data);
		return res.data;
	},
	// TODO: разные типы почему-то не вызывают ошибку
	signIn: async (data: SignInRequest) => {
		const res = await axiosProxy.post<SignUpRequest>('/signin', data);
		return res.data;
	},
	getCurrentUser: async () => {
		const user = await axiosProxy.get<User>('/users/current');
		return user.data;
	},
	logOut: async () => {
		const res = await axiosProxy.post('/logout');
		return res.data;
	},
};
