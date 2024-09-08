'use client';

import { useCreateUser, useGetUserProfile } from '@/api-client';
import { UserProfile } from '@/api-client/schemas';
import { useTgWebApp } from '@/telegram-web-app';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface AuthContext {
  loggedUserData: UserProfile | undefined | null;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const webApp = useTgWebApp();
  const telegramId = webApp?.initDataUnsafe?.user?.id?.toString() as string;
  const userName = `${webApp?.initDataUnsafe?.user?.first_name} ${webApp?.initDataUnsafe?.user?.last_name}`;
  const [loggedUserData, setLoggedUserData] = useState<UserProfile | null>(null);
  const {
    data: userProfileData,
    isFetched: isUserProfileFetched,
    isError: isUserProfileFetchError,
    refetch: refetchUserProfile,
  } = useGetUserProfile(telegramId, {
    query: {
      enabled: false,
      retry: false,
    },
  });

  const { mutate: createUser } = useCreateUser({
    mutation: {
      onSuccess: (userData) => {
        setLoggedUserData(userData);
      },
    },
  });

  useEffect(() => {
    if (webApp) {
      void refetchUserProfile();
    }
  }, [webApp]);

  useEffect(() => {
    console.log(userProfileData, isUserProfileFetched);
    if (!isUserProfileFetched && !isUserProfileFetchError) return;

    if (userProfileData) {
      setLoggedUserData(userProfileData);
    } else {
      createUser({ data: { telegramId, name: userName } });
    }
  }, [isUserProfileFetched, userProfileData]);

  return <AuthContext.Provider value={{ loggedUserData }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
