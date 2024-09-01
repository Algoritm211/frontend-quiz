'use client';

import { useTgWebApp } from '@/telegram-web-app';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

import { PassedQuizCard } from './components';

// TODO fix hydration warning
// TODO decide what image to display on user's profile page
export const UserProfile = () => {
  const WebApp = useTgWebApp();
  const router = useRouter();
  const { impactOccurred } = useHapticFeedback();

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };
  if (!WebApp) {
    return <div>Loading...</div>;
  }
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
            {`${WebApp?.initDataUnsafe.user?.first_name} ${WebApp?.initDataUnsafe.user?.last_name}`}
          </h1>
          <p className="text-telegram-subtitle-text py-2" suppressHydrationWarning>
            Joined {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="px-2 mt-2">
        <h2 className="font-bold">Passed quizzes</h2>
        <hr className="my-2 bg-telegram-section-separator" />
        <div className="flex flex-col gap-4">
          <PassedQuizCard title="JS code challenge" passRate={57} />
          <PassedQuizCard title="TypeScript basics" passRate={100} />
        </div>
      </div>
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
