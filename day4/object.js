// Day 4 - Student Profile Manager

// Create student object
let student = {
    name: "Divya",
    age: 20,
    department: "Information Technology",
    marks: 85
};

// Function to calculate grade
function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "Fail";
    }
}

// Display student information
console.log("Student Profile");
console.log("------------------");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Department:", student.department);
console.log("Marks:", student.marks);

// Calculate and display grade
let grade = calculateGrade(student.marks);
console.log("Grade:", grade);
