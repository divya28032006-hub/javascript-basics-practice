// Day 6 - Student Result Analyzer

let marks = [78, 45, 90, 66, 30, 88, 55];

console.log("All Marks:", marks);

// Students who passed (marks >= 50)
let passedStudents = marks.filter(function(mark) {
    return mark >= 50;
});

// Students who failed
let failedStudents = marks.filter(function(mark) {
    return mark < 50;
});

// Calculate total marks
let totalMarks = marks.reduce(function(total, mark) {
    return total + mark;
}, 0);

// Calculate average
let average = totalMarks / marks.length;

console.log("Passed Students Marks:", passedStudents);
console.log("Failed Students Marks:", failedStudents);
console.log("Average Marks:", average.toFixed(2));
