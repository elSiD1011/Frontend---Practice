// There are basically three types of loops in JavaScript: for, while, and do-while.

// 1. For Loop
let i;
for (i = 0; i < 5; i++) {
    console.log("For Loop Iteration: " + i);
}

// 2. While Loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration: " + j); // This will print 0 to 4
    j++; // Increment j to avoid infinite loop
}

// 3. Do-While Loop
let k = 0;
do {
    console.log("Do-While Loop Iteration: " + k); // This will print 0 to 4
    k++; // Increment k to avoid infinite loop
} while (k < 5);

// 4. For...of Loop
const array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log("For...of Loop Value: " + value); // This will print each value in the array
}

// 5. For...in Loop
const object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    console.log("For...in Loop Key: " + key + ", Value: " + object[key]); // This will print each key-value pair in the object
}


// Sid Test

// For Loop
let z;
for (z = 0; z < 10; z++) {
    console.log("For Loop Iteration: " + z);
};

// Infinite Loop
let y = 0; //(Value kept to 0, so it doesnt go into infnite loop and freeze computer!)
while (y > 0) {
    console.log("While Loop Iteration: " + y++); 
};

// 3. Do-While Loop
let x = 0;
do {
    console.log("Do-While Loop Iteration: " + x); // This will print 0 to 4
    x++; 
} while (x < 5);


