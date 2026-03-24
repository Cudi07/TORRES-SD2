// console.log("Hello Irish");

/* [SECTION] Repetition Control Structures
Do Loops
Syntax:
while (condition) {
    // code to be executed
    // update the condition (iteration)
};
*/

let count = 0;

while (count < 5) {
  console.log("Do Loop: " + count);
  count++;
}

/*
>> Iteration <<

1. count = 0
2. count < 5 (true)
3. console.log("Do Loop: " + count) => Do Loop: 0
4. count++ => count = 1 ...repeat...
while (count < 5) {
    console.log("Do Loop: " + count);
    count++;
}
*/

//  2. Do...While Loop
/*
Syntax:
do {
    // code to be executed
    // update the condition (iteration)
} while (condition);
*/

let score = 0;

do {
  console.log("Do...While Loop: " + score);
  score++;
} while (score < 5);

/*
>> Iteration <<
1. score = 0
2. console.log("Do...While Loop: " + score) => Do...While
Loop: 0
3. score++ => score = 1
4. score < 5 (true) ...repeat...
*/

// 3. For Loop
/*
Syntax:
for (initialization; condition; iteration) {
    // code to be executed
}
*/
for (let i = 0; i < 5; i++) {
  console.log("For Loop: " + i);
}
/*
>> Iteration <<
1. i = 0
2. i < 5 (true)
3. console.log("For Loop: " + i) => For Loop: 0
4. i++ => i = 1 ...repeat...
*/

for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    console.log("Count " + i + " is divisible by 3");
  } else {
    console.log("Count " + i + " is not divisible by 3");
  }
}

// continue - break

for (let count = 0; count < 20; count++) {
  if (count === 18) {
    break;
  }
  console.log("Count: " + count);
}

for (let count = 0; count < 20; count++) {
  if (count === 15) {
    console.log("5 + 10 = " + count);
    continue;
  }
  console.log("Count: " + count);
}

let isRunning = true;
let accountLocked = 0;
let isLoggedIn = false;
let password = "irish123";
while (isRunning) {
  if (accountLocked != 3) {
    let input = prompt("Enter your password: ");
    if (input != password) {
      alert("Incorrect password. Chances left: " + (2 - accountLocked));
      accountLocked++;
    } else {
      isLoggedIn = true;
      alert("Welcome back, Irish!");
      isRunning = false;
    }
  } else {
    alert("Your account has been locked due to multiple failed attempts.");
    isRunning = false;
  }
}

let input = parseInt(prompt("Enter a number: "));
for (let i = 0; i <= input; i++) {
  console.log(i);
}
