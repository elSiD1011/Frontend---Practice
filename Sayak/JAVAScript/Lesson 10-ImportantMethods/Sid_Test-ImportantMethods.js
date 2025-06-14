const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num*2);
const evenNumbers = numbers.filter(num => num % 2 ===0);
const oddNumbers = numbers.filter(num => num % 2 !==0);
const reduced = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(doubledNumbers);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(reduced)

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log("Array3:", array3 )

let array4 = ["Hello", "World"];
let joinedString = array4.join(" ");
console.log("Joined String:", joinedString)

let array5 = [10, 20, 30, 20];
let index = array5.indexOf(20);
console.log("Index:", index)

let array6 = [1, 2, 3, 4, 5];
let slicedArray = array6.slice(1, 4);
console.log("slicedArray", slicedArray);
// Start is inclusive, end is exclusive.

let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2, "guava", "litchi")
console.log("splicedFruits", fruits);

let colors = ['red', 'green', 'blue'];
colors.splice(1, 1, "yellow");
console.log("splicedColors", colors);