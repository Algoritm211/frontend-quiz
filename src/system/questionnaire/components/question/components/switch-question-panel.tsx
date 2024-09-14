import { clsx } from 'clsx';
import { is } from 'css-select';
import React from 'react';

import { Icon, tgActiveButton, tgOutlineButton } from '@/shared/components';

interface Props {
  totalQuestions: number;
  currentQuestionIndex: number;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
}

export const SwitchQuestionPanel: React.FC<Props> = ({
  totalQuestions,
  currentQuestionIndex,
  goToNextQuestion,
  goToPreviousQuestion,
}) => {
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex + 1 === totalQuestions;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg">
      <div
        className={clsx(
          `max-w-md mx-auto grid gap-2 p-4 pb-6`,
          isFirstQuestion || isLastQuestion ? 'grid-cols-1' : 'grid-cols-2'
        )}
      >
        {!isFirstQuestion && (
          <button className={tgOutlineButton()} onClick={goToPreviousQuestion}>
            <Icon name="arrow-left" className="w-5 h-5" />
            Previous
          </button>
        )}
        {!isLastQuestion && (
          <button className={tgActiveButton()} onClick={goToNextQuestion}>
            Next
            <Icon name="arrow-right" className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
