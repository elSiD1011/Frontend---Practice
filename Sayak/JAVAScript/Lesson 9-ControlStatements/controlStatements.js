// Control Statements in javascript


// 1. Conditional Statements : Used to perform different actions based on different conditions.

//  if, else if, else

let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 75) {
  console.log("B grade");
} else {
  console.log("C grade");
}

// switch : Used when you have many conditions based on a single expression.

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}


// break :Terminates a loop or switch.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue : Skips the current iteration and continues with the next.

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

// Ternary Operator
let age = 18;
let statuses = age >= 18 ? "Adult" : "Minor";

console.log(statuses);
