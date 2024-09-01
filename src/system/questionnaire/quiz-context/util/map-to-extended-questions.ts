import { Question } from '@/api-client/schemas';

import { ExtendedQuestion } from '@/system/questionnaire/types';

export const mapToExtendedQuestions = (questions: Question[]): ExtendedQuestion[] => {
  return questions.map((question) => ({
    ...question,
    isAnswered: false,
  }));
};
