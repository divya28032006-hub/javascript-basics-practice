// Day 9 - Combined Utilities Program

// Utility 1: Square of a number
const square = (num) => num * num;

// Utility 2: Check even or odd
const isEven = (num) => num % 2 === 0;

// Utility 3: Find largest number in array
function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

// Utility 4: Calculate average
function calculateAverage(numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum / numbers.length;
}

// Test data
let number = 7;
let marks = [78, 85, 90, 66, 88];

// Display results
console.log("Number:", number);
console.log("Square:", square(number));
console.log("Is Even:", isEven(number));

console.log("Marks:", marks);
console.log("Largest Mark:", findLargest(marks));
console.log("Average Mark:", calculateAverage(marks).toFixed(2));
