import { Question } from '@/api-client/schemas';

export interface ExtendedQuestion extends Question {
  isAnswered: boolean;
  selectedAnswerOptionId?: string;
}
