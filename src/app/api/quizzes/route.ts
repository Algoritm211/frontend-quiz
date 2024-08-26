import { shortQuizzes } from '@/mocks/quizzes/quizzes';

export async function GET() {
  return Response.json(shortQuizzes);
}
