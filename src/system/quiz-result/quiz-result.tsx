'use client';

import { MainButton } from '@/telegram-web-app/components';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

export const QuizResult = () => {
  const router = useRouter();

  const onReturnToHome = () => {
    void router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-8">You made it!</h1>

      <img
        src="/quiz-finish-screen/finish-duck.gif"
        className="w-44 mb-10"
        alt="duck with hearts"
      />

      <p className="text-lg font-bold mb-8">💪 You are just a JS Magician 💻</p>

      <MainButton color="#52c41a" text="Go to main page" onClick={onReturnToHome} />
    </div>
  );
};
