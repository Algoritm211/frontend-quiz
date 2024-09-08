import { users1 } from '@/mocks/users/users-1';

export async function POST(request: Request) {
  console.log('REQUEST BODY', await request.json());
  return Response.json(users1);
}
