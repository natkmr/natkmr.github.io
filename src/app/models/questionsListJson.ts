export interface QuestionsListJson {
  questionList: Question[];
}

export interface Question {
  id: string;
  question: string;
  answer: string;
  images?: string[];
}
