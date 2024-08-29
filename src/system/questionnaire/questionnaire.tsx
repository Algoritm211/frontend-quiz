'use client';

import { useGetQuestionsByQuizId } from '@/api-client';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

import { Question } from '@/system/questionnaire/components/question/question';

export const Questionnaire = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { impactOccurred } = useHapticFeedback();
  const { data: questions } = useGetQuestionsByQuizId(id);

  const backFunction = () => {
    impactOccurred('medium');
    void router.back();
  };

  return (
    <div>
      <Question />
      <div>some</div>
      <BackButton onClick={() => backFunction()} />
    </div>
  );
};
