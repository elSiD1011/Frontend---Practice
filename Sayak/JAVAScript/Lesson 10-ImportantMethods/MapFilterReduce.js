// 1 .map() :-   This method creates a new array populated with the results of calling a provided function on every element in the calling array. In simple words, it transforms each element of an array based on a function you provide.
const numbers = [1, 2, 3, 4, 5];  // Original array
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // This will double each number in the original array

// .filter() :- This method creates a new array with all elements that pass the test implemented by the provided function. In simple words, it filters out elements based on a condition you specify.
const numbers2 = [1, 2, 3, 4, 5];  // Original array
const evenNumbers = numbers2.filter(num => num % 2 === 0); // This will filter out odd numbers, keeping only even numbers
const oddNumbers = numbers2.filter(num => num % 2 !== 0); // This will filter out even numbers, keeping only odd numbers
console.log(evenNumbers);  // This will keep only even numbers from the original array
console.log(oddNumbers);  // This will keep only odd numbers from the original array

// .reduce() :- This method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. In simple words, it reduces the array to a single value based on the function you provide.
const numbers3 = [1, 2, 3, 4, 5];  // Original array
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // This will sum up all the numbers in the original array where `0` is the initial value of the accumulator
console.log(sum);  // This will sum up all the numbers in the original array

const sum2 = numbers3.reduce((accumulator, currentValue) => {
     accumulator + currentValue;
},0);

const product = numbers3.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);  // This will multiply all the numbers in the original array, starting with an initial value of 1
console.log( product)


// accumulator is the accumulated value, currentValue is the current element being processed in the array, and 0 is the initial value for the accumulator.