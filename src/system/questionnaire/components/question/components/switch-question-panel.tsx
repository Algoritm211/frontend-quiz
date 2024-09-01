import React from 'react';

import { Icon } from '@/shared/components';

interface Props {
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
}

export const SwitchQuestionPanel: React.FC<Props> = ({
  goToNextQuestion,
  goToPreviousQuestion,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2 p-4 pb-6">
        <button className="btn btn-outline btn-primary" onClick={goToPreviousQuestion}>
          <Icon name="arrow-left" className="w-5 h-5" />
          Previous
        </button>
        <button className="btn btn-primary" onClick={goToNextQuestion}>
          Next
          <Icon name="arrow-right" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
