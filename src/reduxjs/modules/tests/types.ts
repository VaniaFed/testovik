interface Answer {
	readonly id: number;
	text: string;
	is_right: boolean;
}

export type QuestionType = 'single' | 'multiple' | 'number';

export interface Question {
	readonly id: number;
	title: string;
	answer: number;
	answers: Answer[];
	question_type: QuestionType;
}

export interface Test {
	readonly id: number;
	created_at: string;
	title: string;
	questions: Question[];
}
