import React from 'react';

interface Props {
  onCardClick?: () => void;
}

export const QuizCard: React.FC<Props> = ({ onCardClick }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl cursor-pointer" onClick={onCardClick}>
      <figure>
        <img src="/quizes/js-quiz.png" className="w-100 object-cover" alt="quiz image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-telegram-text">
          JS code challenge
          <div className="badge badge-secondary">NEW!</div>
        </h2>
        <p>A collection of code questions for EVERY interview</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary badge-outline badge-md">JavaScript</div>
          <div className="badge badge-secondary badge-outline badge-md">Code challenge</div>
        </div>
      </div>
    </div>
  );
};
