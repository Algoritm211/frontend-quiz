'use client';

import { useTgWebApp } from '@/telegram-web-app';

export default function Home() {
  const WebApp = useTgWebApp();
  return (
    <main>
      <h1>[QUIZ_LIST]</h1>
      {/*<pre>{JSON.stringify(WebApp?.initDataUnsafe, null, 2)}</pre>*/}
    </main>
  );
}
