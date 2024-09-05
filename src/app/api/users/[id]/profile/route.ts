import { users1 } from '@/mocks/users/users-1';

export async function GET() {
  return Response.json(users1);
}
