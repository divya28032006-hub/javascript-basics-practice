// Day 2 - Temperature Converter
// Convert Celsius to Fahrenheit and Fahrenheit to Celsius

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

// Test values
let celsiusValue = 25;
let fahrenheitValue = 77;

// Calling functions
let convertedFahrenheit = celsiusToFahrenheit(celsiusValue);
let convertedCelsius = fahrenheitToCelsius(fahrenheitValue);

// Display results
console.log(celsiusValue + "°C = " + convertedFahrenheit + "°F");
console.log(fahrenheitValue + "°F = " + convertedCelsius + "°C");
