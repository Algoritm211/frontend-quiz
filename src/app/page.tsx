import { getGetQuizzesQueryKey, getQuizzes } from '@/api-client';
import { QuizList } from '@/system';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export default async function MainPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getGetQuizzesQueryKey(),
    queryFn: () => getQuizzes(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <QuizList />
    </HydrationBoundary>
  );
}
