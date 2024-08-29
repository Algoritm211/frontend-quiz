import React from 'react';

import {
  QuestionExplanation,
  QuestionOptions,
  QuestionCodeSnippet,
  SwitchQuestionPanel,
} from './components';

export const Question = () => {
  return (
    <div className="flex flex-col mx-2 justify-between bg-base-100">
      <h1 className="text-3xl font-bold">Question 1</h1>
      <hr className="my-2" />
      <div className="mb-3">
        <h1 className="text-xl font-bold">What is the output of the following JavaScript code?</h1>
      </div>

      <QuestionCodeSnippet />

      <QuestionOptions />

      <QuestionExplanation />

      <SwitchQuestionPanel />
    </div>
  );
};
