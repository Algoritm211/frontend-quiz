import React, { useEffect, useRef } from 'react';

import { Icon } from '@/shared/components';

interface Props {
  isAnswered: boolean;
  explanation: string | undefined;
}

export const QuestionExplanation: React.FC<Props> = ({ isAnswered, explanation }) => {
  const explanationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAnswered && explanationRef.current) {
      explanationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isAnswered]);

  return (
    <React.Fragment>
      {isAnswered && (
        <div ref={explanationRef} className="p-4 bg-gray-100 text-gray-800 rounded-md">
          <div className="flex gap-1 items-center">
            <Icon name="information-circle" className="w-5 h-5 text-blue-500 font-bold" />
            <h2 className="text-lg font-semibold">Explanation:</h2>
          </div>
          <p className="mt-2">
            {explanation || 'Unfortunately no explanation, contact us, we will fix that'}
          </p>
        </div>
      )}
    </React.Fragment>
  );
};
