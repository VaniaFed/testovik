interface Answer {
	id: number;
	text: string;
	is_right: boolean;
}

interface Question {
	id: number;
	title: string;
	answer: number;
	answers: Answer[];
	question_type: 'single' | 'multiple' | 'number';
}

export interface Test {
	id: number;
	created_at: string;
	title: string;
	questions: Question[];
}

// type: 'question-with-a-few-answers';

// interface QuestionWithAFewAnswers {
// 	title: string;
// 	answerType: 'few';
// 	rightAnswers: string[];
// }

// interface QuestionWithOneAnswers {
// 	title: string;
// 	answerType: 'one';
// 	rightAnswer: string;
// }

// interface QuestionWithNumberAnswer {
// 	title: string;
// 	answerType: 'number';
// 	rightAnswer: number;
// }

// type Question = QuestionWithAFewAnswers | QuestionWithOneAnswers | QuestionWithNumberAnswer;

export interface Pagination {
	total_pages: number;
	total_count: number;
}
