// Day 5 - Password Strength Checker

let password = "Divya123";

// Variables to track conditions
let hasUppercase = false;
let hasLowercase = false;
let hasNumber = false;

// Loop through each character
for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
    }
    else if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
    }
    else if (char >= '0' && char <= '9') {
        hasNumber = true;
    }
}

// Check password strength
console.log("Password:", password);

if (hasUppercase && hasLowercase && hasNumber) {
    console.log("Strength: Strong Password");
}
else {
    console.log("Strength: Weak Password");
}
