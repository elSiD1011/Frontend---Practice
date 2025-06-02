
// 1. Named Function / Function Declaration

function greetHello() {
  console.log("Hello, World!");
};

function greetingHello() {
console.log("Hello World");
};

greetHello()
greetingHello()


// 2. Function Expression
const greetHelloExpression = function() {
  console.log("Hello, World from Function Expression!");
};

greetHelloExpression();

const GreetingHelloExpression = function() {
  console.log("Hello World, from Fuction Expression");
};

GreetingHelloExpression();

// 3. Arrow Function
const greetHelloArrow = () => {
  console.log("Hello, World from Arrow Function!");
};

greetHelloArrow();

const GreetingHelloArrow = () => {
  console.log("Hello World, from Arrow Fuction");
};

GreetingHelloArrow();

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("Hello, World from IIFE!");
})();

(function() {
  console.log("Hello World, from IIFE");
})();

// 5. Function with Parameters
function greetWithName(age) {
  console.log(`Hello, ${age}`);
};

greetWithName(56); 


function GreetingWithAge(age) {
  console.log(`Hello, ${age}`);
  };

GreetingWithAge(38);

// 6. Function Returning a Value
function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(5, 10);
console.log(`Sum: ${sum}`);
console.log(`Sum: ${addNumbers(5, 10)}`);


function addingNumbers(a, b, c, d, e) {
  return a + b + c + d + e;
}

const sumation = addingNumbers(20, 30, 10, 10, 10);
console.log(`Sum: ${sumation}`);


// 7. Function with Default Parameters
function greetWithDefault(name = "Sayak") {
  console.log(`Hello, ${name}!`);
}

greetWithDefault(); // No argument passed, uses default value
greetWithDefault("Siddhart"); // Argument passed, overrides default value


function GreetingWithDefault(name = "Sid"){
  console.log(`Hello, ${name}`);
};

GreetingWithDefault();
GreetingWithDefault("Siddhartha");


