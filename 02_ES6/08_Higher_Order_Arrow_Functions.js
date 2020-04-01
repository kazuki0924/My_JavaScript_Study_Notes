// Write Higher Order Arrow Functions

// It's time we see how powerful arrow functions are when processing data.

// Arrow functions work really well with higher order functions, such as map(), filter(), and reduce(), that take other functions as arguments for processing collections of data.

// Read the following code:

FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
// We have written this with filter() to at least make it somewhat readable. Now compare it to the following code which uses arrow function syntax instead:

FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
// This code is more succinct and accomplishes the same task with fewer lines of code.

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// The Math.pow() function returns the base to the exponent power, that is, base^exponent.

// console.log(Math.pow(7, 3));
// // expected output: 343

// console.log(Math.pow(4, 0.5));
// // expected output: 2

// console.log(Math.pow(7, -2));
// // expected output: 0.02040816326530612
// //                  (1/49)

// Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// [ 16, 1764, 36 ]