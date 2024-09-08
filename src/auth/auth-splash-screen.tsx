import React, { PropsWithChildren, useEffect, useState } from 'react';

import { useAuth } from './auth-provider';

const SPLASH_SCREEN_DURATION = 1500; // Duration in milliseconds
const STEPS = 100;
const STEP_DURATION = SPLASH_SCREEN_DURATION / STEPS;

export const AuthSplashScreen: React.FC<PropsWithChildren> = ({ children }) => {
  const { loggedUserData } = useAuth();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, STEP_DURATION);

    return () => clearInterval(timer);
  }, [loggedUserData]);

  return (
    <React.Fragment>
      {!loggedUserData || progress < 100 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-8">Welcome to JS Quiz</h1>

          <img src="/splash-screen/duck.gif" className="w-44 mb-14" alt="duck in glasses gif" />

          <label className="block text-lg mb-1">Loading...</label>
          <progress
            className="progress progress-primary w-48"
            value={progress}
            max="100"
          ></progress>
          <p className="text-center mt-1">{progress}%</p>
        </div>
      ) : (
        children
      )}
    </React.Fragment>
  );
};
