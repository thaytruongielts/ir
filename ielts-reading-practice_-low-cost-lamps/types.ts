
export type QuestionType = 'multiple-choice' | 'sentence-completion' | 'true-false-not-given';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  instructions: string;
}

export interface UserAnswers {
  [key: string]: string;
}

export interface CorrectAnswers {
    [key: string]: string | string[];
}
