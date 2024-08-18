'use client';

import { QuizList } from '@/system';
import { useTgWebApp } from '@/telegram-web-app';

export default function MainPage() {
  const WebApp = useTgWebApp();
  return (
    <main>
      <QuizList />
    </main>
  );
}
