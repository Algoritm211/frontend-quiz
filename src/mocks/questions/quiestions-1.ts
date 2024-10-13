import { Question } from '@/api-client/schemas';

export const questions1: Question[] = [
  {
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
      { text: 'Alexey and undefined', isCorrect: false },
      { text: 'Alexey and ReferenceError', isCorrect: false },
      { text: 'ReferenceError and 22', isCorrect: false },
      { text: 'undefined and ReferenceError', isCorrect: true },
    ],
    explanation: `
Within the function, we first declare the \`name\` variable with the \`var\` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of \`undefined\`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the \`name\` variable, so it still holds the value of \`undefined\`.


Variables with the \`let\` keyword (and \`const\`) are hoisted, but unlike \`var\`, don't get *initialized*. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a \`ReferenceError\`.
    `,
  },
  {
    text: "What's the output?",
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
      { text: 'orange', isCorrect: false },
      { text: 'purple', isCorrect: false },
      { text: 'green', isCorrect: false },
      { text: 'TypeError', isCorrect: true },
    ],
    explanation: `The \`colorChange\` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since \`freddie\` is an instance of class Chameleon, the function cannot be called upon it. A \`TypeError\` is thrown.
    `,
  },
  {
    text: 'What`s the output?',
    codeSnippet: `
  \`\`\`js
  function sum(a, b) {
    return a + b;
  }

  sum(1, '2');
  \`\`\`
      `,
    options: [
      { text: 'NaN', isCorrect: false },
      { text: 'TypeError', isCorrect: false },
      { text: '"12"', isCorrect: false },
      { text: '3', isCorrect: true },
    ],
    explanation: `
  JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

  In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".
      `,
  },
  {
    text: 'What`s the output?',
    codeSnippet: `
  \`\`\`js
  const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };
  \`\`\`
      `,
    options: [
      { text: 'mouse.bird.size is not valid', isCorrect: true },
      { text: 'mouse[bird.size] is not valid', isCorrect: false },
      { text: 'mouse[bird["size"]] is not valid', isCorrect: false },
      { text: 'All of them are valid', isCorrect: false },
    ],
    explanation: `
        In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket \`[\` and keeps going until it finds the closing bracket \`]\`. Only then, it will evaluate the statement.

\`mouse[bird.size]\`: First it evaluates \`bird.size\`, which is \`"small"\`. \`mouse["small"]\` returns \`true\`

However, with dot notation, this doesn't happen. \`mouse\` does not have a key called \`bird\`, which means that \`mouse.bird\` is \`undefined\`. Then, we ask for the \`size\` using dot notation: \`mouse.bird.size\`. Since \`mouse.bird\` is \`undefined\`, we're actually asking \`undefined.size\`. This isn't valid, and will throw an error similar to \`Cannot read property "size" of undefined\`.
        `,
  },
  {
    text: 'What`s the output?',
    codeSnippet: `
  \`\`\`js
  let c = { greeting: 'Hey!' };
  let d;
  
  d = c;
  c.greeting = 'Hello';
  console.log(d.greeting);
  \`\`\`
      `,
    options: [
      { text: 'Hello', isCorrect: true },
      { text: 'Hey!', isCorrect: false },
      { text: 'undefined', isCorrect: false },
      { text: 'ReferenceError', isCorrect: false },
      { text: 'TypeError', isCorrect: false },
    ],
    explanation: `
        In JavaScript, all objects interact by _reference_ when setting them equal to each other.

First, variable \`c\` holds a value to an object. Later, we assign \`d\` with the same reference that \`c\` has to the object.

When you change one object, you change all of them.
        `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  let a = 3;
  let b = new Number(3);
  let c = 3;
  
  console.log(a == b);
  console.log(a === b);
  console.log(b === c);
  \`\`\`
  `,
    options: [
      { text: 'true false true', isCorrect: false },
      { text: 'false false true', isCorrect: false },
      { text: 'true false false', isCorrect: true },
      { text: 'false true true', isCorrect: false },
    ],
    explanation: `
  \`new Number()\` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.
  
  When we use the \`==\` operator (Equality operator), it only checks whether it has the same _value_. They both have the value of \`3\`, so it returns \`true\`.
  
  However, when we use the \`===\` operator (Strict equality operator), both value _and_ type should be the same. It's not: \`new Number()\` is not a number, it's an **object**. Both return \`false\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  let greeting;
  greetign = {}; // Typo!
  console.log(greetign);
  \`\`\`
  `,
    options: [
      { text: '{}', isCorrect: true },
      { text: 'ReferenceError: greetign is not defined', isCorrect: false },
      { text: 'undefined', isCorrect: false },
    ],
    explanation: `
  It logs the object, because we just created an empty object on the global object! When we mistyped \`greeting\` as \`greetign\`, the JS interpreter actually saw this as:
  
  1. \`global.greetign = {}\` in Node.js
  2. \`window.greetign = {}\`, \`frames.greetign = {}\` and \`self.greetign\` in browsers.
  3. \`self.greetign\` in web workers.
  4. \`globalThis.greetign\` in all environments.
  
  In order to avoid this, we can use \`"use strict"\`. This makes sure that you have declared a variable before setting it equal to anything.
  `,
  },
  {
    text: 'What happens when we do this?',
    codeSnippet: `
  \`\`\`js
  function bark() {
    console.log('Woof!');
  }

  bark.animal = 'dog';
  \`\`\`
  `,
    options: [
      { text: 'Nothing, this is totally fine!', isCorrect: true },
      {
        text: 'SyntaxError. You cannot add properties to a function this way.',
        isCorrect: false,
      },
      { text: '"Woof" gets logged.', isCorrect: false },
      { text: 'ReferenceError', isCorrect: false },
    ],
    explanation: `
  This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)
  
  A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  const member = new Person('Lydia', 'Hallie');
  Person.getFullName = function() {
    return \`\${this.firstName} \${this.lastName}\`;
  };

  console.log(member.getFullName());
  \`\`\`
  `,
    options: [
      { text: 'TypeError', isCorrect: true },
      { text: 'SyntaxError', isCorrect: false },
      { text: 'Lydia Hallie', isCorrect: false },
      { text: 'undefined undefined', isCorrect: false },
    ],
    explanation: `
  In JavaScript, functions are objects, and therefore, the method \`getFullName\` gets added to the constructor function object itself. For that reason, we can call \`Person.getFullName()\`, but \`member.getFullName\` throws a \`TypeError\`. 
  
  If you want a method to be available to all object instances, you have to add it to the prototype property:
  
  \`\`\`js
  Person.prototype.getFullName = function() {
    return \`\${this.firstName} \${this.lastName}\`;
  };
  \`\`\`
  `,
  },
  {
    text: 'What are the three phases of event propagation?',
    codeSnippet: '',
    options: [
      { text: 'Target > Capturing > Bubbling', isCorrect: false },
      { text: 'Bubbling > Target > Capturing', isCorrect: false },
      { text: 'Target > Bubbling > Capturing', isCorrect: false },
      { text: 'Capturing > Target > Bubbling', isCorrect: true },
    ],
    explanation: `
  During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.
  `,
  },
  {
    text: 'All objects have prototypes.',
    codeSnippet: '',
    options: [
      { text: 'true', isCorrect: false },
      { text: 'false', isCorrect: true },
    ],
    explanation: `
  All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the \`new\` keyword. The base object has access to some methods and properties, such as \`.toString\`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  let number = 0;
  console.log(number++);
  console.log(++number);
  console.log(number);
  \`\`\`
  `,
    options: [
      { text: '1 1 2', isCorrect: false },
      { text: '1 2 2', isCorrect: false },
      { text: '0 2 2', isCorrect: true },
      { text: '0 1 2', isCorrect: false },
    ],
    explanation: `
  The **postfix** unary operator \`++\`:
  
  1. Returns the value (this returns \`0\`)
  2. Increments the value (number is now \`1\`)
  
  The **prefix** unary operator \`++\`:
  
  1. Increments the value (number is now \`2\`)
  2. Returns the value (this returns \`2\`)
  
  This returns \`0 2 2\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
  }

  const person = 'Lydia';
  const age = 21;

  getPersonInfo\`\${person} is \${age} years old\`;
  \`\`\`
  `,
    options: [
      { text: '"Lydia" 21 ["", " is ", " years old"]', isCorrect: false },
      { text: '["", " is ", " years old"] "Lydia" 21', isCorrect: true },
      { text: '"Lydia" ["", " is ", " years old"] 21', isCorrect: false },
    ],
    explanation: `
  If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(\`Hmm.. You don't have an age I guess\`);
    }
  }

  checkAge({ age: 18 });
  \`\`\`
  `,
    options: [
      { text: 'You are an adult!', isCorrect: false },
      { text: 'You are still an adult.', isCorrect: false },
      { text: "Hmm.. You don't have an age I guess", isCorrect: true },
    ],
    explanation: `
  When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.

  The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

  This is why both \`{ age: 18 } === { age: 18 }\` and \`{ age: 18 } == { age: 18 }\` return \`false\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function getAge(...args) {
    console.log(typeof args);
  }

  getAge(21);
  \`\`\`
  `,
    options: [
      { text: '"number"', isCorrect: false },
      { text: '"array"', isCorrect: false },
      { text: '"object"', isCorrect: true },
      { text: '"NaN"', isCorrect: false },
    ],
    explanation: `
  The rest parameter (\`...args\`) lets us "collect" all remaining arguments into an array. An array is an object, so \`typeof args\` returns \`"object"\`
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function getAge() {
    'use strict';
    age = 21;
    console.log(age);
  }

  getAge();
  \`\`\`
  `,
    options: [
      { text: '21', isCorrect: false },
      { text: 'undefined', isCorrect: false },
      { text: 'ReferenceError', isCorrect: true },
      { text: 'TypeError', isCorrect: false },
    ],
    explanation: `
  With \`"use strict"\`, you can make sure that you don't accidentally declare global variables. We never declared the variable \`age\`, and since we use \`"use strict"\`, it will throw a reference error. If we didn't use \`"use strict"\`, it would have worked, since the property \`age\` would have gotten added to the global object.
  `,
  },
  {
    text: "What's the value of `sum`?",
    codeSnippet: `
  \`\`\`js
  const sum = eval('10*10+5');
  \`\`\`
  `,
    options: [
      { text: '105', isCorrect: true },
      { text: '"105"', isCorrect: false },
      { text: 'TypeError', isCorrect: false },
      { text: '"10*10+5"', isCorrect: false },
    ],
    explanation: `
  \`eval\` evaluates code that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is \`10 * 10 + 5\`. This returns the number \`105\`.
  `,
  },
  {
    text: 'How long is `cool_secret` accessible?',
    codeSnippet: `
  \`\`\`js
  sessionStorage.setItem('cool_secret', 123);
  \`\`\`
  `,
    options: [
      { text: "Forever, the data doesn't get lost.", isCorrect: false },
      { text: 'When the user closes the tab.', isCorrect: true },
      { text: 'When the user closes the entire browser, not only the tab.', isCorrect: false },
      { text: 'When the user shuts off their computer.', isCorrect: false },
    ],
    explanation: `
  The data stored in \`sessionStorage\` is removed after closing the _tab_.

  If you used \`localStorage\`, the data would've been there forever, unless for example \`localStorage.clear()\` is invoked.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  var num = 8;
  var num = 10;

  console.log(num);
  \`\`\`
  `,
    options: [
      { text: '8', isCorrect: false },
      { text: '10', isCorrect: true },
      { text: 'SyntaxError', isCorrect: false },
      { text: 'ReferenceError', isCorrect: false },
    ],
    explanation: `
  With the \`var\` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

  You cannot do this with \`let\` or \`const\` since they're block-scoped and therefore can't be redeclared.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const obj = { 1: 'a', 2: 'b', 3: 'c' };
  const set = new Set([1, 2, 3, 4, 5]);

  obj.hasOwnProperty('1');
  obj.hasOwnProperty(1);
  set.has('1');
  set.has(1);
  \`\`\`
  `,
    options: [
      { text: 'false true false true', isCorrect: false },
      { text: 'false true true true', isCorrect: false },
      { text: 'true true false true', isCorrect: true },
      { text: 'true true true true', isCorrect: false },
    ],
    explanation: `
  All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why \`obj.hasOwnProperty('1')\` also returns true.

  It doesn't work that way for a set. There is no \`'1'\` in our set: \`set.has('1')\` returns \`false\`. It has the numeric type \`1\`, so \`set.has(1)\` returns \`true\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const obj = { a: 'one', b: 'two', a: 'three' };
  console.log(obj);
  \`\`\`
  `,
    options: [
      { text: '{ a: "one", b: "two" }', isCorrect: false },
      { text: '{ b: "two", a: "three" }', isCorrect: false },
      { text: '{ a: "three", b: "two" }', isCorrect: true },
      { text: 'SyntaxError', isCorrect: false },
    ],
    explanation: `
  If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.
  `,
  },
  {
    text: 'The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.',
    options: [
      { text: 'true', isCorrect: true },
      { text: 'false', isCorrect: false },
      { text: 'it depends', isCorrect: false },
    ],
    explanation: `
  The base execution context is the global execution context: it's what's accessible everywhere in your code.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js    
  for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }
  \`\`\`
  `,
    options: [
      { text: '1 2', isCorrect: false },
      { text: '1 2 3', isCorrect: false },
      { text: '1 2 4', isCorrect: true },
      { text: '1 3 4', isCorrect: false },
    ],
    explanation: `
  The \`continue\` statement skips an iteration if a certain condition returns \`true\`. In this case, when \`i === 3\`, the loop skips that iteration, and the values 1, 2, and 4 are logged.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js      
  String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
  };

  const name = 'Lydia';

  console.log(name.giveLydiaPizza());
  \`\`\`
  `,
    options: [
      { text: '"Just give Lydia pizza already!"', isCorrect: true },
      { text: 'TypeError: not a function', isCorrect: false },
      { text: 'SyntaxError', isCorrect: false },
      { text: 'undefined', isCorrect: false },
    ],
    explanation: `
  \`String\` is a built-in constructor to which we can add properties. In this example, we added a method to its prototype. Primitive strings are automatically converted into string objects, so all strings have access to the \`giveLydiaPizza\` method.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js      
  const a = {};
  const b = { key: 'b' };
  const c = { key: 'c' };

  a[b] = 123;
  a[c] = 456;

  console.log(a[b]);
  \`\`\`
  `,
    options: [
      { text: '123', isCorrect: false },
      { text: '456', isCorrect: true },
      { text: 'undefined', isCorrect: false },
      { text: 'ReferenceError', isCorrect: false },
    ],
    explanation: `
  Object keys are automatically converted into strings. When we try to use an object as a key, it gets stringified as \`"[object Object]"\`. Both \`b\` and \`c\` become \`"[object Object]"\` when used as keys, so the last assignment, \`a[c] = 456\`, overwrites \`a[b] = 123\`. Thus, \`a[b]\` returns \`456\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js      
  const foo = () => console.log('First');
  const bar = () => setTimeout(() => console.log('Second'));
  const baz = () => console.log('Third');

  bar();
  foo();
  baz();
  \`\`\`
  `,
    options: [
      { text: 'First Second Third', isCorrect: false },
      { text: 'First Third Second', isCorrect: true },
      { text: 'Second First Third', isCorrect: false },
      { text: 'Second Third First', isCorrect: false },
    ],
    explanation: `
  The \`setTimeout\` function is part of the \`WebAPI\`, and its callback is pushed to the event queue. Even though \`bar\` is called first, the callback is executed last because of JavaScript's event loop. The \`foo\` and \`baz\` functions execute immediately, so the order of logging is \`First\`, \`Third\`, then \`Second\`.
  `,
  },
  {
    text: 'What is the event.target when clicking the button?',
    codeSnippet: `
  \`\`\`html 
  <div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
      <button onclick="console.log('button')">
        Click!
      </button>
    </div>
  </div>
  \`\`\`
  `,
    options: [
      { text: 'Outer div', isCorrect: false },
      { text: 'Inner div', isCorrect: false },
      { text: 'button', isCorrect: true },
      { text: 'An array of all nested elements', isCorrect: false },
    ],
    explanation: `
  The \`event.target\` refers to the deepest nested element that triggered the event. In this case, when you click the button, the target is the \`button\` element. If you want to stop the event from bubbling up to parent elements, you can use \`event.stopPropagation()\`.
  `,
  },
  {
    text: "When you click the paragraph, what's the logged output?",
    codeSnippet: `
  \`\`\`html
  <div onclick="console.log('div')">
    <p onclick="console.log('p')">
      Click here!
    </p>
  </div>
  \`\`\`
  `,
    options: [
      { text: 'p div', isCorrect: true },
      { text: 'div p', isCorrect: false },
      { text: 'p', isCorrect: false },
      { text: 'div', isCorrect: false },
    ],
    explanation: `
  If we click \`p\`, we see two logs: \`p\` and \`div\`. During event propagation, there are 3 phases: capturing, targeting, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set \`useCapture\` to \`true\`). It goes from the deepest nested element outwards.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const person = { name: 'Lydia' };

  function sayHi(age) {
    return \`\${this.name} is \${age}\`;
  }

  console.log(sayHi.call(person, 21));
  console.log(sayHi.bind(person, 21));
  \`\`\`
  `,
    options: [
      { text: 'undefined is 21 Lydia is 21', isCorrect: false },
      { text: 'function function', isCorrect: false },
      { text: 'Lydia is 21 Lydia is 21', isCorrect: false },
      { text: 'Lydia is 21 function', isCorrect: true },
    ],
    explanation: `
  With both, we can pass the object to which we want the \`this\` keyword to refer. However, \`.call\` is also _executed immediately_!

  \`.bind.\` returns a _copy_ of the function, but with a bound context! It is not executed immediately.
  `,
  },
  {
    text: 'Which of these values are falsy?',
    codeSnippet: `
  \`\`\`js
  0;
  new Number(0);
  ('');
  (' ');
  new Boolean(false);
  undefined;
  \`\`\`
  `,
    options: [
      { text: "0, '', undefined", isCorrect: true },
      { text: "0, new Number(0), '', new Boolean(false), undefined", isCorrect: false },
      { text: "0, '', new Boolean(false), undefined", isCorrect: false },
      { text: 'All of them are falsy', isCorrect: false },
    ],
    explanation: `
  There are 8 falsy values:

  - \`undefined\`
  - \`null\`
  - \`NaN\`
  - \`false\`
  - \`''\` (empty string)
  - \`0\`
  - \`-0\`
  - \`0n\` (BigInt(0))

  Function constructors, like \`new Number\` and \`new Boolean\` are truthy.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  console.log(typeof typeof 1);
  \`\`\`
  `,
    options: [
      { text: '"number"', isCorrect: false },
      { text: '"string"', isCorrect: true },
      { text: '"object"', isCorrect: false },
      { text: '"undefined"', isCorrect: false },
    ],
    explanation: `
  \`typeof 1\` returns \`"number"\`.
  \`typeof "number"\` returns \`"string"\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const numbers = [1, 2, 3];
  numbers[10] = 11;
  console.log(numbers);
  \`\`\`
  `,
    options: [
      { text: '[1, 2, 3, null x 7, 11]', isCorrect: false },
      { text: '[1, 2, 3, 11]', isCorrect: false },
      { text: '[1, 2, 3, empty x 7, 11]', isCorrect: true },
      { text: 'SyntaxError', isCorrect: false },
    ],
    explanation: `
  When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of \`undefined\`, but you will see something like:

  \`[1, 2, 3, empty x 7, 11]\`

  depending on where you run it (it's different for every browser, node, etc.).
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  (() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1), (y = 2);
      console.log(x);
    }
    console.log(x);
    console.log(y);
  })();
  \`\`\`
  `,
    options: [
      { text: '1 undefined 2', isCorrect: true },
      { text: 'undefined undefined undefined', isCorrect: false },
      { text: '1 1 2', isCorrect: false },
      { text: '1 undefined undefined', isCorrect: false },
    ],
    explanation: `
  The \`catch\` block receives the argument \`x\`. This is not the same \`x\` as the variable when we pass arguments. This variable \`x\` is block-scoped.

  Later, we set this block-scoped variable equal to \`1\`, and set the value of the variable \`y\`. Now, we log the block-scoped variable \`x\`, which is equal to \`1\`.

  Outside of the \`catch\` block, \`x\` is still \`undefined\`, and \`y\` is \`2\`. When we want to \`console.log(x)\` outside of the \`catch\` block, it returns \`undefined\`, and \`y\` returns \`2\`.
  `,
  },
  {
    text: 'Everything in JavaScript is either a...',
    options: [
      { text: 'primitive or object', isCorrect: true },
      { text: 'function or object', isCorrect: false },
      { text: 'trick question! only objects', isCorrect: false },
      { text: 'number or object', isCorrect: false },
    ],
    explanation: `
  JavaScript only has primitive types and objects.

  Primitive types are \`boolean\`, \`null\`, \`undefined\`, \`bigint\`, \`number\`, \`string\`, and \`symbol\`.

  What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that \`'foo'.toUpperCase()\` evaluates to \`'FOO'\` and does not result in a \`TypeError\`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. \`String\`, and then immediately discard the wrapper after the expression evaluates. All primitives except for \`null\` and \`undefined\` exhibit this behavior.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
  \`\`\`
  `,
    options: [
      { text: '[0, 1, 2, 3, 1, 2]', isCorrect: false },
      { text: '[6, 1, 2]', isCorrect: false },
      { text: '[1, 2, 0, 1, 2, 3]', isCorrect: true },
      { text: '[1, 2, 6]', isCorrect: false },
    ],
    explanation: `
  \`[1, 2]\` is our initial value. This is the value we start with, and the value of the very first \`acc\`. During the first round, \`acc\` is \`[1,2]\`, and \`cur\` is \`[0, 1]\`. We concatenate them, which results in \`[1, 2, 0, 1]\`.

  Then, \`[1, 2, 0, 1]\` is \`acc\` and \`[2, 3]\` is \`cur\`. We concatenate them, and get \`[1, 2, 0, 1, 2, 3]\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  !!null;
  !!'';
  !!1;
  \`\`\`
  `,
    options: [
      { text: 'false true false', isCorrect: false },
      { text: 'false false true', isCorrect: true },
      { text: 'false true true', isCorrect: false },
      { text: 'true true false', isCorrect: false },
    ],
    explanation: `
  \`null\` is falsy. \`!null\` returns \`true\`. \`!true\` returns \`false\`.

  \`""\` is falsy. \`!""\` returns \`true\`. \`!true\` returns \`false\`.

  \`1\` is truthy. \`!1\` returns \`false\`. \`!false\` returns \`true\`.
  `,
  },
  {
    text: 'What does the `setInterval` method return in the browser?',
    codeSnippet: `
  \`\`\`js
  setInterval(() => console.log('Hi'), 1000);
  \`\`\`
  `,
    options: [
      { text: 'a unique id', isCorrect: true },
      { text: 'the amount of milliseconds specified', isCorrect: false },
      { text: 'the passed function', isCorrect: false },
      { text: 'undefined', isCorrect: false },
    ],
    explanation: `
  It returns a unique id. This id can be used to clear that interval with the \`clearInterval()\` function.
  `,
  },
  {
    text: 'What does this return?',
    codeSnippet: `
  \`\`\`js
  [...'Lydia'];
  \`\`\`
  `,
    options: [
      { text: '["L", "y", "d", "i", "a"]', isCorrect: true },
      { text: '["Lydia"]', isCorrect: false },
      { text: '[[], "Lydia"]', isCorrect: false },
      { text: '[["L", "y", "d", "i", "a"]]', isCorrect: false },
    ],
    explanation: `
  A string is an iterable. The spread operator maps every character of an iterable to one element.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function* generator(i) {
    yield i;
    yield i * 2;
  }

  const gen = generator(10);

  console.log(gen.next().value);
  console.log(gen.next().value);
  \`\`\`
  `,
    options: [
      { text: '[0, 10], [10, 20]', isCorrect: false },
      { text: '20, 20', isCorrect: false },
      { text: '10, 20', isCorrect: true },
      { text: '0, 10 and 10, 20', isCorrect: false },
    ],
    explanation: `
  Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a \`yield\` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.

  First, we initialize the generator function with \`i\` equal to \`10\`. We invoke the generator function using the \`next()\` method. The first time we invoke the generator function, \`i\` is equal to \`10\`. It encounters the first \`yield\` keyword: it yields the value of \`i\`. The generator is now "paused", and \`10\` gets logged.

  Then, we invoke the function again with the \`next()\` method. It starts to continue where it stopped previously, still with \`i\` equal to \`10\`. Now, it encounters the next \`yield\` keyword, and yields \`i * 2\`. \`i\` is equal to \`10\`, so it returns \`10 * 2\`, which is \`20\`. This results in \`10, 20\`.
  `,
  },
  {
    text: 'What does this return?',
    codeSnippet: `
  \`\`\`js
  const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
  });

  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
  });

  Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
  \`\`\`
  `,
    options: [
      { text: '"one"', isCorrect: false },
      { text: '"two"', isCorrect: true },
      { text: '"two" "one"', isCorrect: false },
      { text: '"one" "two"', isCorrect: false },
    ],
    explanation: `
  When we pass multiple promises to the \`Promise.race\` method, it resolves/rejects the _first_ promise that resolves/rejects. To the \`setTimeout\` method, we pass a timer: 500ms for the first promise (\`firstPromise\`), and 100ms for the second promise (\`secondPromise\`). This means that the \`secondPromise\` resolves first with the value of \`'two'\`. \`res\` now holds the value of \`'two'\`, which gets logged.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const person = {
    name: 'Lydia',
    age: 21,
  };

  for (const item in person) {
    console.log(item);
  }
  \`\`\`
  `,
    options: [
      { text: '{ name: "Lydia" }, { age: 21 }', isCorrect: false },
      { text: '"name", "age"', isCorrect: true },
      { text: '"Lydia", 21', isCorrect: false },
      { text: '["name", "Lydia"], ["age", 21]', isCorrect: false },
    ],
    explanation: `
  With a \`for-in\` loop, we can iterate through object keys, in this case \`name\` and \`age\`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of \`item\` equal to the current key it’s iterating over. First, \`item\` is equal to \`name\`, and gets logged. Then, \`item\` is equal to \`age\`, which gets logged.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  console.log(3 + 4 + '5');
  \`\`\`
  `,
    options: [
      { text: '"345"', isCorrect: false },
      { text: '"75"', isCorrect: true },
      { text: '12', isCorrect: false },
      { text: '"12"', isCorrect: false },
    ],
    explanation: `
  Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: \`+\`. For addition, the associativity is left-to-right.

  \`3 + 4\` gets evaluated first. This results in the number \`7\`.

  \`7 + '5'\` results in \`"75"\` because of coercion. JavaScript converts the number \`7\` into a string, see question 15. We can concatenate two strings using the \`+\` operator. \`"7" + "5"\` results in \`"75"\`.
  `,
  },
  {
    text: "What's the value of `num`?",
    codeSnippet: `
  \`\`\`js
  const num = parseInt('7*6', 10);
  \`\`\`
  `,
    options: [
      { text: '42', isCorrect: false },
      { text: '"42"', isCorrect: false },
      { text: '7', isCorrect: true },
      { text: 'NaN', isCorrect: false },
    ],
    explanation: `
  Only the first number in the string is returned. Based on the _radix_ (the second argument to specify the base: base 10, hexadecimal, octal, binary, etc.), \`parseInt\` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

  \`*\` is not a valid number. It only parses \`"7"\` into the decimal \`7\`. \`num\` now holds the value of \`7\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  [1, 2, 3].map(num => {
    if (typeof num === 'number') return;
    return num * 2;
  });
  \`\`\`
  `,
    options: [
      { text: '[]', isCorrect: false },
      { text: '[null, null, null]', isCorrect: false },
      { text: '[undefined, undefined, undefined]', isCorrect: true },
      { text: '[ 3 x empty ]', isCorrect: false },
    ],
    explanation: `
  When mapping over the array, the value of \`num\` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement \`typeof num === "number"\` returns \`true\`. The map function creates a new array and inserts the values returned from the function.
  
  However, we don’t return a value. When we don’t return a value from the function, the function returns \`undefined\`. For every element in the array, the function block gets called, so for each element we return \`undefined\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
  }

  const person = { name: 'Sarah' };
  const birthYear = '1997';

  getInfo(person, birthYear);

  console.log(person, birthYear);
  \`\`\`
  `,
    options: [
      { text: "{ name: 'Lydia' }, '1997'", isCorrect: true },
      { text: "{ name: 'Sarah' }, '1998'", isCorrect: false },
      { text: "{ name: 'Lydia' }, '1998'", isCorrect: false },
      { text: "{ name: 'Sarah' }, '1997'", isCorrect: false },
    ],
    explanation: `
  Arguments are passed by _value_, unless their value is an object, then they're passed by _reference_. \`birthYear\` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created.

  The variable \`birthYear\` has a reference to the value \`"1997"\`. The argument \`year\` also has a reference to the value \`"1997"\`, but it's not the same reference. When we update the value of \`year\`, only the \`year\` variable is updated, and \`birthYear\` remains \`"1997"\`.

  The value of \`person\` is an object, and objects are passed by reference. Modifying the \`name\` property of \`member\` (which points to the same object as \`person\`) also changes \`person\`'s \`name\`. So, the \`person.name\` becomes \`'Lydia'\`, while \`birthYear\` remains \`'1997'\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function greeting() {
    throw 'Hello world!';
  }

  function sayHi() {
    try {
      const data = greeting();
      console.log('It worked!', data);
    } catch (e) {
      console.log('Oh no an error:', e);
    }
  }

  sayHi();
  \`\`\`
  `,
    options: [
      { text: 'It worked! Hello world!', isCorrect: false },
      { text: 'Oh no an error: undefined', isCorrect: false },
      { text: 'SyntaxError: can only throw Error objects', isCorrect: false },
      { text: 'Oh no an error: Hello world!', isCorrect: true },
    ],
    explanation: `
  With the \`throw\` statement, we can create custom errors. The \`throw\` statement allows us to throw exceptions that can be a string, number, boolean, or object. In this case, we throw the string \`'Hello world!'\`.

  When the \`greeting\` function throws the string, the \`catch\` block in the \`sayHi\` function is executed. The exception is caught as the variable \`e\`, which now holds the value \`'Hello world!'\`. The message \`'Oh no an error: Hello world!'\` is logged to the console as a result.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function Car() {
    this.make = 'Lamborghini';
    return { make: 'Maserati' };
  }

  const myCar = new Car();
  console.log(myCar.make);
  \`\`\`
  `,
    options: [
      { text: '"Lamborghini"', isCorrect: false },
      { text: '"Maserati"', isCorrect: true },
      { text: 'ReferenceError', isCorrect: false },
      { text: 'TypeError', isCorrect: false },
    ],
    explanation: `
  When a constructor function is called with the \`new\` keyword, it creates an object and sets the \`this\` keyword to refer to that object. By default, if the constructor function doesn't explicitly return anything, it will return the newly created object.

  In this case, the constructor function \`Car\` explicitly returns a new object with \`make\` set to \`"Maserati"\`, which overrides the default behavior. Therefore, when \`new Car()\` is called, the _returned_ object is assigned to \`myCar\`, resulting in the output being \`"Maserati"\` when \`myCar.make\` is accessed.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  (() => {
    let x = (y = 10);
  })();

  console.log(typeof x);
  console.log(typeof y);
  \`\`\`
  `,
    options: [
      { text: '"undefined", "number"', isCorrect: true },
      { text: '"number", "number"', isCorrect: false },
      { text: '"object", "number"', isCorrect: false },
      { text: '"number", "undefined"', isCorrect: false },
    ],
    explanation: `
  \`let x = (y = 10);\` is actually shorthand for:

  \`\`\`js
  y = 10;
  let x = y;
  \`\`\`

  When we set \`y\` equal to \`10\`, we actually add a property \`y\` to the global object (\`window\` in the browser, \`global\` in Node). In a browser, \`window.y\` is now equal to \`10\`.

  Then, we declare a variable \`x\` with the value of \`y\`, which is \`10\`. Variables declared with the \`let\` keyword are _block scoped_, they are only defined within the block they're declared in; the immediately invoked function expression (IIFE) in this case. When we use the \`typeof\` operator, the operand \`x\` is not defined: we are trying to access \`x\` outside of the block it's declared in. This means that \`x\` is not defined. Values who haven't been assigned a value or declared are of type \`"undefined"\`. \`console.log(typeof x)\` returns \`"undefined"\`.

  However, we created a global variable \`y\` when setting \`y\` equal to \`10\`. This value is accessible anywhere in our code. \`y\` is defined, and holds a value of type \`"number"\`. \`console.log(typeof y)\` returns \`"number"\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  Dog.prototype.bark = function() {
    console.log(\`Woof I am \${this.name}\`);
  };

  const pet = new Dog('Mara');

  pet.bark();

  delete Dog.prototype.bark;

  pet.bark();
  \`\`\`
  `,
    options: [
      { text: '"Woof I am Mara", TypeError', isCorrect: true },
      { text: '"Woof I am Mara", "Woof I am Mara"', isCorrect: false },
      { text: '"Woof I am Mara", undefined', isCorrect: false },
      { text: 'TypeError, TypeError', isCorrect: false },
    ],
    explanation: `
  We can delete properties from objects using the \`delete\` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the \`bark\` function is not available anymore on the prototype after \`delete Dog.prototype.bark\`, yet we still try to access it.

  When we try to invoke something that is not a function, a \`TypeError\` is thrown. In this case \`TypeError: pet.bark is not a function\`, since \`pet.bark\` is \`undefined\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const set = new Set([1, 1, 2, 3, 4]);

  console.log(set);
  \`\`\`
  `,
    options: [
      { text: '[1, 1, 2, 3, 4]', isCorrect: false },
      { text: '[1, 2, 3, 4]', isCorrect: false },
      { text: '{1, 1, 2, 3, 4}', isCorrect: false },
      { text: '{1, 2, 3, 4}', isCorrect: true },
    ],
    explanation: `
  The \`Set\` object is a collection of _unique_ values: a value can only occur once in a set.

  We passed the iterable \`[1, 1, 2, 3, 4]\` with a duplicate value \`1\`. Since we cannot have two of the same values in a set, one of them is removed. This results in \`{1, 2, 3, 4}\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  // counter.js
  let counter = 10;
  export default counter;
  \`\`\`
  
  \`\`\`js
  // index.js
  import myCounter from './counter';

  myCounter += 1;

  console.log(myCounter);
  \`\`\`
  `,
    options: [
      { text: '10', isCorrect: false },
      { text: '11', isCorrect: false },
      { text: 'Error', isCorrect: true },
      { text: 'NaN', isCorrect: false },
    ],
    explanation: `
  An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.

  When we try to increment the value of \`myCounter\`, it throws an error: \`myCounter\` is read-only and cannot be modified.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const name = 'Lydia';
  age = 21;

  console.log(delete name);
  console.log(delete age);
  \`\`\`
  `,
    options: [
      { text: 'false, true', isCorrect: true },
      { text: '"Lydia", 21', isCorrect: false },
      { text: 'true, true', isCorrect: false },
      { text: 'undefined, undefined', isCorrect: false },
    ],
    explanation: `
  The \`delete\` operator returns a boolean value: \`true\` on a successful deletion, else it'll return \`false\`. However, variables declared with the \`var\`, \`const\`, or \`let\` keywords cannot be deleted using the \`delete\` operator.

  The \`name\` variable was declared with a \`const\` keyword, so its deletion is not successful: \`false\` is returned. When we set \`age\` equal to \`21\`, we actually added a property called \`age\` to the global object. You can successfully delete properties from objects this way, also the global object, so \`delete age\` returns \`true\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const user = { name: 'Lydia', age: 21 };
  const admin = { admin: true, ...user };

  console.log(admin);
  \`\`\`
  `,
    options: [
      { text: '{ admin: true, user: { name: "Lydia", age: 21 } }', isCorrect: false },
      { text: '{ admin: true, name: "Lydia", age: 21 }', isCorrect: true },
      { text: '{ admin: true, user: ["Lydia", 21] }', isCorrect: false },
      { text: '{ admin: true }', isCorrect: false },
    ],
    explanation: `
  It's possible to combine objects using the spread operator \`...\`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the \`user\` object, and add them to the \`admin\` object. The \`admin\` object now contains the copied key/value pairs, which results in \`{ admin: true, name: "Lydia", age: 21 }\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const person = { name: 'Lydia' };

  Object.defineProperty(person, 'age', { value: 21 });

  console.log(person);
  console.log(Object.keys(person));
  \`\`\`
  `,
    options: [
      { text: '{ name: "Lydia", age: 21 }', isCorrect: false },
      { text: '{ name: "Lydia", age: 21 }', isCorrect: false },
      { text: '{ name: "Lydia"}', isCorrect: false },
      { text: '{ name: "Lydia"}', isCorrect: true },
    ],
    explanation: `
  With the \`defineProperty\` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the \`defineProperty\` method, they are by default _not enumerable_. The \`Object.keys\` method returns all _enumerable_ property names from an object, in this case only \`"name"\`.

  Properties added using the \`defineProperty\` method are immutable by default. You can override this behavior using the \`writable\`, \`configurable\` and \`enumerable\` properties. This way, the \`defineProperty\` method gives you a lot more control over the properties you're adding to an object.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };

  const data = JSON.stringify(settings, ['level', 'health']);
  console.log(data);
  \`\`\`
  `,
    options: [
      { text: '{"level":19, "health":90}', isCorrect: true },
      { text: '{"username": "lydiahallie"}', isCorrect: false },
      { text: '["level", "health"]', isCorrect: false },
      { text: '{"username": "lydiahallie", "level":19, "health":90}', isCorrect: false },
    ],
    explanation: `
  The second argument of \`JSON.stringify\` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

  If the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names \`"level"\` and \`"health"\` are included, \`"username"\` is excluded. \`data\` is now equal to \`"{ "level": 19, "health": 90 }"\`.

  If the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is \`undefined\`, this property is excluded from the JSON string.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  let num = 10;

  const increaseNumber = () => num++;
  const increasePassedNumber = number => number++;

  const num1 = increaseNumber();
  const num2 = increasePassedNumber(num1);

  console.log(num1);
  console.log(num2);
  \`\`\`
  `,
    options: [
      { text: '10, 10', isCorrect: true },
      { text: '10, 11', isCorrect: false },
      { text: '11, 11', isCorrect: false },
      { text: '11, 12', isCorrect: false },
    ],
    explanation: `
  The unary operator \`++\` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of \`num1\` is \`10\`, since the \`increaseNumber\` function first returns the value of \`num\`, which is \`10\`, and only increments the value of \`num\` afterward.

  \`num2\` is \`10\`, since we passed \`num1\` to the \`increasePassedNumber\`. \`number\` is equal to \`10\` (the value of \`num1\`). Again, the unary operator \`++\` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of \`number\` is \`10\`, so \`num2\` is equal to \`10\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const value = { number: 10 };

  const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
  };

  multiply();
  multiply();
  multiply(value);
  multiply(value);
  \`\`\`
  `,
    options: [
      { text: '20, 40, 80, 160', isCorrect: false },
      { text: '20, 40, 20, 40', isCorrect: false },
      { text: '20, 20, 20, 40', isCorrect: true },
      { text: 'NaN, NaN, 20, 40', isCorrect: false },
    ],
    explanation: `
  In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value if no other value has been passed to the function, or if the value of the parameter is \`undefined\`. In this case, we spread the properties of the \`value\` object into a new object, so \`x\` has the default value of \`{ number: 10 }\`.

  The default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the \`multiply\` function the first two times without passing a value: \`x\` has the default value of \`{ number: 10 }\`. We then log the multiplied value of that number, which is \`20\`.

  The third time we invoke \`multiply\`, we do pass an argument: the object called \`value\`. The \`*=\` operator is actually shorthand for \`x.number = x.number * 2\`: we modify the value of \`x.number\`, and log the multiplied value \`20\`.

  The fourth time, we pass the \`value\` object again. \`x.number\` was previously modified to \`20\`, so \`x.number *= 2\` logs \`40\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
  \`\`\`
  `,
    options: [
      { text: '1, 2 and 3, 3 and 6, 4', isCorrect: false },
      { text: '1, 2 and 2, 3 and 3, 4', isCorrect: false },
      { text: '1, undefined and 2, undefined and 3, undefined and 4', isCorrect: false },
      { text: '1, 2 and undefined, 3 and undefined, 4', isCorrect: true },
    ],
    explanation: `
  The first argument that the \`reduce\` method receives is the _accumulator_, \`x\` in this case. The second argument is the _current value_, \`y\`. With the \`reduce\` method, we execute a callback function on every element in the array, which could ultimately result in one single value.

  In this example, we are not returning any values; we are simply logging the values of the accumulator and the current value.

  The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional \`initialValue\` argument to the \`reduce\` method, the accumulator is equal to the first element on the first call.

  On the first call, the accumulator (\`x\`) is \`1\`, and the current value (\`y\`) is \`2\`. We don't return from the callback function; we log the accumulator, and the current values: \`1\` and \`2\` get logged.

  If you don't return a value from a function, it returns \`undefined\`. On the next call, the accumulator is \`undefined\`, and the current value is \`3\`. \`undefined\` and \`3\` get logged.

  On the fourth call, we again don't return from the callback function. The accumulator is again \`undefined\`, and the current value is \`4\`. \`undefined\` and \`4\` get logged.
  `,
  },
  {
    text: 'With which constructor can we successfully extend the `Dog` class?',
    codeSnippet: `
  \`\`\`js
  class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  class Labrador extends Dog {
    // 1
    constructor(name, size) {
      this.size = size;
    }
    // 2
    constructor(name, size) {
      super(name);
      this.size = size;
    }
    // 3
    constructor(size) {
      super(name);
      this.size = size;
    }
    // 4
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };
  \`\`\`
  `,
    options: [
      { text: '1', isCorrect: false },
      { text: '2', isCorrect: true },
      { text: '3', isCorrect: false },
      { text: '4', isCorrect: false },
    ],
    explanation: `
  In a derived class, you cannot access the \`this\` keyword before calling \`super\`. If you try to do that, it will throw a ReferenceError: constructors 1 and 4 would throw a reference error.

  With the \`super\` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the \`name\` argument, so we need to pass \`name\` to \`super\`.

  The \`Labrador\` class receives two arguments, \`name\` since it extends \`Dog\`, and \`size\` as an extra property on the \`Labrador\` class. They both need to be passed to the constructor function on \`Labrador\`, which is done correctly using constructor 2.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  // index.js
  console.log('running index.js');
  import { sum } from './sum.js';
  console.log(sum(1, 2));

  // sum.js
  console.log('running sum.js');
  export const sum = (a, b) => a + b;
  \`\`\`
  `,
    options: [
      { text: 'A: `running index.js`, `running sum.js`, `3`', isCorrect: true },
      { text: 'B: `running sum.js`, `running index.js`, `3`', isCorrect: false },
      { text: 'C: `running sum.js`, `3`, `running index.js`', isCorrect: false },
      { text: 'D: `running index.js`, `undefined`, `running sum.js`', isCorrect: false },
    ],
    explanation: `
  When we import a module, all the imported files are _hoisted_ to the top of the file. This means that the imported file runs _first_ before the rest of the code in the file where the import is made. 

  In this case, \`sum.js\` runs first, so \`'running sum.js'\` gets logged first. After that, the code in \`index.js\` runs, logging \`'running index.js'\`. Finally, the \`sum(1, 2)\` function is invoked, and \`3\` is logged.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  console.log(Number(2) === Number(2));
  console.log(Boolean(false) === Boolean(false));
  console.log(Symbol('foo') === Symbol('foo'));
  \`\`\`
  `,
    options: [
      { text: 'A: `true`, `true`, `false`', isCorrect: true },
      { text: 'B: `false`, `true`, `false`', isCorrect: false },
      { text: 'C: `true`, `false`, `true`', isCorrect: false },
      { text: 'D: `true`, `true`, `true`', isCorrect: false },
    ],
    explanation: `
  The first two comparisons, \`Number(2) === Number(2)\` and \`Boolean(false) === Boolean(false)\`, both return \`true\` because they are comparing primitive values (numbers and booleans), which are equal when their values are the same.

  However, \`Symbol('foo') === Symbol('foo')\` returns \`false\`. This is because every time you create a Symbol, even if it has the same description, it is a unique and different symbol. Symbols are always unique, so two symbols with the same description are not equal.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const name = 'Lydia Hallie';
  console.log(name.padStart(13));
  console.log(name.padStart(2));
  \`\`\`
  `,
    options: [
      { text: `"Lydia Hallie", "Lydia Hallie"`, isCorrect: false },
      {
        text: `" Lydia Hallie", " Lydia Hallie" ( "[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie" )`,
        isCorrect: false,
      },
      {
        text: `" Lydia Hallie", "Lydia Hallie" ( "[1x whitespace]Lydia Hallie", "Lydia Hallie" )`,
        isCorrect: true,
      },
      { text: `"Lydia Hallie", "Lyd"`, isCorrect: false },
    ],
    explanation: `
  With the \`padStart\` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string \`"Lydia Hallie"\` has a length of \`12\`. \`name.padStart(13)\` inserts 1 space at the start of the string, because 12 + 1 is 13.

  If the argument passed to the \`padStart\` method is smaller than the length of the string, no padding will be added. Hence, \`name.padStart(2)\` doesn't modify the string.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  console.log('🥑' + '💻');
  \`\`\`
  `,
    options: [
      { text: `"🥑💻"`, isCorrect: true },
      { text: `257548`, isCorrect: false },
      { text: `A string containing their code points`, isCorrect: false },
      { text: `Error`, isCorrect: false },
    ],
    explanation: `
  With the \`+\` operator, you can concatenate strings. In this case, we are concatenating the string \`"🥑"\` with the string \`"💻"\`, resulting in \`"🥑💻"\`.
  `,
  },
  {
    text: 'How can we log the values that are commented out after the console.log statement?',
    codeSnippet: `
  \`\`\`js
  function* startGame() {
    const answer = yield 'Do you love JavaScript?';
    if (answer !== 'Yes') {
      return "Oh wow... Guess we're done here";
    }
    return 'JavaScript loves you back ❤️';
  }

  const game = startGame();
  console.log(/* 1 */); // Do you love JavaScript?
  console.log(/* 2 */); // JavaScript loves you back ❤️
  \`\`\`
  `,
    options: [
      { text: `game.next("Yes").value and game.next().value`, isCorrect: false },
      { text: `game.next.value("Yes") and game.next.value()`, isCorrect: false },
      { text: `game.next().value and game.next("Yes").value`, isCorrect: true },
      { text: `game.next.value() and game.next.value("Yes")`, isCorrect: false },
    ],
    explanation: `
  A generator function "pauses" its execution when it sees the \`yield\` keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling \`game.next().value\`.

  Every line is executed until it finds the first \`yield\` keyword. This means the variable \`answer\` is not defined yet!

  When we call \`game.next("Yes").value\`, the previous \`yield\` is replaced with the value passed to the \`next()\` function, which is \`"Yes"\`. The condition evaluates to false, so \`"JavaScript loves you back ❤️"\` gets logged.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  console.log(String.raw\`Hello\\nworld\`);
  \`\`\`
  `,
    options: [
      { text: `Hello world!`, isCorrect: false },
      { text: `Hello\nworld`, isCorrect: true },
      { text: '`Hello`, `world`', isCorrect: false },
      { text: '`Hello\\n`, `world`', isCorrect: false },
    ],
    explanation: `
  \`String.raw\` returns a string where escape sequences (such as \`\\n\`, \`\\t\`, etc.) are ignored. This means that the backslash character is treated as a literal character in the string.

  In this case, \`String.raw\` logs \`"Hello\\nworld"\` without interpreting the \`\\n\` as a newline character. The output is the string as it was written, including the escape sequence \`\\n\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  async function getData() {
    return await Promise.resolve('I made it!');
  }

  const data = getData();
  console.log(data);
  \`\`\`
  `,
    options: [
      { text: `"I made it!"`, isCorrect: false },
      { text: `Promise {<resolved>: "I made it!"}`, isCorrect: false },
      { text: `Promise {<pending>}`, isCorrect: true },
      { text: `undefined`, isCorrect: false },
    ],
    explanation: `
  An async function always returns a promise. When calling \`getData()\`, a pending promise is returned, which is assigned to \`data\`. The \`await\` keyword ensures that the promise resolves before the value is returned, but this does not affect the immediate return of the function itself.

  To access the resolved value, you would need to use the \`.then()\` method on the returned promise, like this:

  \`data.then(res => console.log(res));\`

  This would log \`"I made it!"\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function addToList(item, list) {
    return list.push(item);
  }

  const result = addToList('apple', ['banana']);
  console.log(result);
  \`\`\`
  `,
    options: [
      { text: `['apple', 'banana']`, isCorrect: false },
      { text: `2`, isCorrect: true },
      { text: `true`, isCorrect: false },
      { text: `undefined`, isCorrect: false },
    ],
    explanation: `
  The \`.push()\` method adds an item to the end of an array and returns the new length of the array. In this case, the original array \`['banana']\` had a length of \`1\`. After pushing \`'apple'\`, the array's length becomes \`2\`. Therefore, the value logged is \`2\`.

  If you wanted the modified array instead, you could return \`list\` after the \`.push()\` call.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const box = { x: 10, y: 20 };

  Object.freeze(box);

  const shape = box;
  shape.x = 100;

  console.log(shape);
  \`\`\`
  `,
    options: [
      { text: `{ x: 100, y: 20 }`, isCorrect: false },
      { text: `{ x: 10, y: 20 }`, isCorrect: true },
      { text: `{ x: 100 }`, isCorrect: false },
      { text: `ReferenceError`, isCorrect: false },
    ],
    explanation: `
  The \`Object.freeze\` method prevents modifications to an object, making it immutable. In this case, \`box\` is frozen, so when we try to modify \`shape.x\`, which refers to the same object as \`box\`, the modification fails silently (in non-strict mode) or throws an error (in strict mode).

  Therefore, \`shape\` remains unchanged and logs \`{ x: 10, y: 20 }\`.
  `,
  },
  {
    text: 'Is this a pure function?',
    codeSnippet: `
  \`\`\`js
  function sum(a, b) {
    return a + b;
  }
  \`\`\`
  `,
    options: [
      { text: `Yes`, isCorrect: true },
      { text: `No`, isCorrect: false },
    ],
    explanation: `
  A pure function is defined as a function that always produces the same output for the same input and has no side effects. The \`sum\` function meets these criteria: it always returns the same result when given the same arguments and does not modify any external state. Thus, it is a pure function.
  `,
  },
  {
    text: 'What is the output?',
    codeSnippet: `
  \`\`\`js
  const add = () => {
    const cache = {};
    return num => {
      if (num in cache) {
        return \`From cache! \${cache[num]}\`;
      } else {
        const result = num + 10;
        cache[num] = result;
        return \`Calculated! \${result}\`;
      }
    };
  };
  
  const addFunction = add();
  console.log(addFunction(10));
  console.log(addFunction(10));
  console.log(addFunction(5 * 2));
  \`\`\`
  `,
    options: [
      { text: `Calculated! 20\nCalculated! 20\nCalculated! 20`, isCorrect: false },
      { text: `Calculated! 20\nFrom cache! 20\nCalculated! 20`, isCorrect: false },
      { text: `Calculated! 20\nFrom cache! 20\nFrom cache! 20`, isCorrect: true },
      { text: `Calculated! 20\nFrom cache! 20\nError`, isCorrect: false },
    ],
    explanation: `
  The \`add\` function is a memoized function that caches results to optimize performance. When you call \`addFunction(10)\) the first time, it calculates and caches the result as \`20\`. The second call with \`10\` retrieves the value from the cache, logging \`From cache! 20\`. The third call with \`5 * 2\` evaluates to \`10\`, which also retrieves the cached value, leading to another \`From cache! 20\` log.
  `,
  },
  {
    text: 'What is the output?',
    codeSnippet: `
  \`\`\`js
  const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];
  
  for (let item in myLifeSummedUp) {
    console.log(item);
  }
  
  for (let item of myLifeSummedUp) {
    console.log(item);
  }
  \`\`\`
  `,
    options: [
      { text: `0 1 2 3 ☕ 💻 🍷 🍫`, isCorrect: true },
      { text: `☕ 💻 🍷 🍫 ☕ 💻 🍷 🍫`, isCorrect: false },
      { text: `☕ 💻 🍷 🍫 0 1 2 3`, isCorrect: false },
      { text: `0 1 2 3 {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`, isCorrect: false },
    ],
    explanation: `
  With a \`for-in\` loop, we iterate over enumerable properties, which for an array are its indexes. Thus, it logs \`0\`, \`1\`, \`2\`, and \`3\`. In contrast, the \`for-of\` loop iterates over the elements of the array, logging \`☕\`, \`💻\`, \`🍷\`, and \`🍫\`. 
  `,
  },
  {
    text: 'What is the output?',
    codeSnippet: `
  \`\`\`js
  const list = [1 + 2, 1 * 2, 1 / 2];
  console.log(list);
  \`\`\`
  `,
    options: [
      { text: `["1 + 2", "1 * 2", "1 / 2"]`, isCorrect: false },
      { text: `["12", 2, 0.5]`, isCorrect: false },
      { text: `[3, 2, 0.5]`, isCorrect: true },
      { text: `[1, 1, 1]`, isCorrect: false },
    ],
    explanation: `
  The array \`list\` is created with the results of the expressions. \`1 + 2\` evaluates to \`3\`, \`1 * 2\` evaluates to \`2\`, and \`1 / 2\` evaluates to \`0.5\`. Therefore, \`console.log(list)\` outputs \`[3, 2, 0.5]\`.
  `,
  },
  {
    text: 'What is the output?',
    codeSnippet: `
  \`\`\`js
  function sayHi(name) {
    return \`Hi there, \${name}\`;
  }

  console.log(sayHi());
  \`\`\`
  `,
    options: [
      { text: `Hi there,`, isCorrect: false },
      { text: `Hi there, undefined`, isCorrect: true },
      { text: `Hi there, null`, isCorrect: false },
      { text: `ReferenceError`, isCorrect: false },
    ],
    explanation: `
  When the function \`sayHi\` is called without an argument, the parameter \`name\` is \`undefined\` by default. Therefore, the output is \`Hi there, undefined\`. If you want to provide a default value, you can use default parameters, such as \`function sayHi(name = "Lydia") { ... }\`.
  `,
  },
  {
    text: 'What is the output?',
    codeSnippet: `
  \`\`\`js
  var status = '😎';

  setTimeout(() => {
    const status = '😍';

    const data = {
      status: '🥑',
      getStatus() {
        return this.status;
      },
    };

    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
  }, 0);
  \`\`\`
  `,
    options: [
      { text: `"🥑" and "😍"`, isCorrect: false },
      { text: `"🥑" and "😎"`, isCorrect: true },
      { text: `"😍" and "😎"`, isCorrect: false },
      { text: `"😎" and "😎"`, isCorrect: false },
    ],
    explanation: `
  In the first \`console.log\`, the method \`getStatus\` refers to the \`data\` object, so \`this.status\` accesses the \`status\` property of \`data\`, which is \`"🥑"\`. 

  In the second \`console.log\`, the \`call\` method is used to invoke \`getStatus\`, but it sets \`this\` to the global context where the variable \`status\` has the value \`"😎"\`. Thus, the output is \`"🥑"\` and \`"😎"\`.
  `,
  },
  {
    text: 'What is the output?',
    codeSnippet: `
  \`\`\`js
  const person = {
    name: 'Lydia',
    age: 21,
  };

  let city = person.city;
  city = 'Amsterdam';

  console.log(person);
  \`\`\`
  `,
    options: [
      { text: `{ name: "Lydia", age: 21 }`, isCorrect: true },
      { text: `{ name: "Lydia", age: 21, city: "Amsterdam" }`, isCorrect: false },
      { text: `{ name: "Lydia", age: 21, city: undefined }`, isCorrect: false },
      { text: `"Amsterdam"`, isCorrect: false },
    ],
    explanation: `
  The variable \`city\` is assigned the value of \`person.city\`, which is \`undefined\` because there is no \`city\` property in the \`person\` object. 

  Changing \`city\` to \`"Amsterdam"\` does not affect the \`person\` object because \`city\` is just a separate variable. Therefore, when logging \`person\`, it remains unchanged: \`{ name: "Lydia", age: 21 }\`.
  `,
  },
  {
    text: 'What is the output?',
    codeSnippet: `
  \`\`\`js
  function checkAge(age) {
    if (age < 18) {
      const message = "Sorry, you're too young.";
    } else {
      const message = "Yay! You're old enough!";
    }

    return message;
  }

  console.log(checkAge(21));
  \`\`\`
  `,
    options: [
      { text: `"Sorry, you're too young."`, isCorrect: false },
      { text: `"Yay! You're old enough!"`, isCorrect: false },
      { text: `ReferenceError`, isCorrect: true },
      { text: `undefined`, isCorrect: false },
    ],
    explanation: `
  The variables declared with \`const\` inside the if and else blocks are block-scoped, meaning they cannot be accessed outside of those blocks. 

  Since the \`message\` variable is not defined in the outer scope, trying to return it from the function results in a \`ReferenceError\`.
  `,
  },
  {
    text: 'What kind of information would get logged?',
    codeSnippet: `
  \`\`\`js
  fetch('https://www.website.com/api/user/1')
    .then(res => res.json())
    .then(res => console.log(res));
  \`\`\`
  `,
    options: [
      { text: 'The result of the `fetch` method.', isCorrect: false },
      { text: 'The result of the second invocation of the `fetch` method.', isCorrect: false },
      { text: 'The result of the callback in the previous `.then()`.', isCorrect: true },
      { text: 'It would always be undefined.', isCorrect: false },
    ],
    explanation: `
  In this example, the value of \`res\` in the second \`.then\` is the result returned from the previous \`.then()\` callback.

  The first \`.then()\` handles the response by parsing it as JSON with \`res.json()\`, and the result is passed to the second \`.then()\`. The second \`.then()\` logs the parsed response to the console.
  `,
  },
  {
    text: 'Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?',
    codeSnippet: `
  \`\`\`js
  function getName(name) {
    const hasName = //
  }
  \`\`\`
  `,
    options: [
      { text: '!!name', isCorrect: true },
      { text: 'name', isCorrect: false },
      { text: 'new Boolean(name)', isCorrect: false },
      { text: 'name.length', isCorrect: false },
    ],
    explanation: `
  The expression \`!!name\` is a common way to convert a value to a boolean in JavaScript. The first \`!\` negates the value, and the second \`!\` negates it back to its original truthy or falsy state, resulting in \`true\` or \`false\`.

  - \`name\` would assign the value of \`name\` directly, not necessarily a boolean.
  - \`new Boolean(name)\` creates a Boolean object, not a primitive boolean.
  - \`name.length\` would return the length of the string, not a boolean.

  So, \`!!name\` is the correct way to ensure a boolean value.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  console.log('I want pizza'[0]);
  \`\`\`
  `,
    options: [
      { text: `""`, isCorrect: false },
      { text: `"I"`, isCorrect: true },
      { text: 'SyntaxError', isCorrect: false },
      { text: 'undefined', isCorrect: false },
    ],
    explanation: `
  In JavaScript, you can access a character at a specific index in a string using bracket notation. Strings are zero-indexed, meaning the first character has an index of 0. In this case, the string is \`'I want pizza'\`, and the character at index 0 is \`'I'\`, which gets logged.

  If you were working with older versions of Internet Explorer (such as IE7 and below), you would use the \`.charAt()\` method instead of bracket notation.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function sum(num1, num2 = num1) {
    console.log(num1 + num2);
  }

  sum(10);
  \`\`\`
  `,
    options: [
      { text: 'NaN', isCorrect: false },
      { text: '20', isCorrect: true },
      { text: 'ReferenceError', isCorrect: false },
      { text: 'undefined', isCorrect: false },
    ],
    explanation: `
  In this example, the function \`sum\` is called with a single argument, \`10\`. The second parameter \`num2\` has a default value that is set to the first parameter, \`num1\`. When \`sum(10)\` is called, \`num1\` is \`10\` and since \`num2\` is not provided, it defaults to \`10\` as well.

  Therefore, \`num1 + num2\` results in \`20\`, and that's what gets logged.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  // module.js
  export default () => 'Hello world';
  export const name = 'Lydia';

  // index.js
  import * as data from './module';

  console.log(data);
  \`\`\`
  `,
    options: [
      { text: "{ default: function default(), name: 'Lydia' }", isCorrect: true },
      { text: '{ default: function default() }', isCorrect: false },
      { text: "{ default: 'Hello world', name: 'Lydia' }", isCorrect: false },
      { text: 'Global object of module.js', isCorrect: false },
    ],
    explanation: `
  When using \`import * as data\`, all exports from \`module.js\` are imported into an object called \`data\`. This includes the default export and any named exports. The default export is stored under the \`default\` property, and named exports are stored with their respective names. Thus, the \`data\` object contains:

  \`\`\`
  {
    default: function default(),
    name: 'Lydia'
  }
  \`\`\`
  This is why the correct answer is \`{ default: function default(), name: 'Lydia' }\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  const member = new Person('John');
  console.log(typeof member);
  \`\`\`
  `,
    options: [
      { text: '"class"', isCorrect: false },
      { text: '"function"', isCorrect: false },
      { text: '"object"', isCorrect: true },
      { text: '"string"', isCorrect: false },
    ],
    explanation: `
  When using the \`class\` keyword in JavaScript, it is just syntactical sugar for a function constructor. When you create an instance of the \`Person\` class with the \`new\` keyword, you are essentially creating an object. Therefore, when you use \`typeof member\`, it will return \`"object"\`, as the instance of \`Person\` is an object.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  let newList = [1, 2, 3].push(4);

  console.log(newList.push(5));
  \`\`\`
  `,
    options: [
      { text: '[1, 2, 3, 4, 5]', isCorrect: false },
      { text: '[1, 2, 3, 5]', isCorrect: false },
      { text: '[1, 2, 3, 4]', isCorrect: false },
      { text: 'Error', isCorrect: true },
    ],
    explanation: `
  The \`.push\` method returns the new length of the array, not the array itself. When you execute \`[1, 2, 3].push(4)\`, it returns \`4\`, which is the new length of the array. When you try to call \`.push(5)\` on \`newList\`, which is a number \`4\`, it results in a TypeError since \`push\` is not a method on numbers.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function giveLydiaPizza() {
    return 'Here is pizza!';
  }

  const giveLydiaChocolate = () =>
    "Here's chocolate... now go hit the gym already.";

  console.log(giveLydiaPizza.prototype);
  console.log(giveLydiaChocolate.prototype);
  \`\`\`
  `,
    options: [
      { text: '{ constructor: ...} { constructor: ...}', isCorrect: false },
      { text: '{} { constructor: ...}', isCorrect: false },
      { text: '{ constructor: ...} {}', isCorrect: false },
      { text: '{ constructor: ...} undefined', isCorrect: true },
    ],
    explanation: `
  Regular functions, such as \`giveLydiaPizza\`, have a \`prototype\` property, which is an object with a \`constructor\` property. Arrow functions, like \`giveLydiaChocolate\`, do not have a \`prototype\` property, so accessing \`giveLydiaChocolate.prototype\` returns \`undefined\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit];
  }

  getItems(["banana", "apple"], "pear", "orange");
  \`\`\`
  `,
    options: [
      { text: '["banana", "apple", "pear", "orange"]', isCorrect: false },
      { text: '[["banana", "apple"], "pear", "orange"]', isCorrect: false },
      { text: '["banana", "apple", ["pear"], "orange"]', isCorrect: false },
      { text: 'SyntaxError', isCorrect: true },
    ],
    explanation: `
  The \`...args\` is a rest parameter, which collects all remaining arguments into an array. **Rest parameters can only be the last parameter**. In this example, the rest parameter \`...args\` is not the last parameter, causing a syntax error.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function nums(a, b) {
    if (a > b) console.log('a is bigger');
    else console.log('b is bigger');
    return
    a + b;
  }

  console.log(nums(4, 2));
  console.log(nums(1, 2));
  \`\`\`
  `,
    options: [
      { text: 'a is bigger, 6 and b is bigger, 3', isCorrect: false },
      { text: 'a is bigger, undefined and b is bigger, undefined', isCorrect: true },
      { text: 'undefined and undefined', isCorrect: false },
      { text: 'SyntaxError', isCorrect: false },
    ],
    explanation: `
  In JavaScript, **Automatic Semicolon Insertion** (ASI) adds semicolons after certain statements, including \`return\`. Since the \`a + b\` expression is on a new line after the \`return\`, ASI adds a semicolon after \`return\`, making it act like:

  \`\`\`
  return;
  a + b;
  \`\`\`

  As a result, \`a + b\` is never executed, and the function returns \`undefined\`. Both calls log \`a is bigger\` and \`b is bigger\`, followed by \`undefined\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  class Person {
    constructor() {
      this.name = 'Lydia';
    }
  }

  Person = class AnotherPerson {
    constructor() {
      this.name = 'Sarah';
    }
  };

  const member = new Person();
  console.log(member.name);
  \`\`\`
  `,
    options: [
      { text: '"Lydia"', isCorrect: false },
      { text: '"Sarah"', isCorrect: true },
      { text: 'Error: cannot redeclare Person', isCorrect: false },
      { text: 'SyntaxError', isCorrect: false },
    ],
    explanation: `
  We can reassign class declarations in JavaScript. In this case, the \`Person\` class is reassigned to \`AnotherPerson\`. When we create a new instance of \`Person\`, it now refers to the \`AnotherPerson\` class, which has a \`name\` property set to \`'Sarah'\`. Thus, \`member.name\` logs \`'Sarah'\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const info = {
    [Symbol('a')]: 'b',
  };

  console.log(info);
  console.log(Object.keys(info));
  \`\`\`
  `,
    options: [
      { text: "{Symbol('a'): 'b'} and ['{Symbol('a')']", isCorrect: false },
      { text: '{} and []', isCorrect: false },
      { text: "{ a: 'b' } and ['a']", isCorrect: false },
      { text: "{Symbol('a'): 'b'} and []", isCorrect: true },
    ],
    explanation: `
  Symbols in JavaScript are not enumerable. When we use the \`Object.keys\` method, it only returns enumerable properties. Since the symbol key is non-enumerable, \`Object.keys(info)\` returns an empty array.

  However, when logging the entire object with \`console.log(info)\`, the object and all of its properties—including those with symbol keys—are displayed.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const getList = ([x, ...y]) => [x, y];
  const getUser = user => { name: user.name, age: user.age };

  const list = [1, 2, 3, 4];
  const user = { name: "Lydia", age: 21 };

  console.log(getList(list));
  console.log(getUser(user));
  \`\`\`
  `,
    options: [
      { text: '[1, [2, 3, 4]] and SyntaxError', isCorrect: true },
      { text: "[1, [2, 3, 4]] and { name: 'Lydia', age: 21 }", isCorrect: false },
      { text: "[1, 2, 3, 4] and { name: 'Lydia', age: 21 }", isCorrect: false },
      { text: "Error and { name: 'Lydia', age: 21 }", isCorrect: false },
    ],
    explanation: `
  The \`getList\` function destructures the array passed into it. The first element of the array is assigned to \`x\`, and the rest of the elements are grouped into \`y\`. So, when calling \`getList(list)\`, it logs \`[1, [2, 3, 4]]\`.

  The \`getUser\` function tries to return an object, but it lacks parentheses around the object. In JavaScript, if you use curly braces directly after an arrow function, they are treated as a block, not an object literal. This results in a \`SyntaxError\`. To fix it, the function should be written as \`const getUser = user => ({ name: user.name, age: user.age })\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const name = 'Lydia';

  console.log(name());
  \`\`\`
  `,
    options: [
      { text: 'SyntaxError', isCorrect: false },
      { text: 'ReferenceError', isCorrect: false },
      { text: 'TypeError', isCorrect: true },
      { text: 'undefined', isCorrect: false },
    ],
    explanation: `
  The variable \`name\` holds the value of a string, which is not a function. When you try to invoke it as a function with \`name()\`, a TypeError is thrown because a string cannot be called like a function.

  A \`TypeError\` occurs when a value is not of the expected type. In this case, JavaScript expected \`name\` to be a function since you're invoking it, but it's actually a string.

  Other errors like \`SyntaxError\` or \`ReferenceError\` would occur in different situations, such as writing invalid JavaScript syntax or referencing an undefined variable, respectively.
  `,
  },
  {
    text: "What's the value of output?",
    codeSnippet: `
  \`\`\`js
  const output = \`\${[] && 'Im'}possible!
  You should\${'' && \`n't\`} see a therapist after so much JavaScript lol\`;
  \`\`\`
  `,
    options: [
      {
        text: 'possible! You should see a therapist after so much JavaScript lol',
        isCorrect: false,
      },
      {
        text: 'Impossible! You should see a therapist after so much JavaScript lol',
        isCorrect: true,
      },
      {
        text: "possible! You shouldn't see a therapist after so much JavaScript lol",
        isCorrect: false,
      },
      {
        text: "Impossible! You shouldn't see a therapist after so much JavaScript lol",
        isCorrect: false,
      },
    ],
    explanation: `
  \`[]\` is a truthy value. When using the \`&&\` operator, the right-hand value will be returned if the left-hand value is truthy. Since \`[]\` is truthy, \`'Im'\` gets returned, making the output start with \`Impossible!\`.

  On the other hand, \`''\` is a falsy value, so nothing is returned for the second \`&&\` condition, meaning \`n't\` doesn't get added to the output. This results in the string:

  \`Impossible! You should see a therapist after so much JavaScript lol\`
  `,
  },
  {
    text: "What's the value of output?",
    codeSnippet: `
  \`\`\`js
  const one = false || {} || null;
  const two = null || false || '';
  const three = [] || 0 || true;

  console.log(one, two, three);
  \`\`\`
  `,
    options: [
      { text: 'false null []', isCorrect: false },
      { text: "null '' true", isCorrect: false },
      { text: "{} '' []", isCorrect: true },
      { text: 'null null true', isCorrect: false },
    ],
    explanation: `
  The \`||\` (OR) operator returns the first truthy value it encounters, or the last value if none are truthy.

  - \`(false || {} || null)\`: \`false\` is falsy, but \`{}\` (an empty object) is truthy, so \`{}\` is returned for \`one\`.
  - \`(null || false || '')\`: all values are falsy, so the last value \`''\` is returned for \`two\`.
  - \`([] || 0 || true)\`: \`[]\` (an empty array) is truthy, so \`[]\` is returned for \`three\`.

  Thus, the output is \`{}\`, \`''\`, and \`[]\`.
  `,
  },
  {
    text: "What's the value of output?",
    codeSnippet: `
  \`\`\`js
  const myPromise = () => Promise.resolve('I have resolved!');

  function firstFunction() {
    myPromise().then(res => console.log(res));
    console.log('second');
  }

  async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
  }

  firstFunction();
  secondFunction();
  \`\`\`
  `,
    options: [
      { text: 'I have resolved!, second and I have resolved!, second', isCorrect: false },
      { text: 'second, I have resolved! and second, I have resolved!', isCorrect: false },
      { text: 'I have resolved!, second and second, I have resolved!', isCorrect: false },
      { text: 'second, I have resolved! and I have resolved!, second', isCorrect: true },
    ],
    explanation: `
  The difference between \`.then()\` and \`await\` affects the execution order:

  - In \`firstFunction\`, the promise is resolved asynchronously, so \`console.log('second')\` executes first, then the resolved promise value \`'I have resolved!'\` is logged.
  - In \`secondFunction\`, \`await\` pauses execution until the promise resolves, so \`'I have resolved!'\` is logged first, followed by \`'second'\`.

  Thus, the output is \`second, I have resolved!\` and \`I have resolved!, second\`.
  `,
  },
  {
    text: "What's the value of output?",
    codeSnippet: `
  \`\`\`js
  const set = new Set();

  set.add(1);
  set.add('Lydia');
  set.add({ name: 'Lydia' });

  for (let item of set) {
    console.log(item + 2);
  }
  \`\`\`
  `,
    options: [
      { text: '3, NaN, NaN', isCorrect: false },
      { text: '3, 7, NaN', isCorrect: false },
      { text: '3, Lydia2, [object Object]2', isCorrect: true },
      { text: '"12", Lydia2, [object Object]2', isCorrect: false },
    ],
    explanation: `
  The \`+\` operator can be used for both addition and string concatenation:

  - \`1 + 2\` results in the number \`3\`, since both are numerical values.
  - \`'Lydia' + 2\` results in the string \`'Lydia2'\`, as JavaScript coerces \`2\` to a string for concatenation.
  - \`{ name: 'Lydia' } + 2\` results in \`'[object Object]2'\`, since objects are converted to their string representation \`'[object Object]'\` before concatenation.

  Therefore, the output is \`3, Lydia2, [object Object]2\`.
  `,
  },
  {
    text: "What's its value?",
    codeSnippet: `
  \`\`\`js
  Promise.resolve(5);
  \`\`\`
  `,
    options: [
      { text: '5', isCorrect: false },
      { text: 'Promise {<pending>: 5}', isCorrect: false },
      { text: 'Promise {<fulfilled>: 5}', isCorrect: true },
      { text: 'Error', isCorrect: false },
    ],
    explanation: `
  \`Promise.resolve\` can accept any value (a promise or a non-promise) and returns a resolved promise with that value. If the value is a regular one (like the number \`5\`), it resolves to a promise with the fulfilled state and that value.

  In this case, \`Promise.resolve(5)\` returns a resolved promise with the value \`5\`, so the answer is \`Promise {<fulfilled>: 5}\`.
  `,
  },
  {
    text: "What's its value?",
    codeSnippet: `
  \`\`\`js
  function compareMembers(person1, person2 = person) {
    if (person1 !== person2) {
      console.log('Not the same!');
    } else {
      console.log('They are the same!');
    }
  }
  
  const person = { name: 'Lydia' };
  
  compareMembers(person);
  \`\`\`
  `,
    options: [
      { text: 'Not the same!', isCorrect: false },
      { text: 'They are the same!', isCorrect: true },
      { text: 'ReferenceError', isCorrect: false },
      { text: 'SyntaxError', isCorrect: false },
    ],
    explanation: `
  In JavaScript, objects are compared by reference, not by value. Here, both \`person1\` and \`person2\` refer to the same object in memory (the object \`{ name: 'Lydia' }\`). Since their references are identical, the condition \`person1 !== person2\` is false, and the \`else\` block runs, logging \`They are the same!\`.
  `,
  },
  {
    text: "What's its value?",
    codeSnippet: `
  \`\`\`js
  const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
  };
  
  const colors = ['pink', 'red', 'blue'];
  
  console.log(colorConfig.colors[1]);
  \`\`\`
  `,
    options: [
      { text: 'true', isCorrect: false },
      { text: 'false', isCorrect: false },
      { text: 'undefined', isCorrect: false },
      { text: 'TypeError', isCorrect: true },
    ],
    explanation: `
  In this case, we are using dot notation to access \`colors\` from the \`colorConfig\` object. JavaScript looks for a property named \`colors\`, but it doesn't exist, so it returns \`undefined\`. Then, trying to access \`[1]\` on \`undefined\` results in a \`TypeError\`.

  To correctly access the value of a dynamic property, we should use bracket notation like this: \`colorConfig[colors[1]]\`, which would return \`true\` for the color \`red\`.
  `,
  },
  {
    text: 'Which of these methods modifies the original array?',
    codeSnippet: `
  \`\`\`js
  const emojis = ['✨', '🥑', '😍'];
  
  emojis.map(x => x + '✨');
  emojis.filter(x => x !== '🥑');
  emojis.find(x => x !== '🥑');
  emojis.reduce((acc, cur) => acc + '✨');
  emojis.slice(1, 2, '✨');
  emojis.splice(1, 2, '✨');
  \`\`\`
  `,
    options: [
      { text: 'All of them', isCorrect: false },
      { text: 'map, reduce, slice, splice', isCorrect: false },
      { text: 'map, slice, splice', isCorrect: false },
      { text: 'splice', isCorrect: true },
    ],
    explanation: `
  The \`splice\` method modifies the original array by removing, replacing, or adding elements. In this case, it removes 2 items starting from index 1 and adds a ✨ emoji.
  
  \`map\`, \`filter\`, and \`slice\` return new arrays, \`find\` returns a single element, and \`reduce\` returns a reduced value, none of which modify the original array.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  const food = ['🍕', '🍫', '🥑', '🍔'];
  const info = { favoriteFood: food[0] };
  
  info.favoriteFood = '🍝';
  
  console.log(food);
  \`\`\`
  `,
    options: [
      { text: "['🍕', '🍫', '🥑', '🍔']", isCorrect: true },
      { text: "['🍝', '🍫', '🥑', '🍔']", isCorrect: false },
      { text: "['🍝', '🍕', '🍫', '🥑', '🍔']", isCorrect: false },
      { text: 'ReferenceError', isCorrect: false },
    ],
    explanation: `
  We set the value of the \`favoriteFood\` property on the \`info\` object equal to the first element in the \`food\` array, which is the string with the pizza emoji, \`'🍕'\`. Changing the \`favoriteFood\` property to \`'🍝'\` does not affect the original \`food\` array since strings are primitive data types that interact by value. Therefore, when we log \`food\`, it remains unchanged: \`['🍕', '🍫', '🥑', '🍔']\`.
  `,
  },
  {
    text: 'What does this method do?',
    codeSnippet: `
  \`\`\`js
  JSON.parse();
  \`\`\`
  `,
    options: [
      { text: 'Parses JSON to a JavaScript value', isCorrect: true },
      { text: 'Parses a JavaScript object to JSON', isCorrect: false },
      { text: 'Parses any JavaScript value to JSON', isCorrect: false },
      { text: 'Parses JSON to a JavaScript object only', isCorrect: false },
    ],
    explanation: `
  The \`JSON.parse()\` method parses a JSON string and converts it into a corresponding JavaScript value. It can parse JSON representations of numbers, arrays, and objects, returning their JavaScript equivalents.
  
  For example:
  - Parsing a number: 
    \`\`\`js
    const jsonNumber = JSON.stringify(4); // '4'
    JSON.parse(jsonNumber); // 4
    \`\`\`
  
  - Parsing an array: 
    \`\`\`js
    const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'
    JSON.parse(jsonArray); // [1, 2, 3]
    \`\`\`
  
  - Parsing an object: 
    \`\`\`js
    const jsonObject = JSON.stringify({ name: 'Lydia' }); // '{"name":"Lydia"}'
    JSON.parse(jsonObject); // { name: 'Lydia' }
    \`\`\`
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  let name = 'Lydia';

  function getName() {
    console.log(name);
    let name = 'Sarah';
  }

  getName();
  \`\`\`
  `,
    options: [
      { text: 'Lydia', isCorrect: false },
      { text: 'Sarah', isCorrect: false },
      { text: '`undefined`', isCorrect: false },
      { text: 'ReferenceError', isCorrect: true },
    ],
    explanation: `
  The output is a \`ReferenceError\` because of the way variable scoping works in JavaScript. 

  In the \`getName\` function, we declare a new variable \`name\` using \`let\`, which creates a block-scoped variable. The declaration is hoisted, but it remains uninitialized until the line where it is defined. This means that when we try to access \`name\` with \`console.log(name)\`, it refers to the local \`name\` variable, which is in the "temporal dead zone" (not yet initialized). Therefore, JavaScript throws a \`ReferenceError\`.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  function* generatorOne() {
    yield ['a', 'b', 'c'];
  }

  function* generatorTwo() {
    yield* ['a', 'b', 'c'];
  }

  const one = generatorOne();
  const two = generatorTwo();

  console.log(one.next().value);
  console.log(two.next().value);
  \`\`\`
  `,
    options: [
      { text: '`a` and `a`', isCorrect: false },
      { text: '`a` and `undefined`', isCorrect: false },
      { text: "`['a', 'b', 'c']` and `a`", isCorrect: true },
      { text: "`a` and `['a', 'b', 'c']`", isCorrect: false },
    ],
    explanation: `
  The output is \`['a', 'b', 'c']\` and \`a\`.

  In the first generator, \`generatorOne\`, we yield the entire array \`['a', 'b', 'c']\`. When we call \`one.next().value\`, it returns that array.

  In the second generator, \`generatorTwo\`, we use \`yield*\`, which yields each value from the array one at a time. The first call to \`two.next().value\` returns the first element \`'a'\`.

  Thus, the outputs of the console logs are \`['a', 'b', 'c']\` from the first generator and \`'a'\` from the second generator.
  `,
  },
  {
    text: "What's the output?",
    codeSnippet: `
  \`\`\`js
  console.log(\`\${(x => x)('I love')} to program\`);
  \`\`\`
  `,
    options: [
      { text: '`I love to program`', isCorrect: true },
      { text: '`undefined to program`', isCorrect: false },
      { text: "`${(x => x)('I love') to program`", isCorrect: false },
      { text: '`TypeError`', isCorrect: false },
    ],
    explanation: `
  The output is \`I love to program\`.

  In this code, the expression \`(x => x)('I love')\` is evaluated first within the template literal. This arrow function takes an argument \`x\`, which is assigned the value \`'I love'\`, and simply returns \`x\`.

  Therefore, the evaluated expression becomes \`'I love'\`, and the final output concatenates this with the rest of the string, resulting in \`I love to program\`.
  `,
  },
  {
    text: 'What will happen?',
    codeSnippet: `
  \`\`\`js
  let config = {
    alert: setInterval(() => {
      console.log('Alert!');
    }, 1000),
  };

  config = null;
  \`\`\`
  `,
    options: [
      { text: "The `setInterval` callback won't be invoked", isCorrect: false },
      { text: 'The `setInterval` callback gets invoked once', isCorrect: false },
      { text: 'The `setInterval` callback will still be called every second', isCorrect: true },
      { text: 'We never invoked `config.alert()`, config is `null`', isCorrect: false },
    ],
    explanation: `
  The correct answer is that the \`setInterval\` callback will still be called every second.

  When we set the \`config\` object to \`null\`, the object itself becomes eligible for garbage collection if there are no other references to it. However, since the callback function within \`setInterval\` is an arrow function that maintains a reference to the \`config\` object, it keeps the \`config\` object alive in memory. 

  Therefore, the callback will continue to execute every 1000 milliseconds (1 second) until it is explicitly cleared using \`clearInterval(config.alert)\`.
  `,
  },
  {
    text: "Which method(s) will return the value `'Hello world!'`?",
    codeSnippet: `
  \`\`\`js
  const myMap = new Map();
  const myFunc = () => 'greeting';

  myMap.set(myFunc, 'Hello world!');

  //1
  myMap.get('greeting');
  //2
  myMap.get(myFunc);
  //3
  myMap.get(() => 'greeting');
  \`\`\`
  `,
    options: [
      { text: '1', isCorrect: false },
      { text: '2', isCorrect: true },
      { text: '2 and 3', isCorrect: false },
      { text: 'All of them', isCorrect: false },
    ],
    explanation: `
  The correct answer is 2.

  When we add a key/value pair using the \`set\` method, the first argument passed is treated as the key and the second argument as the value. In this case, the key is the function \`myFunc\`, which returns the string \`'greeting'\`, and the value is \`'Hello world!'\`.

  - **1** is incorrect because the key is not the string \`'greeting'\`, but the function itself.
  - **2** is correct because \`myFunc\` is the key in the map, so calling \`myMap.get(myFunc)\` retrieves \`'Hello world!'\`.
  - **3** is incorrect because the function passed to \`get\` is a new function, and objects in JavaScript (including functions) are compared by reference. Thus, it does not match the key in the map, and will return \`undefined\`.
  `,
  },
].map((question, questionIndex) => {
  return {
    _id: `questions-1-id-${questionIndex}`,
    ...question,
    options: question.options.map((option, optionIndex) => {
      return {
        _id: `questions-1-id-${questionIndex}-opt-id-${optionIndex}`,
        ...option,
      };
    }),
  };
});
