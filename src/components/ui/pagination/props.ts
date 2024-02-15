export interface Props {
	itemsPerPage: number;
	totalItems: number;
	currentPage: number;
	onPrevPageClick: () => void;
	onNextPageClick: () => void;
	onItemClick: (n: number) => void;
	totalPages: number;
	className?: string;
}
