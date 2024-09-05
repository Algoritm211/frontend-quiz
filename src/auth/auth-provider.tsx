'use client';

import { useTgWebApp } from '@/telegram-web-app';
import { useQuery } from '@tanstack/react-query';
import React, { PropsWithChildren, useEffect, useState } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getUserData = async () => {
  const response = await sleep(2000);
  return { ok: true };
};

export const AuthChecker: React.FC<PropsWithChildren> = ({ children }) => {
  const webApp = useTgWebApp();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['data'],
    queryFn: getUserData,
    enabled: false,
  });
  const [isAppVisible, setIsAppVisible] = useState(false);

  useEffect(() => {
    if (webApp) {
      void refetch();
      setIsAppVisible(true);
    }
  }, [webApp]);

  return (
    <div>
      {isLoading || !isAppVisible ? <h1 className="font-bold text-3xl">LOADING</h1> : children}
    </div>
  );
};
