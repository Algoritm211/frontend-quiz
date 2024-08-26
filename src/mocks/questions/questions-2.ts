import { Question } from '@/api-client/schemas';

export const questions2: Question[] = [
  {
    _id: 'questions-2-id-1',
    text: 'What does `process.nextTick()` do?',
    codeSnippet: '',
    options: [
      {
        _id: 'questions-2-id-1-opt-id-1',
        text: 'Executes code at the next event loop iteration.',
        isCorrect: true,
      },
      { _id: 'questions-2-id-1-opt-id-2', text: 'Blocks the event loop.', isCorrect: false },
      { _id: 'questions-2-id-1-opt-id-3', text: 'Executes code immediately.', isCorrect: false },
    ],
    explanation:
      '`process.nextTick()` defers the execution of a callback function until the next event loop iteration.',
  },
];
