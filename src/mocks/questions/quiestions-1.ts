import { Question } from '@/api-client/schemas';

export const questions1: Question[] = [
  {
    _id: 'questions-1-id-1',
    text: 'What is the output of `1 + 1`?',
    codeSnippet: 'console.log(1 + 1);',
    options: [
      { _id: 'questions-1-id-1-opt-id-1', text: '1', isCorrect: false },
      { _id: 'questions-1-id-1-opt-id-2', text: '2', isCorrect: true },
      { _id: 'questions-1-id-1-opt-id-3', text: '11', isCorrect: false },
    ],
    explanation: 'The `+` operator adds numbers.',
  },
  {
    _id: 'questions-1-id-2',
    text: 'Which of the following is a JavaScript data type?',
    codeSnippet: '',
    options: [
      { _id: 'questions-1-id-2-opt-id-1', text: 'String', isCorrect: true },
      { _id: 'questions-1-id-2-opt-id-2', text: 'Integer', isCorrect: false },
      { _id: 'questions-1-id-2-opt-id-3', text: 'Character', isCorrect: false },
    ],
    explanation: 'JavaScript data types include String, Number, Boolean, Object, and more.',
  },
];
