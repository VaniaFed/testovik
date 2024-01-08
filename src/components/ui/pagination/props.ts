export interface Props {
	itemsPerPage: number;
	totalItems: number;
	currentPage: number;
	onPrevPageClick: () => void;
	onNextPageClick: () => void;
	onItemClick: (n: number) => void;
	// currentPage: number;
	totalPages: number;
	// disable: {
	// 	left: boolean;
	// 	right: boolean;
	// };
	className?: string;
}
