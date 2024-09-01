import React from 'react';

interface Props {
  code: string;
}

export const QuestionCodeSnippet: React.FC<Props> = ({ code }) => {
  return (
    <div className="mb-6">
      <pre className="bg-neutral text-neutral-content p-4 rounded-md overflow-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};
