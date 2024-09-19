import { Question, QuizAnswerResult } from '@/api-client/schemas';

import { ExtendedQuestion } from '@/system/questionnaire/types';

export const mapToExtendedQuestions = (
  questions: Question[],
  completedQuestionsByUser: QuizAnswerResult[]
): ExtendedQuestion[] => {
  const normalizedAnswers = completedQuestionsByUser.reduce((acc, answer) => {
    acc.set(answer.questionId, answer);
    return acc
  }, new Map<string, QuizAnswerResult>())

  return questions.map((question) => ({
    ...question,
    isAnswered: normalizedAnswers.has(question._id),
    selectedAnswerOptionId: normalizedAnswers.get(question._id)?.userAnswerId
  }));
};
