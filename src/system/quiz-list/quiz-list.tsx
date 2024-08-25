import { useRouter } from 'next-nprogress-bar';
import React from 'react';

import { QuizCard } from '@/system/quiz-list/components';

export const QuizList = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-3xl mx-2 font-bold mb-1">Available quizes</h1>
      <hr className="my-2 bg-telegram-section-separator" />
      <div className="flex flex-col gap-2">
        <QuizCard onCardClick={() => router.push('/quiz/some_id')} />
      </div>
    </div>
  );
};
