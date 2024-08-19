import React from 'react';
import {Icon} from "@/shared/components";

export const PassedQuizCard = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col flex-1'>
        <h2 className=''>JS code challenge</h2>
        <div className='flex items-center gap-2'>
          <progress
            style={{} as React.CSSProperties}
            className="progress w-44 progress-warning" value="38" max="100"
          >
          </progress>
          <span>38%</span>
        </div>
      </div>
      <button className='
        btn bg-telegram-button text-telegram-button-text
        hover:text-telegram-button-text
        hover:bg-telegram-button hover:opacity-90'>
        Continue
        <Icon name='arrow-right' className='w-6 h-6' />
      </button>
    </div>
  );
};
