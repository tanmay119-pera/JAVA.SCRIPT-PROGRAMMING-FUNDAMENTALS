//^                                                    CHAPTER 6: FUNCTIONS IN JAVASCRIPT                                                                   //

//~ IN THIS CHAPTER, WE WILL LEARN ABOUT FUNCTIONS IN JAVASCRIPT. FUNCTIONS ARE REUSABLE BLOCKS OF CODE DESIGNED TO PERFORM A PARTICULAR TASK.
//~ THEY HELP IN ORGANIZING CODE, AVOIDING DUPLICATION, AND MAKING PROGRAMS MODULAR AND MAINTAINABLE. WE WILL COVER FUNCTION DECLARATIONS, 
//~ EXPRESSIONS, ARROW FUNCTIONS, PARAMETERS, RETURN VALUES, SCOPE, CLOSURES, AND HIGHER-ORDER FUNCTIONS.

//& 1. FUNCTION DECLARATION
function greet() {
    console.log("Hello, World! Welcome to Chapter 6 on Functions.");
}
greet(); // Calling / Invoking the function

//& 2. FUNCTION PARAMETERS AND ARGUMENTS
function greetUser(userName) {
    console.log("Welcome back, " + userName + "!");
}
greetUser("Tanmay");
greetUser("Alice");

// Function with multiple parameters
function add(num1, num2) {
    return num1 + num2; // Return statement passes the output back
}
let sumResult = add(15, 25);
console.log("Sum: " + sumResult); // Output: Sum: 40

//& 3. DEFAULT PARAMETERS (ES6)
function calculateTotal(price, taxRate = 0.05) {
    return price + (price * taxRate);
}
console.log("Total with default tax: " + calculateTotal(100)); // 105
console.log("Total with custom tax: " + calculateTotal(100, 0.10)); // 110

//& 4. REST PARAMETERS (ES6)
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum All: " + sumAll(1, 2, 3, 4, 5)); // 15

//& 5. FUNCTION EXPRESSIONS (Anonymous & Named)
const multiply = function(x, y) {
    return x * y;
};
console.log("Product: " + multiply(4, 5)); // 20

//& 6. ARROW FUNCTIONS (ES6)
// Concise syntax for writing functions
const square = (n) => n * n;
console.log("Square of 6: " + square(6)); // 36

const sayHello = () => console.log("Hello from an Arrow Function!");
sayHello();

// Multi-line arrow function
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
};
console.log("Is 8 even? " + isEven(8)); // true

//& 7. SCOPE: GLOBAL, FUNCTION, AND BLOCK SCOPE
let globalVar = "I am global";

function testScope() {
    let functionVar = "I am function scoped";
    if (true) {
        let blockVar = "I am block scoped";
        var functionScopedVar = "I am accessible anywhere inside testScope";
        console.log(blockVar);
    }
    console.log(functionVar);
    console.log(functionScopedVar);
    // console.log(blockVar); // ❌ ReferenceError!
}
testScope();

//& 8. CLOSURES IN JAVASCRIPT
// A closure gives a function access to its outer function's scope even after the outer function has returned.
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log("Counter 1: " + counter()); // 1
console.log("Counter 2: " + counter()); // 2
console.log("Counter 3: " + counter()); // 3

//& 9. HIGHER-ORDER FUNCTIONS & CALLBACKS
// Functions that take other functions as arguments or return functions.
function processArray(arr, callback) {
    const result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

const numbersList = [1, 2, 3, 4];
const doubled = processArray(numbersList, (x) => x * 2);
console.log("Doubled list: ", doubled); // [2, 4, 6, 8]

// Built-in higher-order methods: map, filter, reduce
const cubes = numbersList.map(n => n ** 3);
console.log("Cubes: ", cubes); // [1, 8, 27, 64]

//& 10. IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
(function() {
    const privateKey = "SEC_9988";
    console.log("IIFE executed immediately! Private key protected: " + privateKey);
})();

//& CONCLUSION
/* Functions are the primary building blocks of modular, scalable JavaScript applications.
Mastering arrow functions, closures, and higher-order callbacks is essential for mastering modern frameworks like React and Node.js. */
