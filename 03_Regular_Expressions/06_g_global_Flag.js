// Find More Than the First Match

// So far, you have only been able to extract or search a pattern once.

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);
// // Returns ["Repeat"]
// To search or extract a pattern more than once, you can use the g flag.

// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// // Returns ["Repeat", "Repeat", "Repeat"]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex); // [ 'Twinkle', 'twinkle' ]