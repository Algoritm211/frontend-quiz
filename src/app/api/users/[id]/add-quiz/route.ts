import {users1} from "@/mocks/users/users-1";
import {quiz2} from "@/mocks/quizzes/quiz-2";


export async function POST(request: Request, { params }: { params: { id: string } }) {
  const requestBody = await request.json()
  const {quizId} = requestBody;
  console.log('REQUEST BODY', requestBody, 'QUIZ ID', quizId);

  const newUserQuiz = {
    _id: 'some-answer-id-2',
    quizId: quiz2._id,
    quizTitle: quiz2.title,
    totalQuestions: quiz2.questions?.length,
    answers: [],
  }

  return Response.json({
    ...users1,
    completedQuizzes: [
      ...users1.completedQuizzes,
      newUserQuiz,
    ]
  });
}
