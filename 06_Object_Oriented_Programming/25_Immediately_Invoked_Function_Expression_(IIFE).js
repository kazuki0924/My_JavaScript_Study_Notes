// Understand the Immediately Invoked Function Expression (IIFE)

// A common pattern in JavaScript is to execute a function as soon as it is declared:

// (function () {
//   console.log("Chirp, chirp!");
// })(); // this is an anonymous function expression that executes right away
// // Outputs "Chirp, chirp!" immediately
// Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

(function () {
  console.log("A cozy nest is ready");
})()

// A cozy nest is ready