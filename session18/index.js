console.log("Hello World");

// [SECTION] JS FUNCTIONS
// Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return outputs (results).

function sayHello() {
  console.log("Hello, San Fernandito City, Pampanguenos!");
}

// Calling the function to execute its code
sayHello();

function showAlert() {
  alert("This is an alert message!");
}

showAlert();

let num1 = 0,
  num2 = 0;
let userInput = 0;
function startCalc() {
  let userInput = parseInt(
    prompt(
      "Enter a number: \n[1] Input Numbers \n[2] Sum \n[3] Difference \n[4] Product \n[5] Quotient \n[6] Modulo \n[7] Reset \n[8] Exit",
    ),
  );

  switch (userInput) {
    case 1:
      enterNumbers();
      break;
    case 2:
      sum();
      break;
    case 3:
      difference();
      break;
    case 4:
      product();
      break;
    case 5:
      quotient();
      break;
    case 6:
      modulo();
      break;
    case 7:
      reset();
      break;
    case 8:
      exit();
      break;
    default:
      alert("Invalid input. Please enter a number between 1 and 8.");
  }
}

function enterNumbers() {
  num1 = parseFloat(prompt("Enter the first number:"));
  num2 = parseFloat(prompt("Enter the second number:"));
  alert(`Numbers entered: ${num1} and ${num2}`);
}

function sum() {
  alert(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);
}

function difference() {
  alert(`The difference of ${num1} and ${num2} is: ${num1 - num2}`);
}

function product() {
  alert(`The product of ${num1} and ${num2} is: ${num1 * num2}`);
}

function quotient() {
  if (num2 !== 0) {
    alert(`The quotient of ${num1} and ${num2} is: ${num1 / num2}`);
  } else {
    alert("Error: Division by zero is not allowed.");
  }
}

function modulo() {
  if (num2 !== 0) {
    alert(`The modulo of ${num1} and ${num2} is: ${num1 % num2}`);
  } else {
    alert("Error: Modulo by zero is not allowed.");
  }
}

function reset() {
  num1 = 0;
  num2 = 0;
  alert("Calculator reset. Numbers cleared.");
}

function exit() {
  alert("Exiting the calculator. Goodbye!");
}

do {
  startCalc();
} while (userInput != 8);
