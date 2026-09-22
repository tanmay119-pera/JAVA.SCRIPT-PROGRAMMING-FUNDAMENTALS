//^                                                    CHAPTER 6: FUNCTIONS IN JAVASCRIPT                                                                   //

//~ IN THIS CHAPTER, WE WILL LEARN ABOUT FUNCTIONS IN JAVASCRIPT. FUNCTIONS ARE REUSABLE BLOCKS OF CODE DESIGNED TO PERFORM A PARTICULAR TASK.
//~ THEY HELP IN ORGANIZING CODE, AVOIDING DUPLICATION, AND MAKING PROGRAMS MODULAR AND MAINTAINABLE. WE WILL COVER FUNCTION DECLARATIONS, 
//~ EXPRESSIONS, ARROW FUNCTIONS, PARAMETERS, RETURN VALUES, SCOPE, CLOSURES, AND HIGHER-ORDER FUNCTIONS.

//& FUNCTION 
// A function is a block of code that performs a specific task. It can be defined once and called multiple times throughout the program. Functions can take inputs (parameters) and return outputs (return values).

//& FUNCTION DECLARATION
// A function declaration defines a named function. It consists of the 'function' keyword, followed by the function name, a list of parameters in parentheses, and a block of code enclosed in curly braces.

function greet(name) {
    return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("Alice")); // Output: Hello, Alice!

//& FUNCTION EXPRESSION
// A function expression defines a function as part of an expression. It can be anonymous or named and is often assigned to a variable.

const add = function(a, b) {
    return a + b;
};

// Calling the function
console.log(add(5, 3)); // Output: 8

//& ARROW FUNCTION
// Arrow functions provide a shorter syntax for writing functions. They are especially useful for writing concise functions.

const multiply = (x, y) => x * y;

// Calling the arrow function
console.log(multiply(4, 6)); // Output: 24

//& PARAMETERS AND ARGUMENTS
// Parameters are variables listed in the function definition, while arguments are the actual values passed to the function when it is called.

function subtract(a, b) {
    return a - b;
}

// Calling the function with arguments
console.log(subtract(10, 4)); // Output: 6

//& RETURN VALUES
// Functions can return values using the 'return' statement. If no return statement is provided, the function returns 'undefined'.

function square(num) {
    return num * num;
}

// Calling the function and storing the return value
const result = square(5);
console.log(result); // Output: 25

//& SCOPE
// Scope determines the accessibility of variables. JavaScript has global scope and local scope (function scope).

let globalVar = "I am global";

function checkScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

checkScope();
// console.log(localVar); // Unaccessible, would throw an error

//& CLOSURES
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are often used to create private variables.

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer Variable: ${outerVar}`);
        console.log(`Inner Variable: ${innerVar}`);
    };
}

const closureExample = outerFunction("I am from outer");
closureExample("I am from inner");

//& HIGHER-ORDER FUNCTIONS
// Higher-order functions are functions that can take other functions as arguments or return functions as their result. They are commonly used for operations like map, filter, and reduce.

const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Using reduce to calculate the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// using forEach to iterate over each number and log it
numbers.forEach(num => console.log(num)); // Output: 1 2 3 4 5 

// Using a higher-order function to create a function that adds a specific number to its input
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = createAdder(5);
console.log(addFive(10)); // Output: 15

// using a higher-order function to create a function that multiplies by a specific number
function createMultiplier(x) {
    return function(y) {
        return x * y;
    };
}//output: 15

// Using the createMultiplier function to create a function that multiplies by 3
const multiplyByThree = createMultiplier(3);
console.log(multiplyByThree(7)); // Output: 21

//& RECURSION
// Recursion is a technique where a function calls itself to solve a problem. It is often used for tasks that can be broken down into smaller, similar sub-tasks.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120

//& FUNCTION SCOPE AND BLOCK SCOPE
// In JavaScript, functions create their own scope. Variables declared within a function are not accessible outside of it. Additionally, ES6 introduced block scope with the 'let' and 'const' keywords.

function functionScopeExample() {
    var functionScopedVar = "I am function scoped";
    let blockScopedVar = "I am block scoped";
    const anotherBlockScopedVar = "I am also block scoped";

    console.log(functionScopedVar); // Accessible
    console.log(blockScopedVar); // Accessible
    console.log(anotherBlockScopedVar); // Accessible
}

functionScopeExample();

// console.log(functionScopedVar); // Unaccessible, would throw an error
// console.log(blockScopedVar); // Unaccessible, would throw an error
// console.log(anotherBlockScopedVar); // Unaccessible, would throw an error    

//& FUNCTION HOISTING
// Function declarations are hoisted, meaning they can be called before they are defined in the code. However, function expressions and arrow functions are not hoisted.

console.log(hoistedFunction()); // Output: "This function is hoisted!"

function hoistedFunction() {
    return "This function is hoisted!";
}

// The following will throw an error because function expressions are not hoisted
// console.log(notHoistedFunction()); // Uncaught ReferenceError: Cannot access 'notHoistedFunction' before initialization

const notHoistedFunction = function() {
    return "This function is not hoisted!";
};

//& DEFAULT PARAMETERS
// Functions can have default parameter values, which are used if no argument is provided for that parameter.

function greetWithDefault(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetWithDefault()); // Output: Hello, Guest!
console.log(greetWithDefault("Bob")); // Output: Hello, Bob!

//& REST PARAMETERS
// Rest parameters allow a function to accept an indefinite number of arguments as an array.

function sumAll(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
console.log(sumAll(5, 10, 15)); // Output: 30

//& CALLBACK FUNCTIONS
// A callback function is a function passed into another function as an argument and is executed after some operation has been completed.

function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched!";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output: Data fetched!
});

//& CONCLUSION
// Functions are a fundamental concept in JavaScript that allow for code reusability, modularity, and maintainability. Understanding how to define, call, and work with functions is essential for any JavaScript developer.        


