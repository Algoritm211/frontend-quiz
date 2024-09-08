'use client';

import { useAuth } from '@/auth';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import Link from 'next/link';
import React from 'react';

import { Icon } from '@/shared/components';

export const Header = () => {
  const { impactOccurred } = useHapticFeedback();
  const { loggedUserData } = useAuth();

  return (
    <div className="navbar shadow bg-base-100">
      <div className="navbar-start">
        <label tabIndex={0} htmlFor="menu-drawer" className="btn btn-ghost lg:hidden">
          <Icon name="menu-bars" className="w-6 h-6" />
        </label>
      </div>
      <div className="navbar-center">
        <Link
          onClick={() => impactOccurred('medium')}
          className="btn btn-ghost normal-case text-xl"
          href="/"
        >
          Frontend Quiz
        </Link>
      </div>
      <div className="navbar-end">
        <Link
          href={`/profile/${loggedUserData?.telegramId}`}
          onClick={() => impactOccurred('medium')}
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <Icon name="user" className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};
