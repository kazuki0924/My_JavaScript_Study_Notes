// Sort an Array Alphabetically using the sort Method

// The sort method sorts the elements of an array according to the callback function.

// For example:

// function ascendingOrder(arr) {
//   return arr.sort(function(a, b) {
//     return a - b;
//   });
// }
// ascendingOrder([1, 5, 2, 3, 4]);
// // Returns [1, 2, 3, 4, 5]

// function reverseAlpha(arr) {
//   return arr.sort(function(a, b) {
//     return a < b;
//   });
// }
// reverseAlpha(['l', 'h', 'z', 'b', 's']);
// // Returns ['z', 's', 'l', 'h', 'b']
// Note: It's encouraged to provide a callback function to specify how to sort the array items. JavaScript's default sorting method is by string Unicode point value, which may return unexpected results.

function alphabeticalOrder(arr) {
  return arr.sort(function(a,b) {
    return a > b;
  });
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// ["a", "a", "c", "d", "g", "z"]