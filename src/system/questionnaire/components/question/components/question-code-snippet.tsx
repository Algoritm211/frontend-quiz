import 'highlight.js/styles/atom-one-dark.min.css';
import React from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

interface Props {
  code: string;
}

export const QuestionCodeSnippet: React.FC<Props> = ({ code }) => {
  return (
    <div className="mb-6">
      <pre className="rounded-md overflow-auto">
        <Markdown rehypePlugins={[rehypeHighlight]}>{code}</Markdown>
      </pre>
    </div>
  );
};
