// Match Numbers and Letters of the Alphabet

// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

// Also, it is possible to combine a range of letters and numbers in a single character set.

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// // matches all letters and numbers in jennyStr
// jennyStr.match(myRegex);

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);

// [ 'l',
//   'r',
//   'r',
//   '3',
//   '4',
//   '5',
//   '2',
//   '6',
//   '5',
//   '3',
//   's',
//   'r',
//   'l',
//   'i',
//   'i',
//   'o',
//   's' ]