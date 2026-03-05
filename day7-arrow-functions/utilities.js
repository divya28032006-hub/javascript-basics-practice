// Day 7 - Mini Utilities using Arrow Functions

// Square of a number
const square = (num) => num * num;

// Check even or odd
const isEven = (num) => num % 2 === 0;

// Convert text to uppercase
const toUpperCase = (text) => text.toUpperCase();

// Test values
let number = 6;
let word = "javascript";

console.log("Number:", number);
console.log("Square:", square(number));

console.log("Is Even:", isEven(number));

console.log("Original Word:", word);
console.log("Uppercase Word:", toUpperCase(word));
