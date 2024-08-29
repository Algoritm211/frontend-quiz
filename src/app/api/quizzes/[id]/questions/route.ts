import { fullQuizzes } from '@/mocks/quizzes/quizzes';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const quizToSearch = fullQuizzes.find(({ _id }) => _id === params.id)!;
  return Response.json(quizToSearch.questions);
}
