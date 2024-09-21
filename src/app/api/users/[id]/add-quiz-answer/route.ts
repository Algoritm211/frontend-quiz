import { QuizResult } from '@/api-client/schemas';

import { questions1 } from '@/mocks/questions/quiestions-1';
import { users1 } from '@/mocks/users/users-1';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: Request, { params }: { params: { id: string } }) {
  await sleep(2000);
  const { id: userId } = params;
  const requestBody = await request.json();
  const { questionId, usersAnswerId } = requestBody;
  console.log('REQUEST BODY', requestBody, 'userId', userId);

  const question = questions1.find((question) => question._id === questionId)!;

  const userAnswer = question.options.find((option) => option._id === usersAnswerId)!;
  const correctAnswer = question.options.find((option) => option.isCorrect)!;

  const updatedFirstQuiz: QuizResult = {
    ...users1.completedQuizzes[0],
    answers: [
      ...users1.completedQuizzes[0].answers,
      {
        _id: 'some-answer-id-1-question-2',
        questionId,
        userAnswer: userAnswer.text,
        correctAnswer: correctAnswer.text,
        isCorrect: userAnswer._id === correctAnswer._id,
        userAnswerId: userAnswer._id,
        correctAnswerId: correctAnswer._id,
        questionText: question.text,
      },
    ],
  };

  return Response.json({
    ...users1,
    completedQuizzes: [updatedFirstQuiz, ...users1.completedQuizzes.slice(1)],
  });
}
