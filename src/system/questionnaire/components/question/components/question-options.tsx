import type { AnswerOption } from '@/api-client/schemas';
import { clsx } from 'clsx';
import React from 'react';

interface Props {
  answerOptions?: AnswerOption[];
  isAnswered?: boolean;
  selectedOptionId?: string;
  onQuestionAnswer: (optionId: string) => void;
}

export const QuestionOptions: React.FC<Props> = ({
  answerOptions,
  onQuestionAnswer,
  isAnswered,
  selectedOptionId,
}) => {
  return (
    <div className="flex flex-col space-y-4 mb-6">
      {answerOptions?.map((option) => (
        <button
          key={option._id}
          className={clsx(
            'btn btn-outline',
            isAnswered && {
              'btn-active btn-success': selectedOptionId === option._id || option.isCorrect,
              'btn-active btn-error': selectedOptionId === option._id && !option.isCorrect,
            }
          )}
          onClick={() => onQuestionAnswer(option._id)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
