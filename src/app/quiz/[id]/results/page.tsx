import { getGetQuestionsByQuizIdQueryKey, getQuestionsByQuizId } from '@/api-client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react';

import { QuizResult } from '@/system/quiz-result';

const QuestionsPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  const { id: quizId } = params;

  await queryClient.prefetchQuery({
    queryKey: getGetQuestionsByQuizIdQueryKey(quizId),
    queryFn: () => getQuestionsByQuizId(quizId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <QuizResult />
    </HydrationBoundary>
  );
};

export default QuestionsPage;
