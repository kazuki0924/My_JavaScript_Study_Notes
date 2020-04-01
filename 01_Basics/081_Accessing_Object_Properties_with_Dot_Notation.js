// Accessing Object Properties with Dot Notation

// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

// Here is a sample of using dot notation (.) to read an object's property:

// var myObj = {
//   prop1: "val1",
//   prop2: "val2"
// };
// var prop1val = myObj.prop1; // val1
// var prop2val = myObj.prop2; // val2

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt; // jersey