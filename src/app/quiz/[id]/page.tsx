import { getGetQuizByIdQueryKey, getQuizById } from '@/api-client';
import { QuizInfo } from '@/system';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react';

const QuizInfoPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getGetQuizByIdQueryKey(params.id),
    queryFn: () => getQuizById(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <QuizInfo />
    </HydrationBoundary>
  );
};

export default QuizInfoPage;
