import { clsx } from 'clsx';
import React from 'react';

import { Icon, tgActiveButton } from '@/shared/components';

interface Props {
  title: string;
  passRate: number;
  onQuizButtonClick: () => void;
}

export const PassedQuizCard: React.FC<Props> = ({ title, passRate, onQuizButtonClick }) => {
  const isQuizPassed = passRate === 100;
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
        <h2 className="">{title}</h2>
        <div className="flex items-center gap-2">
          <progress
            className={clsx('progress w-44', {
              'progress-warning': passRate < 100,
              'progress-success': isQuizPassed,
            })}
            value={passRate}
            max="100"
          ></progress>
          <span>{passRate}%</span>
        </div>
      </div>
      <button className={tgActiveButton({ className: 'w-32' })} onClick={onQuizButtonClick}>
        {isQuizPassed ? 'Redo' : 'Continue'}
        <Icon
          name={isQuizPassed ? 'arrow-path-rounded-square' : 'arrow-right'}
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};
