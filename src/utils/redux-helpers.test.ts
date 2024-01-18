import { deleteById, findIndexById, findItemById, updateById } from '@/utils/redux-helpers';

interface SomeObjectWithId {
	id: number;
	meaningfulTitle: string;
	userId: number;
}
describe('redux helpers', () => {
	let arrayOfObjectsWithId: SomeObjectWithId[] = [
		{ id: 1, meaningfulTitle: 'title 1', userId: 1 },
		{ id: 2, meaningfulTitle: 'title 2', userId: 3 },
		{ id: 3, meaningfulTitle: 'title 3', userId: 4 },
		{ id: 4, meaningfulTitle: 'title 4', userId: 5 },
		{ id: 5, meaningfulTitle: 'title 5', userId: 1 },
	];

	beforeEach(() => {
		arrayOfObjectsWithId = [
			{ id: 1, meaningfulTitle: 'title 1', userId: 1 },
			{ id: 2, meaningfulTitle: 'title 2', userId: 3 },
			{ id: 3, meaningfulTitle: 'title 3', userId: 4 },
			{ id: 4, meaningfulTitle: 'title 4', userId: 5 },
			{ id: 5, meaningfulTitle: 'title 5', userId: 1 },
		];
	});

	it('should return index of an array by id key', () => {
		expect(findIndexById(arrayOfObjectsWithId, 3)).toBe(2);
		expect(findIndexById(arrayOfObjectsWithId, 1)).toBe(0);
		expect(findIndexById(arrayOfObjectsWithId, 5)).toBe(4);
	});

	it('should return item of array by id', () => {
		expect(findItemById(arrayOfObjectsWithId, 3)).toEqual(arrayOfObjectsWithId[2]);
	});

	it('should return updated array', () => {
		expect(
			updateById(arrayOfObjectsWithId, 2, { meaningfulTitle: 'new title is over here', newProp: 'new prop' }),
		).toEqual([
			{ id: 1, meaningfulTitle: 'title 1', userId: 1 },
			{ id: 2, meaningfulTitle: 'new title is over here', userId: 3, newProp: 'new prop' },
			{ id: 3, meaningfulTitle: 'title 3', userId: 4 },
			{ id: 4, meaningfulTitle: 'title 4', userId: 5 },
			{ id: 5, meaningfulTitle: 'title 5', userId: 1 },
		]);
	});

	it('should return new array without the item with a given id', () => {
		expect(deleteById(arrayOfObjectsWithId, 4)).toStrictEqual([
			{ id: 1, meaningfulTitle: 'title 1', userId: 1 },
			{ id: 2, meaningfulTitle: 'title 2', userId: 3 },
			{ id: 3, meaningfulTitle: 'title 3', userId: 4 },
			{ id: 5, meaningfulTitle: 'title 5', userId: 1 },
		]);
	});
});
