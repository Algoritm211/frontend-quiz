import { useQuiz } from '@/system';
import React, { useRef } from 'react';

import {
  QuestionExplanation,
  QuestionOptions,
  QuestionCodeSnippet,
  SwitchQuestionPanel,
} from './components';

export const Question = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    goToNextQuestion,
    goToPreviousQuestion,
    markQuestionAsAnswered,
    totalQuestions,
  } = useQuiz();
  const explanationRef = useRef<HTMLDivElement>(null);

  if (!currentQuestion) {
    return <div>no question</div>;
  }

  const onQuestionAnswer = (optionId: string) => {
    if (!currentQuestion.isAnswered) {
      markQuestionAsAnswered(currentQuestion._id, optionId);
    }

    setTimeout(() => {
      if (explanationRef.current) {
        explanationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col mx-2 justify-between bg-base-100">
      <h1 className="text-3xl font-bold">Question {currentQuestionIndex + 1}</h1>
      {currentQuestion.isAnswered && (
        <span className="font-bold text-sm text-warning">
          You will be able to resubmit your questions after completing the whole questionnaire
        </span>
      )}
      <hr className="my-2" />
      <div className="mb-3">
        <h1 className="text-xl font-bold">{currentQuestion?.text}</h1>
      </div>

      {currentQuestion?.codeSnippet && <QuestionCodeSnippet code={currentQuestion.codeSnippet} />}

      <QuestionOptions
        answerOptions={currentQuestion?.options}
        onQuestionAnswer={onQuestionAnswer}
        selectedOptionId={currentQuestion?.selectedAnswerOptionId}
        isAnswered={currentQuestion?.isAnswered}
      />

      {currentQuestion.isAnswered && (
        <QuestionExplanation explanation={currentQuestion.explanation} />
      )}

      <div ref={explanationRef}></div>

      <SwitchQuestionPanel
        totalQuestions={totalQuestions}
        currentQuestionIndex={currentQuestionIndex}
        goToNextQuestion={goToNextQuestion}
        goToPreviousQuestion={goToPreviousQuestion}
      />
    </div>
  );
};
