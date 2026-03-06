// Day 8 - Array Manipulator using Spread and Rest Operators

// Two arrays
let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Orange", "Mango"];

// Combine arrays using spread
let allFruits = [...fruits1, ...fruits2];

console.log("Combined Fruits:", allFruits);

// Add new fruits using spread
let updatedFruits = [...allFruits, "Pineapple", "Grapes"];

console.log("Updated Fruits:", updatedFruits);

// Rest operator function to sum numbers
const sumNumbers = (...numbers) => {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
};

console.log("Sum:", sumNumbers(10, 20, 30, 40));
