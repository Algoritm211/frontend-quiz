'use client';

import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

import { Question } from '@/system/questionnaire/components/question/question';

export const Questionnaire = () => {
  const router = useRouter();
  const { impactOccurred } = useHapticFeedback();

  const backFunction = () => {
    impactOccurred('medium');
    void router.back();
  };

  return (
    <div>
      <Question />
      <BackButton onClick={() => backFunction()} />
    </div>
  );
};
