// Combine an Array into a String Using the join Method

// The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

// Here's an example:

// var arr = ["Hello", "World"];
// var str = arr.join(" ");
// // Sets str to "Hello World"

function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");
// 'May the force be with you'