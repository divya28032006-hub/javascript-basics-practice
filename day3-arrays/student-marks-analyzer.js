// Day 3 - Student Marks Analyzer

// Array of student marks
let marks = [78, 85, 90, 66, 88];

// Display marks
console.log("Marks:", marks);

// Initialize variables
let highest = marks[0];
let lowest = marks[0];
let sum = 0;

// Loop through the array
for (let i = 0; i < marks.length; i++) {

    // Find highest mark
    if (marks[i] > highest) {
        highest = marks[i];
    }

    // Find lowest mark
    if (marks[i] < lowest) {
        lowest = marks[i];
    }

    // Calculate sum
    sum = sum + marks[i];
}

// Calculate average
let average = sum / marks.length;

// Display results
console.log("Highest Mark:", highest);
console.log("Lowest Mark:", lowest);
console.log("Average Mark:", average.toFixed(2));
