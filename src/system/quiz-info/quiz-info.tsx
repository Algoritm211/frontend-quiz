'use client';

import { useGetQuizById } from '@/api-client';
import { BackButton, MainButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

export const QuizInfo = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { impactOccurred } = useHapticFeedback();
  const { data: quizDetails } = useGetQuizById(id);

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  const onStartQuiz = () => {
    impactOccurred('heavy');
    void router.push(`/quiz/${quizDetails?._id}/questions`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">{quizDetails?.title}</h1>
      <div className="badge badge-success text-base-100">50% off for full pack</div>
      <figure className="my-4">
        <img
          src={quizDetails?.logoUrl}
          className="w-100 object-cover h-52 rounded-xl"
          alt="quiz image"
        />
      </figure>
      <div>
        <span className="italic">Number of questions: {quizDetails?.questions?.length}</span>
      </div>
      <h2 className="text-xl font-bold">Description</h2>
      <p>{quizDetails?.description}</p>
      <MainButton text="Start Quiz" onClick={onStartQuiz} />
      <BackButton onClick={routeBack} />
    </div>
  );
};
