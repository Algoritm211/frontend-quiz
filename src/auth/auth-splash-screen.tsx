import React, { PropsWithChildren } from 'react';

import { useAuth } from './auth-provider';

export const AuthSplashScreen: React.FC<PropsWithChildren> = ({ children }) => {
  const { loggedUserData } = useAuth();

  return (
    <div>
      {!loggedUserData ? <h1 className="font-bold text-3xl">LOADING [SPLASH SCREEN]</h1> : children}
    </div>
  );
};
