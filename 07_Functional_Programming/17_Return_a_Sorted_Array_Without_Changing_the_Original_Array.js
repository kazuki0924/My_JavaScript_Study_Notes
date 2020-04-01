// Return a Sorted Array Without Changing the Original Array

// A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that concat returns a new array), then run the sort method.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort((a, b) => a - b);
  // Add your code above this line
}
nonMutatingSort(globalArray);

// [ 2, 3, 5, 6, 9 ]