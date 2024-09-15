'use client';

import { useGetUserProfile } from '@/api-client';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

import { PassedQuizCard } from './components';

export const UserProfile = () => {
  const { id: userId } = useParams<{ id: string }>();
  const { data: userProfile } = useGetUserProfile(userId);
  const router = useRouter();
  const { impactOccurred } = useHapticFeedback();

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  const proceedQuiz = (quizId: string) => {
    impactOccurred('medium');
    router.push(`/quiz/${quizId}/questions`);
  };

  const redoQuiz = (quizId: string) => {
    impactOccurred('medium');
    router.push(`/quiz/${quizId}`);
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  const completedQuizzes =
    userProfile.completedQuizzes.map((quiz) => {
      const totalQuestions = quiz.totalQuestions;

      const isCompleted = quiz.answers.length === quiz.totalQuestions;
      const progressPercentage = Number(((quiz.answers.length * 100) / totalQuestions).toFixed(1));

      return {
        _id: quiz.quizId?.toString() as string,
        isCompleted,
        totalQuestions,
        progressPercentage,
        title: quiz.quizTitle,
      };
    }) || [];

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center flex-wrap mt-6 gap-4">
        <div className="avatar">
          <div className="w-40 rounded-full">
            <img src="/user/mock-user-photo.jpeg" alt="Photo of the user" />
          </div>
        </div>
        <div className="flex-grow text-center">
          <h1 className="text-3xl font-bold" suppressHydrationWarning>
            {userProfile.name}
          </h1>
          <p className="text-telegram-subtitle-text py-2" suppressHydrationWarning>
            Joined {new Date(userProfile.joinedDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="px-2 mt-2">
        <h2 className="font-bold">Passed quizzes</h2>
        <hr className="my-2 bg-telegram-section-separator" />
        <div className="flex flex-col gap-4">
          {completedQuizzes.map((quiz) => {
            return (
              <PassedQuizCard
                key={quiz._id}
                title={quiz.title}
                passRate={quiz.progressPercentage}
                onQuizButtonClick={
                  quiz.progressPercentage === 100
                    ? () => redoQuiz(quiz._id)
                    : () => proceedQuiz(quiz._id)
                }
              />
            );
          })}
        </div>
      </div>
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
