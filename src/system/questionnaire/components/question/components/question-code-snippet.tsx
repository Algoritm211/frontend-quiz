import React from 'react';

export const QuestionCodeSnippet = () => {
  return (
    <div className="mb-6">
      <pre className="bg-neutral text-neutral-content p-4 rounded-md overflow-auto">
        <code>
          {`function test() {
  console.log('Hello, World!');
}
test();`}
        </code>
      </pre>
    </div>
  );
};
