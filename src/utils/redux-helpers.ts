import type { AbstractObjectWithId } from '@/types/common';

export const findIndexById = <T extends AbstractObjectWithId>(array: T[], id: number) => {
	return array.findIndex((item) => item.id === id);
};

export const findItemById = <T extends AbstractObjectWithId>(array: T[], id: number) => {
	return array.find((item) => item.id === id);
};

export const updateById = <T extends AbstractObjectWithId>(array: T[], id: number, payload: object) => {
	return array.map((item) => (item.id === id ? { ...item, ...payload } : item));
};

export const sortItems = <T extends AbstractObjectWithId>(array: T[], id: number, position: number) => {
	const result = [...array];

	const [deleted] = result.splice(id, 1);
	const moved = result.slice(id, position);

	if (id > position) {
		result.splice(position, moved.length, ...moved.reverse(), deleted);
	} else {
		result.splice(id, moved.length, ...moved, deleted);
	}

	return result;
};

export const deleteById = <T extends AbstractObjectWithId>(array: T[], id: number) => {
	return array.filter((item) => item.id !== id);
};
