// Introduction to the Basic Data Structure Challenges

// Data can be stored and accessed in many different ways, both in Javascript and other languages. This section will teach you how to manipulate arrays, as well as access and copy the information within them. It will also teach you how to manipulate and access the data within Javascript objects, using both dot and bracket notation. When you're done with this section, you should understand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose.

// Use an Array to Store a Collection of Data

// The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:

// let simpleArray = ['one', 2, 'three’, true, false, undefined, null];
// console.log(simpleArray.length);
// // logs 7
// All array's have a length property, which as shown above, can be very easily accessed with the syntax Array.length.

// A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

// let complexArray = [
//   [
//     {
//       one: 1,
//       two: 2
//     },
//     {
//       three: 3,
//       four: 4
//     }
//   ],
//   [
//     {
//       a: "a",
//       b: "b"
//     },
//     {
//       c: "c",
//       d: “d”
//     }
//   ]
// ];

let yourArray = ["a", 2, true, "c", null, {name: "john"}];