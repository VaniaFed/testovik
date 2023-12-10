export interface Test {
  id: number;
  created_at: string;
  title: string;
  questions: Question[];
}

// interface Question {
//   title: string;
//   type: QuestionType;
//   answers: string | string[];
//   rightAnswers: string | string[];
//   suggestedAnswers?: string | string[];
// }

// type: 'question-with-a-few-answers';

interface QuestionWithAFewAnswers {
  title: string;
  answerType: "few";
  rightAnswers: string[];
}

interface QuestionWithOneAnswers {
  title: string;
  answerType: "one";
  rightAnswer: string;
}

interface QuestionWithNumberAnswer {
  title: string;
  answerType: "number";
  rightAnswer: number;
}

type Question =
  | QuestionWithAFewAnswers
  | QuestionWithOneAnswers
  | QuestionWithNumberAnswer;

export interface User {
  id: string;
  username: string;
  is_admin: boolean;
}

export interface TestDetails {
  total_pages: number;
  total_count: number;
}
