import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useWriteToUrlParams = (key: string, value: string) => {
	const router = useRouter();

	useEffect(() => {
		const url = new URL(window.location.href);
		url.searchParams.set(key, value);

		router.push(url.toString());
	}, [value]);
};
