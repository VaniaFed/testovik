type AnyObjectWithId = {
	id: number;
};

export const findIndexById = (array: AnyObjectWithId[], id: number) => {
	return array.findIndex((item) => item.id === id);
};

export const findItemById = (array: AnyObjectWithId[], id: number) => {
	return array.find((item) => item.id === id);
};

export const updateById = (array: AnyObjectWithId[], id: number, payload: any) => {
	const indexToUpdate = findIndexById(array, id);
	const current = array[indexToUpdate];
	array[indexToUpdate] = { ...current, ...payload };
};

export const deleteById = (array: AnyObjectWithId[], id: number): void => {
	const indexToDelete = findIndexById(array, id);
	array.splice(indexToDelete, 1);
};
