import { Question, QuizAnswerResult } from '@/api-client/schemas';

import { ExtendedQuestion } from '@/system/questionnaire/types';

export const mapToExtendedQuestions = (
  questions: Question[],
  completedQuestionsByUser: QuizAnswerResult[]
): ExtendedQuestion[] => {
  const completedAnswersId = new Set(completedQuestionsByUser.map((answer) => answer.questionId));
  return questions.map((question) => ({
    ...question,
    isAnswered: completedAnswersId.has(question._id),
  }));
};
