# Lesson 1: Getting Started with JavaScript
*Date: May 12, 2025*

## 1.1 Using `console.log()`

### Introduction to Console Logging
All modern JavaScript environments (browsers, Node.js, etc.) support writing messages to a console using logging methods. The most common method is `console.log()`, which is primarily used for debugging in browser environments.

### Basic Examples
```javascript
console.log("Hello World");        // Outputs: Hello World
console.log(789+667+342);          // Outputs: 1798
console.log(100+200+500);          // Outputs: 800
console.log("Hello Sid");          // Outputs: Hello Sid
console.log("Text is written in quotation marks");  // Outputs the text
console.log(500+500);              // Outputs: 1000
```

### Error Logging
```javascript
console.error("This is an error message");  // Displays as an error in red
```

## 1.2 Logging Variables

### Variable Declaration and Logging
You can log variables of any type using `console.log()`:

```javascript
var myName = "Sayak";
var myAge = 25;
var myCity = "Kolkata";

console.log(myName);    // Outputs: Sayak
console.log(myAge);     // Outputs: 25
console.log(myCity);    // Outputs: Kolkata
```

### Combining Strings and Variables
There are two main ways to combine strings with variables:

#### Method 1: Using the + Operator (String Concatenation)
```javascript
console.log("My name is " + myName + ", I am " + myAge + " years old and I live in " + myCity + ".");
// Outputs: My name is Sayak, I am 25 years old and I live in Kolkata.
```

#### Method 2: Using Template Literals (ES6 Feature)
```javascript
console.log(`My name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`);
// Outputs: My name is Sayak, I am 25 years old and I live in Kolkata.
```

> **Note:** Template literals use backticks (`) instead of quotes, and variables are embedded using ${variableName} syntax.

## 1.3 Logging Objects

### What are Objects?
Objects are collections of key-value pairs where keys are strings and values can be of any data type, including other objects.

### Creating and Logging Objects
```javascript
var myObject = {
    name: "Sayak",
    age: 25,
    city: "Kolkata"
};

console.log(myObject);  // Outputs the entire object: {name: "Sayak", age: 25, city: "Kolkata"}
```

### Accessing Object Properties
You can access object properties using dot notation:

```javascript
console.log(myObject.name);  // Outputs: Sayak
console.log(myObject.age);   // Outputs: 25
console.log(myObject.city);  // Outputs: Kolkata
```

### Combining Objects with Strings
```javascript
// Using string concatenation:
console.log("My name is " + myObject.name + ", I am " + myObject.age + " years old and I live in " + myObject.city + ".");

// Using template literals:
console.log(`My name is ${myObject.name}, I am ${myObject.age} years old and I live in ${myObject.city}.`);
```

## Key Takeaways

1. `console.log()` is essential for debugging and displaying information in JavaScript.
2. You can log text, numbers, mathematical operations, and variables.
3. Template literals (`${variable}`) provide a cleaner way to insert variables into strings than concatenation.
   - Template literals use backticks (`) rather than quotes
   - Variables are embedded using `${variableName}` syntax
4. Objects store related data in key-value pairs and can be logged and accessed through their properties.
5. For error messages, use `console.error()` instead of `console.log()`.

## Practice Exercises

1. Create and log variables with your personal information
2. Log a mathematical calculation
3. Create an object with at least 3 properties and log it
4. Log a sentence using both concatenation and template literals
5. Log an error message