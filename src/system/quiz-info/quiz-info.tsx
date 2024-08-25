'use client';

import { BackButton, MainButton } from '@/telegram-web-app/components';
import { useHapticFeedback, useTgWebApp } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

export const QuizInfo = () => {
  const router = useRouter();
  const WebApp = useTgWebApp();
  const { impactOccurred } = useHapticFeedback();

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  const onStartQuiz = () => {
    impactOccurred('heavy');
    WebApp?.showAlert('You are going to start a quiz');
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">JS code challenge</h1>
      <div className="badge badge-success text-base-100">50% off for full pack</div>
      <figure className="my-4">
        <img
          src="/quizzes/js-quiz-1.png"
          className="w-100 object-cover rounded-xl"
          alt="quiz image"
        />
      </figure>
      <h2 className="text-xl font-bold">Description</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nemo, quod. Earum esse minima
        neque soluta unde! Dolores eos id incidunt quidem repudiandae. Consequatur error expedita
        molestiae quae quisquam saepe unde? Ad architecto atque aut commodi, debitis deserunt, earum
        fugiat ipsa nesciunt nobis optio perferendis, possimus quam quidem quod reiciendis rerum sit
        sunt tempora veritatis! Deleniti doloribus eum fugiat modi optio possimus provident, quo
        ratione rem rerum similique, velit voluptatibus.
      </p>
      <MainButton text="Start Quiz" onClick={onStartQuiz} />
      <BackButton onClick={routeBack} />
    </div>
  );
};
