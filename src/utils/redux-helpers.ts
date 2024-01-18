type AnyObjectWithId = {
	id: number;
};

export const findIndexById = <T extends AnyObjectWithId>(array: T[], id: number) => {
	return array.findIndex((item) => item.id === id);
};

export const findItemById = <T extends AnyObjectWithId>(array: T[], id: number) => {
	return array.find((item) => item.id === id);
};

export const updateById = <T extends AnyObjectWithId>(array: T[], id: number, payload: object) => {
	return array.map((item) => (item.id === id ? { ...item, ...payload } : item));
};

export const deleteById = <T extends AnyObjectWithId>(array: T[], id: number) => {
	return array.filter((item) => item.id !== id);
};
