
export type QuestionType = 'TFNG' | 'YNNG';

export type AnswerValue = 'TRUE' | 'FALSE' | 'NOT_GIVEN' | 'YES' | 'NO' | 'NOT_GIVEN_YN';

export interface Question {
  id: string;
  text: string;
  correctAnswer: AnswerValue;
  explanation: string;
}

export interface Passage {
  id: string;
  title: string;
  type: QuestionType;
  content: string;
  questions: Question[];
}

export interface UserProgress {
  passageId: string;
  answers: Record<string, AnswerValue>;
  completed: boolean;
}
