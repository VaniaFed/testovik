import axios from 'axios';

export const axiosProxy = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
	withCredentials: true,
});

export const axiosSnp = axios.create({
	baseURL: `${process.env.SNP_URL}`,
	withCredentials: true,
});
