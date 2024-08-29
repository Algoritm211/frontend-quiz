import React from 'react';

import { Icon } from '@/shared/components';

export const QuestionExplanation = () => {
  return (
    <div className="p-4 bg-gray-100 text-gray-800 rounded-md">
      <div className="flex gap-1 items-center">
        <Icon name="information-circle" className="w-5 h-5 text-blue-500 font-bold" />
        <h2 className="text-lg font-semibold">Explanation:</h2>
      </div>
      <p className="mt-2">
        The function <code>test()</code> logs `Hello, World!` to the console when called. Therefore,
        the correct answer is A.
      </p>
    </div>
  );
};
