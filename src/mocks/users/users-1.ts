import { UserProfile } from '@/api-client/schemas';

export const users1: UserProfile = {
  _id: 'some-user-1',
  name: 'Alexey Horbunov',
  joinedDate: '2012-10-15T21:26:17Z',
  completedQuizzes: [
    {
      _id: 'some-id-1',
      title: 'JS code challenge',
      isCompleted: false,
      progressPercentage: 68,
      totalQuestions: 2,
    },
    {
      _id: 'some-id-2',
      title: 'Advanced topics in Node.js.',
      isCompleted: true,
      progressPercentage: 100,
      totalQuestions: 1,
    },
  ],
};
