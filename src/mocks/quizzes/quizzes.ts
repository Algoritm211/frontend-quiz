import { questions2 } from '../questions/questions-2';
import { questions1 } from '../questions/quiestions-1';
import { quiz1 } from './quiz-1';
import { quiz2 } from './quiz-2';

export const shortQuizzes = [quiz1, quiz2];

export const fullQuizzes = [
  {
    ...quiz1,
    questions: questions1,
  },
  {
    ...quiz2,
    questions: questions2,
  },
];
