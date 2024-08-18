import Link from 'next/link';
import React from 'react';

import { Icon } from '@/shared/components';

export const NoPassedQuizzesEmptyState = () => {
  return (
    <div className="flex flex-col items-center">
      <Icon name="empty-icon" className="w-36 h-36" />
      <span className="font-bold mb-1">You haven't passed any quizzes</span>
      <Link
        href="/"
        className="
        btn bg-telegram-button text-telegram-button-text
        hover:text-telegram-button-text
        hover:bg-telegram-button hover:opacity-90"
      >
        Choose one right now
      </Link>
    </div>
  );
};
