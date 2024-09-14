'use client';

import { useGetQuizzes } from '@/api-client';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

import { QuizCard } from '@/system/quiz-list/components';

export const QuizList = () => {
  const router = useRouter();
  const { data: quizzes } = useGetQuizzes();

  const onGoToResults = () => {
    router.push('/quiz/some_id/results');
  };

  return (
    <div>
      <button onClick={onGoToResults}>Go to results</button>
      <h1 className="text-3xl mx-2 font-bold mb-1">Available quizzes</h1>
      <hr className="my-2 bg-telegram-section-separator" />
      <div className="flex flex-col gap-2">
        {quizzes?.map((quiz) => (
          <QuizCard
            key={quiz._id}
            onCardClick={() => router.push(`/quiz/${quiz._id}`)}
            quiz={quiz}
          />
        ))}
      </div>
    </div>
  );
};
