//^                                               CHAPTER - 03 OPERATORS & CONDITIONAL STATEMENT IN JAVASCRIPT                                              //

//& COMMENTS IN JAVA.SCRIPT

/* COMMENTS ARE USED TO EXPLAIN THE CODE AND MAKE IT MORE READABLE. THEY ARE IGNORED BY THE JAVASCRIPT ENGINE DURING EXECUTION. 
AND ALL TYPE WILL BE IGNORED IN JAVASCRIPT. */

//^ 1. Single line comment
// This is a single line comment in JavaScript
// console.log("Hello, World!"); // This line prints "Hello, World!" to the console but because of the comment, it will not be executed.

//^ 2. Multi line comment
/* 
This is a multi-line comment in JavaScript.
You can write multiple lines of comments here.
*/

//& OPERATORS IN JAVASCRIPT

/* OPERATORS ARE SPECIAL SYMBOLS OR CHARACTERS THAT PERFORM OPERATIONS ON VALUES OR VARIABLES.
THEY CAN BE USED TO PERFORM ARITHMETIC, ASSIGNMENT, COMPARISON, LOGICAL, AND OTHER OPERATIONS. */

//^ 1. Arithmetic Operators
// Arithmetic operators are used to perform mathematical operations on numbers.
let a = 10;
let b = 5;

// Basic arithmetic operations
console.log("Addition: " + (a + b)); // Addition: 15
console.log("Subtraction: " + (a - b)); // Subtraction: 5
console.log("Multiplication: " + (a * b)); // Multiplication: 50
console.log("Division: " + (a / b)); // Division: 2

// Advanced arithmetic operations
console.log("Modulus: " + (a % b)); // Modulus: 0
console.log("Exponentiation: " + (a ** b)); // Exponentiation: 100000

// Unary operators
console.log("Pre-Increment: " + (++a)); //  pre-Increment: 11 increment operator increases the value of a by 1 before using it in the expression
console.log("Pre-Decrement: " + (--b)); //  pre-Decrement: 4  decrement operator decreases the value of b by 1 before using it in the expression

console.log("Post-Increment: " + (a++)); //  post-Increment: 11  increment operator increases the value of a by 1 after using it in the expression
console.log("Post-Decrement: " + (b--)); //  post-Decrement: 4  decrement operator decreases the value of b by 1 after using it in the expression


//^ 2. Assignment Operators
// Assignment operators are used to assign values to variables.
let c = 20;
c += 5; // Equivalent to c = c + 5
console.log("c after += 5: " + c); // c after += 5: 25
c -= 10; // Equivalent to c = c - 10
console.log("c after -= 10: " + c); // c after -= 10: 15
c *= 2; // Equivalent to c = c * 2
console.log("c after *= 2: " + c); // c after *= 2: 30
c /= 3; // Equivalent to c = c / 3
console.log("c after /= 3: " + c); // c after /= 3: 10
c %= 4; // Equivalent to c = c % 4
console.log("c after %= 4: " + c); // c after %= 4: 2

//^ 3. Comparison Operators
// Comparison operators are used to compare two values and return a boolean result (true or false). 
