import { Quiz } from '@/api-client/schemas';
import React from 'react';

interface Props {
  onCardClick?: () => void;
  quiz: Quiz;
}

export const QuizCard: React.FC<Props> = ({ onCardClick, quiz }) => {
  const { title, description, logoUrl } = quiz;
  return (
    <div className="card card-compact bg-base-100 shadow-xl cursor-pointer" onClick={onCardClick}>
      <figure>
        <img src={logoUrl} className="w-100 h-52 object-cover" alt="quiz image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-telegram-text">
          {title}
          <div className="badge badge-secondary">NEW!</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary badge-outline badge-md">JavaScript</div>
          <div className="badge badge-secondary badge-outline badge-md">Code challenge</div>
        </div>
      </div>
    </div>
  );
};
