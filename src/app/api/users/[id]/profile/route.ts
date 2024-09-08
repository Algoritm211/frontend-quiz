import { notFound } from 'next/navigation';

import { users1 } from '@/mocks/users/users-1';

export async function GET() {
  // uncomment 2 lines to test auth
  // const isUserExists = Math.random() > 0.5;
  // return isUserExists ? Response.json(users1) : notFound();

  return Response.json(users1);
}
