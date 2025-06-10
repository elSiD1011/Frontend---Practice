// 1. Conditional Statements : Used to perform different actions based on different conditions.

//  if, else if, else
let score = 90;

if (score >=90){
    console.log("Grade A")
} else if (score >= 75){
    console.log("Grade B")
} else {
    console.log("Grade C")
}


// switch : Used when you have many conditions based on a single expression.

let day = 5;

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
    case 4:
        console.log("Thursday");
        break;    
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Another Day");
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

let age = 20;
let statuses = age >= 18 ? "Adult" : "Minor";

console.log(statuses);




