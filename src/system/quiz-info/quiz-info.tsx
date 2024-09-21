'use client';

import { useAddQuizToUserProfile, useGetQuizById } from '@/api-client';
import { useAuth } from '@/auth';
import { BackButton, MainButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

export const QuizInfo = () => {
  const router = useRouter();
  const { id: quizId } = useParams<{ id: string }>();
  const { loggedUserData } = useAuth();
  const { impactOccurred } = useHapticFeedback();
  const { data: quizDetails } = useGetQuizById(quizId);
  const { mutate: addQuizToUsersProfile, isPending: isAddingQuizToUsersProfile } =
    useAddQuizToUserProfile(quizId);

  const isQuizWasStartedByUser =
    loggedUserData?.completedQuizzes.findIndex((completedQuiz) => {
      return completedQuiz.quizId === quizId;
    }) !== -1;

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  const onStartQuiz = () => {
    impactOccurred('heavy');
    addQuizToUsersProfile({
      userId: loggedUserData?.telegramId as string,
      data: { quizId: quizId },
    });
  };

  const onContinueQuiz = () => {
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
      <MainButton
        text={isQuizWasStartedByUser ? 'Continue Quiz' : 'Start Quiz'}
        progress={isAddingQuizToUsersProfile}
        onClick={isQuizWasStartedByUser ? onContinueQuiz : onStartQuiz}
      />
      <BackButton onClick={routeBack} />
    </div>
  );
};
