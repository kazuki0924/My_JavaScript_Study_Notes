// Write Concise Object Literal Declarations Using Simple Fields

// ES6 adds some nice support for easily defining object literals.

// Consider the following code:

// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });
// getMousePosition is a simple function that returns an object containing two fields.

// ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood.

// Here is the same function from above rewritten to use this new syntax:

// const getMousePosition = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender
  };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));
// { name: 'Zodiac Hasbro', age: 56, gender: 'male' }