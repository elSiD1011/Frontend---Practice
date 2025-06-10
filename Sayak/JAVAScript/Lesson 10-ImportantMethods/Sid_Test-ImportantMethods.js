const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num*2);
const evenNumbers = numbers.filter(num => num % 2 ===0);
const oddNumbers = numbers.filter(num => num % 2 !==0);
const reduced = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(doubledNumbers);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(reduced)