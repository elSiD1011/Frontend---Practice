// Array Methods

// 1. concat() :- Joins two or more arrays and returns a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log("🚀 ~ array3:", array3)

// 2. join() :- Joins all elements of an array into a string.
let array4 = ['Hello', 'World'];
let joinedString = array4.join(' ');
console.log("🚀 ~ joinedString:", joinedString)

// 3. indexOf() :- Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let array5 = [10, 20, 30, 20];
let index = array5.indexOf(20);
console.log("🚀 ~ index:", index)

// 4. lastIndexOf() :- Returns the last index at which a given element can be found in the array, or -1 if it is not present.
let lastIndex = array5.lastIndexOf(20);
console.log("🚀 ~ lastIndex:", lastIndex)

// 5. slice() :- Returns a shallow copy of a portion of an array into a new array object.
let array6 = [1, 2, 3, 4, 5];
let slicedArray = array6.slice(0, 4); // From index 1 to 3 i will get in the new array.
console.log("🚀 ~ slicedArray:", slicedArray);

// array.slice(start, end)
// The slice() method selects from a given start, up to a (not inclusive) given end.
// Start is inclusive, end is exclusive.

// 6. splice() :- The splice() method is used to add, remove, or replace elements in an array.

// array.splice(start, deleteCount, item1, item2, ...)

// start → Index where changes begin.
// deleteCount → Number of items to remove.
// item1, item2, ... → (Optional) Items to add.

let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2, "guava", "litchi"); // remove 2 elements starting from index 1
console.log(fruits); // ["apple", "date"]

let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow"); // replace "green" with "yellow"
console.log(colors); // ["red", "yellow", "blue"]


// 7. Push() :- Adds one or more elements to the end of an array and returns the new length of the array.
let array7 = [1, 2, 3];
array7.push(4, 5);
console.log("🚀 ~ array7 after push:", array7); // [1, 2, 3, 4, 5]

// 8. Pop() :- Removes the last element from an array and returns that element.
let poppedElement = array7.pop();
console.log("🚀 ~ poppedElement:", poppedElement); // 5

// 9. Shift() :- Removes the first element from an array and returns that element.
let array8 = [1, 2, 3];
let shiftedElement = array8.shift();
console.log("🚀 ~ shiftedElement:", shiftedElement); // 1

// 10. Unshift() :- Adds one or more elements to the beginning of an array and returns the new length of the array.

let array9 = [2, 3, 4];
array9.unshift(1); // Adds 1 at the beginning
console.log("🚀 ~ array9 after unshift:", array9); // [1, 2, 3, 4]

// 11. Reverse() :- Reverses the elements of an array in place.
let array10 = [1, 2, 3, 4];
array10.reverse();
console.log("🚀 ~ array10 after reverse:", array10); // [4, 3, 2, 1]

// 12. Sort() :- Sorts the elements of an array in place and returns the sorted array.
let array11 = [3, 1, 4, 2];
array11.sort((a, b) => a - b); // Sorts in ascending order
console.log("🚀 ~ array11 after sort:", array11); // [1,2,3,4]
array11.sort((b, a) => a - b); // Sorts in descending order
console.log("🚀 ~ array11 after sort:", array11); // [4,3,2,1]

// 13. toString() :- Converts an array to a string, with elements separated by commas.
let array12 = [1, 2, 3];
let arrayString = array12.toString();
console.log("🚀 ~ arrayString:", arrayString); // "1,2,3"

