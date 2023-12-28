export const findIndexById = (array: { id: number }[], id: number) => {
	return array.findIndex((item: { id: number }) => item.id === id);
};
