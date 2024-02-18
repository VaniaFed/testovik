import { useEffect, useState } from 'react';

type UseModal = [boolean, () => void, () => void];

export function useModal(shownByDefault: boolean = false): UseModal {
	const [isModalShown, setIsModalShown] = useState<boolean>(shownByDefault);

	const showModal = (): void => {
		setIsModalShown(true);
	};

	const hideModal = (): void => {
		setIsModalShown(false);
	};

	useEffect(() => {
		const closeOnEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				hideModal();
			}
		};
		window.addEventListener('keydown', closeOnEsc);

		return () => window.removeEventListener('keydown', closeOnEsc);
	}, []);

	return [isModalShown, showModal, hideModal];
}
