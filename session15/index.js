/*
Discussion Topic List:

1.) Arithmetic Operators
Addition Operator (+) 
Subtraction Operator (-)
Multiplication Operator (*)
Division Operator (/)



2.) Assignment Operators
Basic Assignment Operator (=)
Addition Assignment Operator (+=)
Subtraction Assignment Operator (-=)
Multiple Operators and Parentheses
3.) Increment and Decrement
Increment Operator (++)
Decrement Operator (--)

4.) Type Coercion

5.) Comparison Operators
Equality Operator (==)
Inequality Operator (!=)
Strict Equality Operator (===)
Strict Inequality Operator (!==)
6.) Relational Operators
Greater Than Operator (>)
Greater Than or Equal To Operator (>=)
Less Than Operator (<)
Less Than or Equal To Operator (<=)

7.) Logical Operators
Logical AND Operator (&&)
Logical OR Operator (||)
Logical NOT Operator (!)
*/

// [SECTION] Arithmetic Operators

let num1 = 10;
let num2 = 2;
let num3 = 3;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let mod = num1 % num3;

console.log("SUM: " + sum);
console.log("DIFFERENCE: " + difference);
console.log("PRODUCT: " + product);
console.log("QUOTIENT: " + quotient);
console.log("MODULO: " + mod);

// [SECTION] Assignment Operators

let num4 = 20;
let num5 = 8;

// let sum = num 4 + num 4; -> old method

// num4 = 20;
num4+=num4;
console.log("Assignment Operator += : " + num4);

num4+=num5;
console.log("Assignment Operator += : " + num4);

// [SECTION] Increment and Decrement Operators
// Post
let num6 = 5;
console.log("Initial value of num6: " + num6);

num6++; // num6 = num6 + 1
console.log("After increment (num6++): " + num6);

num6--; // num6 = num6 - 1
console.log("After decrement (num6--): " + num6);

// PRE
let num7 = 10;
console.log("Initial value of num7: " + num7);
++num7; // num7 = num7 + 1
console.log("After increment (++num7): " + num7);
++num7; // num7 = num7 + 1
console.log("After increment (++num7): " + num7);
--num7; // num7 = num7 - 1
console.log("After decrement (--num7): " + num7);

// [SECTION] Type Coercion
let num8 = 15;
let strNum = "5";
let result = num8 + strNum; // Type coercion happens here
console.log("Result of num8 + strNum: " + result);
console.log("Type of result: " + typeof result);    

// [SECTION] Comparison Operators
let numA = 10;
let numB = 12;
let numC = "10";

// Equality operator (==)
let equality1 = numA == numB; // false
console.log("Equality operator: " + equality1);

let equality2 = numA == numC; // true
console.log("Equality operator: " + equality2);

let sequality1 = numA === numB; // false
console.log("Strict equality operator: " + sequality1);

let sequality2 = numA === numC; // true
console.log("Strict equality operator: " + sequality2);

// Not Equal Operator (!=)
let inequality1 = numA != numB; // true
console.log("Inequality operator: " + inequality1);

let inequality2 = numA != numC; // false
console.log("Inequality operator: " + inequality2);

// Strict Inequality Operator (!==)
let sinequality1 = numA !== numB; // true
console.log("Strict inequality operator: " + sinequality1);

let sinequality2 = numA !== numC; // false
console.log("Strict inequality operator: " + sinequality2);

// [SECTION] Relational Operators
let numD = 25;
let numE = 15;

// Greater Than Operator (>)
let greaterThan = numD > numE; // false
console.log("Greater than operator: " + greaterThan);

// Greater Than or Equal To Operator (>=)
let greaterThanOrEqualTo = numD >= numE; // false
console.log("Greater than or equal to operator: " + greaterThanOrEqualTo);

// Less Than Operator (<)
let lessThan = numD < numE; // true
console.log("Less than operator: " + lessThan);

// Less Than or Equal To Operator (<=)
let lessThanOrEqualTo = numD <= numE; // true
console.log("Less than or equal to operator: " + lessThanOrEqualTo);

// [SECTION] Logical Operators
let conditionA = true;
let conditionB = false;
let conditionC = true;

// Logical AND Operator (&&)
let andResult = conditionA && conditionB && conditionC; // false
console.log("Logical AND operator: " + andResult);
// Logical OR Operator (||)
let orResult = conditionA || conditionB || conditionC; // true
console.log("Logical OR operator: " + orResult);    
// Logical NOT Operator (!)
let notResultA = !conditionA; // false
console.log("Logical NOT operator on conditionA: " + notResultA);
let notResultB = !conditionB; // true
console.log("Logical NOT operator on conditionB: " + notResultB);


// [SECTION] Large Scale Data Types

// Arrays -> used to store multiple values in a single variable, which can be of any data type
// Values should be of the same data type 
let array = [10, 20, 30];
let names = ["Irish", "John", "Jane"];
console.log(names);
console.log("Array: " + array);

let mixedArray = [10, "Irish", true];
console.log("Mixed Array: " + mixedArray);

// Objects -> used to store data in key-value pairs, which can be of any data type
let user = {
    name: "Irish",
    gradeLevel: 3,
    isMarried: true
};
console.log(user);

// [SECTION] Alert vs Prompt
// Alert -> used to display a message to the user
// Prompt -> used to get input from the user
alert("Hello World!")
console.log("Hello");

let completeName =  prompt("Please enter your complete name: ");
console.log("Hello, " + completeName);

let input1 = parseInt(prompt("Enter a number: "));
let input2 = parseInt(prompt("Enter another number: "));

let sum3 = input1 + input2; // No type coercion, both inputs are treated as numbers
console.log("The sum of the two numbers is: " + sum3);

// alert("This is an alert message!");
// let userInput = prompt("Please enter your name: ");
// console.log("User Input: " + userInput);