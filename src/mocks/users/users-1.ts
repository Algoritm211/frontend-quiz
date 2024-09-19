import { UserProfile } from '@/api-client/schemas';

export const users1: UserProfile = {
  _id: 'some-user-1',
  telegramId: '402954445',
  name: 'Alexey Horbunov',
  createdAt: '2012-10-15T21:26:17Z',
  completedQuizzes: [
    {
      _id: 'some-answer-id-1',
      quizId: 'some-id-1',
      quizTitle: 'JS code challenge',
      totalQuestions: 3,
      answers: [
        {
          _id: 'some-answer-id-1-question-1',
          questionId: 'questions-1-id-1',
          isCorrect: true,
          questionText: 'What is the output of the following code?',
          correctAnswer: '2',
          userAnswer: '2',
          correctAnswerId: 'questions-1-id-1-opt-id-4',
          userAnswerId: 'questions-1-id-1-opt-id-1',
        },
      ],
    },
  ],
};
