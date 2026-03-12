// This is how we print an output using JS
// console.log("stringContent|Variable") is a function that prints the output to the console
console.log("Hello world!");

// TO USE COMMENT USE - > //
// This is a comment, it is not executed by the computer

/*
This is a multi-line comment, it is not executed by the computer
*/

// [SECTION] VARIABLES
// Acts as a storage for data, which can be modified afterwards except for constants

// [SECTION] DATA TYPES
// Numeric Data Types
/*
let variableName; -> no initialized value
let variableName = value; -> initialized value 
*/

let age;
let height = 160;

console.log(age);
console.log(height);

// JS is a loose-type PL
console.log(height);

console.log(height);

console.log(height);

// Synchronous PL -> JS

let gwa = 99.75;

console.log(gwa);

// Character Data Types

let firstName = "John";

console.log(firstName);

// typeof -> to check a variable's data type

console.log(typeof gwa);
console.log(typeof firstName);
console.log(typeof height);

// Text Casing in JS
// Camel Casing -> firstName, lastName, middleName
// Snake Casing -> first_name, last_name, middle_name
// Pascal Casing -> FirstName, LastName, MiddleName
// Kebab Casing -> first-name, last-name, middle-name (not used in JS)
// pascal kebab case -> First-Name, Last-Name, Middle-Name (not used in JS)

// Boolean Data Types
let isMarried = false;
let isRegistered = true;

console.log(isMarried);
console.log(isRegistered);

console.log(typeof isMarried);

// Concatenation -> combining two or more strings together
let province = "Pampanga";

console.log("I am from " + province);
// Type-Coercion -> automatic conversion of data types by the computer
console.log("My overall grade is " + gwa);
