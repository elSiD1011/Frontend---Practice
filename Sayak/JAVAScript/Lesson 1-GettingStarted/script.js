
// Lesson 1: Getting Started   Date : May 12 2025

// 1.1 Using console.log()   

// All modern web browsers, Node.js as well as almost every other JavaScript environments support writing messages
// to a console using a suite of logging methods. The most common of these methods is console.log().
// In a browser environment, the console.log() function is predominantly used for debugging purposes.

console.log("Hello World");
console.log(789+667+342);
console.log(100+200+500);
console.log("Hello Sid")
console.log("Text is writtten in quotation marks")
console.log(500+500)
console.error("This is an error message")


// 1.2  Logging variables

// console.log() can be used to log variables of any kind; not only strings. Just pass in the variable that you want to
// be displayed in the console, for example:

var myName = "Sayak";
var myAge = 25;
var myCity = "Kolkata";

console.log(myName);
console.log(myAge);
console.log(myCity);

console.log("My name is " + myName + ", I am " + myAge + " years old and I live in " + myCity + ".");

var myName = "Sid";
var myAge = 38
var myCity = "Kolkata"

console.log("My name is " + myName + ", I am " + myAge + " years old and I live in " + myCity + "." ); // Way 1 of writing a string with variables using + operator

console.log(`My Name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`); // Way 2 of writing a string with variables using template literals

console.log(`My name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`);


// 1.3  Logging objects
// console.log() can also be used to log objects. Just pass in the object that you want to be displayed in the console, for example:

// Objects : - Its is a collection of key-value pairs. The keys are strings and the values can be of any type, including other objects.

var myObject = {
    name: "Sayak",
    age: 25,
    city: "Kolkata"
};

console.log(myObject);
console.log("My name is " + myObject.name + ", I am " + myObject.age + " years old and I live in " + myObject.city + ".");
console.log(`My name is ${myObject.name}, I am ${myObject.age} years old and I live in ${myObject.city}.`);

var myObject = {
    name: "Sid",
    age: 38,
    city: "Kolkata"
};

console.log(myObject)
console.log(`My name is ${myObject.name}, I am ${myObject.age} years old and I live in ${myObject.city}.`);

