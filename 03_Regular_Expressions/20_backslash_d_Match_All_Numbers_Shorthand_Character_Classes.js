// Match All Numbers

// You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length; // 3