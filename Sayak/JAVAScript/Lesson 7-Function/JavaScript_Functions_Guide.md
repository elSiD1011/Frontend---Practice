# JavaScript Functions: Comprehensive Guide

## Table of Contents
1. [Function Declarations](#function-declarations)
2. [Function Expressions](#function-expressions)
3. [Arrow Functions](#arrow-functions)
4. [Immediately Invoked Function Expressions (IIFE)](#immediately-invoked-function-expressions-iife)
5. [Functions with Parameters](#functions-with-parameters)
6. [Functions Returning Values](#functions-returning-values)
7. [Functions with Default Parameters](#functions-with-default-parameters)
8. [Function Best Practices](#function-best-practices)

---

## Function Declarations

Function declarations (also called named functions) are defined using the `function` keyword followed by the function name. They are hoisted, meaning they can be called before they are defined in the code.

### Syntax:
```javascript
function functionName() {
  // code to execute
}
```

### Example:
```javascript
function greetHello() {
  console.log("Hello, World!");
}

greetHello(); // Outputs: Hello, World!
```

### Key Points:
- Function declarations are hoisted to the top of their scope
- Can be called before they are defined in the code
- Use for main functions in your application
- Good for recursive functions that need to call themselves

---

## Function Expressions

Function expressions store anonymous functions in variables. The function is created and assigned to a variable.

### Syntax:
```javascript
const variableName = function() {
  // code to execute
};
```

### Example:
```javascript
const greetHelloExpression = function() {
  console.log("Hello, World from Function Expression!");
};

greetHelloExpression(); // Outputs: Hello, World from Function Expression!
```

### Key Points:
- Not hoisted - can only be called after they are defined
- Often used in functional programming patterns
- Can be passed as arguments to other functions
- Good for conditional function definitions

---

## Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions. They were introduced in ES6 (2015).

### Syntax:
```javascript
const variableName = () => {
  // code to execute
};
```

### Example:
```javascript
const greetHelloArrow = () => {
  console.log("Hello, World from Arrow Function!");
};

greetHelloArrow(); // Outputs: Hello, World from Arrow Function!
```

### Key Points:
- Shorter syntax than traditional functions
- Do not have their own `this` binding - inherit `this` from parent scope
- Cannot be used as constructors (no `new` keyword)
- Implicit return if no curly braces are used with a single expression
- Great for short callback functions

### Short Syntax for One-liners:
```javascript
const multiply = (a, b) => a * b;
```

---

## Immediately Invoked Function Expressions (IIFE)

IIFEs are functions that run as soon as they are defined. They are executed immediately after creation.

### Syntax:
```javascript
(function() {
  // code to execute
})();
```

### Example:
```javascript
(function() {
  console.log("Hello, World from IIFE!");
})(); // Outputs: Hello, World from IIFE!
```

### Key Points:
- Runs immediately after being defined
- Creates a private scope to avoid polluting the global namespace
- Useful for initialization code
- Can be used to create private variables and methods
- Common in older code before ES6 modules

---

## Functions with Parameters

Functions can accept parameters (inputs) to work with.

### Syntax:
```javascript
function functionName(parameter1, parameter2) {
  // code to execute using parameters
}
```

### Example:
```javascript
function greetWithName(age) {
  console.log(`Hello, ${age}`);
}

greetWithName(56); // Outputs: Hello, 56
```

### Key Points:
- Parameters act as local variables within the function
- You can have multiple parameters separated by commas
- Parameter naming should be descriptive
- JavaScript is loosely typed, so parameters can be any type

---

## Functions Returning Values

Functions can return values using the `return` keyword. They can process data and send back results.

### Syntax:
```javascript
function functionName(parameters) {
  // code to execute
  return value;
}
```

### Example:
```javascript
function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(5, 10);
console.log(`Sum: ${sum}`); // Outputs: Sum: 15
```

### Multiple Parameters Example:
```javascript
function addingNumbers(a, b, c, d, e) {
  return a + b + c + d + e;
}

const sumation = addingNumbers(20, 30, 10, 10, 10);
console.log(`Sum: ${sumation}`); // Outputs: Sum: 80
```

### Key Points:
- Functions stop executing when they reach a `return` statement
- Functions can return any data type (number, string, boolean, array, object, etc.)
- Return value can be used directly in expressions
- Functions without an explicit `return` statement return `undefined`

---

## Functions with Default Parameters

Default parameters allow parameters to have predetermined values if no value or `undefined` is passed.

### Syntax:
```javascript
function functionName(parameter = defaultValue) {
  // code to execute
}
```

### Example:
```javascript
function greetWithDefault(name = "Sayak") {
  console.log(`Hello, ${name}!`);
}

greetWithDefault();        // Outputs: Hello, Sayak!
greetWithDefault("Siddhart"); // Outputs: Hello, Siddhart!
```

### Key Points:
- Introduced in ES6 (2015)
- Makes functions more robust and flexible
- Default values can be any expression, including function calls
- Helps avoid undefined errors
- Can be combined with destructuring for more complex defaults

---

## Function Best Practices

### Naming Conventions
- Use camelCase for function names
- Make names descriptive of what the function does
- Start with a verb (e.g., `calculateTotal`, `fetchUserData`, `validateForm`)

### Function Size
- Keep functions focused on a single task (Single Responsibility Principle)
- Consider breaking large functions into smaller, reusable functions

### Parameters
- Limit the number of parameters (ideally 3 or fewer)
- Consider using an object parameter for many options
- Validate parameters when necessary

### Return Values
- Be consistent with return types
- Consider using early returns for guard clauses
- Always handle edge cases

### Documentation
- Comment complex functions
- Use JSDoc for more formal documentation
```javascript
/**
 * Adds two numbers together
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}
```

### Testing
- Write tests for your functions
- Test edge cases and normal usage
- Consider pure functions (no side effects) when possible

---

## Further Learning Resources
- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info: Functions](https://javascript.info/function-basics)
- [Eloquent JavaScript: Functions](https://eloquentjavascript.net/03_functions.html)
