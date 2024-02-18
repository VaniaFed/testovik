import type { AxiosResponse } from 'axios';

export const parseSessionId = (response: AxiosResponse): string => {
	if (!response.headers['set-cookie']) {
		return '';
	}

	const cookie = response.headers['set-cookie'][0];
	const sessionId = cookie.split('; ')[0].split('=')[1];

	return sessionId;
};
