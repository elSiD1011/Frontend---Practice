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

