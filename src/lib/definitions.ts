interface Quiz {
  id: string;
  title: string;
  difficulty: Difficulty;
  questions: Question[];
}

interface Question {
  title: string;
  type: QuestionType;
  answers: string | string[];
  rightAnswers: string | string[];
  suggestedAnswers?: string | string[];
}

type Difficulty = "изи" | "придется подумать" | "хардкорчик";
type QuestionType = "ManyOfMany" | "OneOfMany" | "Number";

interface User {
  login: string;
  role: "admin" | "user";
}
