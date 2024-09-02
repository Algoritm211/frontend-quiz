import { Question } from '@/api-client/schemas';

export const questions1: Question[] = [
  {
    _id: 'questions-1-id-1',
    text: 'What is the output of the following code?',
    codeSnippet: `
\`\`\`js   
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Alexey';
  let age = 22;
}
sayHi();
\`\`\`
`,
    options: [
      { _id: 'questions-1-id-1-opt-id-1', text: 'Alexey and undefined', isCorrect: false },
      { _id: 'questions-1-id-1-opt-id-2', text: 'Alexey and ReferenceError', isCorrect: false },
      { _id: 'questions-1-id-1-opt-id-3', text: 'ReferenceError and 22', isCorrect: false },
      { _id: 'questions-1-id-1-opt-id-4', text: 'undefined and ReferenceError', isCorrect: true },
    ],
    explanation: `
Within the function, we first declare the \`name\` variable with the \`var\` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of \`undefined\`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the \`name\` variable, so it still holds the value of \`undefined\`.


Variables with the \`let\` keyword (and \`const\`) are hoisted, but unlike \`var\`, don't get *initialized*. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a \`ReferenceError\`.
    `,
  },
  {
    _id: 'questions-1-id-2',
    text: 'Which of the following is a JavaScript data type?',
    codeSnippet: `
\`\`\`js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
\`\`\`    
`,
    options: [
      { _id: 'questions-1-id-2-opt-id-1', text: 'orange', isCorrect: false },
      { _id: 'questions-1-id-2-opt-id-2', text: 'purple', isCorrect: false },
      { _id: 'questions-1-id-2-opt-id-3', text: 'green', isCorrect: false },
      { _id: 'questions-1-id-2-opt-id-3', text: 'TypeError', isCorrect: true },
    ],
    explanation: `The \`colorChange\` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since \`freddie\` is an instance of class Chameleon, the function cannot be called upon it. A \`TypeError\` is thrown.
    `,
  },
];
