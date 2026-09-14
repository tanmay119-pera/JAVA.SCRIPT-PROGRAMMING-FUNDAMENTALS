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

//~ 1. Arithmetic Operators

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


//~ 2. Assignment Operators

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

//~ 3. Comparison Operators

// Comparison operators are used to compare two values and return a boolean result (true or false).

// Equal to is used to compare two values and return true if they are equal, and false if they are not equal.
console.log("Equal: " + (a == b)); // Equal: false

// Not Equal to is used to compare two values and return true if they are not equal, and false if they are equal.
console.log("Not Equal: " + (a != b)); // Not Equal: true

// Strict Equal to is used to compare both value and type
console.log("Strict Equal: " + (a === b)); // Strict Equal: false

// Strict Not Equal to is used to compare both value and type
console.log("Strict Not Equal: " + (a !== b)); // Strict Not Equal: true

// Greater Than is used to compare two values and return true if the left value is greater than the right value, and false if it is not.
console.log("Greater Than: " + (a > b)); // Greater Than: true

// Less Than is used to compare two values and return true if the left value is less than the right value, and false if it is not.
console.log("Less Than: " + (a < b)); // Less Than: false

// Greater Than or Equal is used to compare two values and return true if the left value is greater than or equal to the right value, and false if it is not.
console.log("Greater Than or Equal: " + (a >= b)); // Greater Than or Equal: true

// Less Than or Equal is used to compare two values and return true if the left value is less than or equal to the right value, and false if it is not.
console.log("Less Than or Equal: " + (a <= b)); // Less Than or Equal: false

//~ 4. Logical Operators

// Logical operators are used to combine multiple boolean expressions and return a boolean result (true or false).

let x = true;
let y = false;

// AND operator returns true if both operands are true, otherwise it returns false.
console.log("AND: " + (x && y)); // AND: false

// OR operator returns true if at least one of the operands is true, otherwise it returns false.
console.log("OR: " + (x || y)); // OR: true

// NOT operator returns the opposite boolean value of the operand.
console.log("NOT x: " + (!x)); // NOT x: false
console.log("NOT y: " + (!y)); // NOT y: true

//~ 5. Ternary Operator

/* The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is 
true, and a value to return if the condition is false.*/
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote); // Can vote: Yes

let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is: " + result); // The number is: Even

//~ 6. Type Operators
// Type operators are used to check the type of a variable or value.

// typeof operator returns a string indicating the type of the operand.
console.log("Type of a: " + typeof a); // Type of a: number
console.log("Type of x: " + typeof x); // Type of x: boolean
console.log("Type of canVote: " + typeof canVote); // Type of canVote: string

// instanceof operator checks if an object is an instance of a specific class or constructor function.
let date = new Date();
console.log("Is date an instance of Date? " + (date instanceof Date)); // Is date an instance of Date? true 

let arr = [1, 2, 3];
console.log("Is arr an instance of Array? " + (arr instanceof Array)); // Is arr an instance of Array? true 

//~ 7. Bitwise Operators

// Bitwise operators are used to perform operations on the binary representations of numbers.

let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011

// AND operator
console.log("Bitwise AND: " + (num1 & num2)); // Bitwise AND: 1 (Binary: 0001)

// OR operator
console.log("Bitwise OR: " + (num1 | num2)); // Bitwise OR: 7 (Binary: 0111)

// XOR operator
console.log("Bitwise XOR: " + (num1 ^ num2)); // Bitwise XOR: 6 (Binary: 0110)

// NOT operator
console.log("Bitwise NOT num1: " + (~num1)); // Bitwise NOT num1: -6 (Binary: ...11111010)

// Left shift operator
console.log("Left Shift num1 by 1: " + (num1 << 1)); // Left Shift num1 by 1: 10 (Binary: 1010)

// Right shift operator
console.log("Right Shift num1 by 1: " + (num1 >> 1)); // Right Shift num1 by 1: 2 (Binary: 0010)

// Unsigned right shift operator
console.log("Unsigned Right Shift num1 by 1: " + (num1 >>> 1)); // Unsigned Right Shift num1 by 1: 2 (Binary: 0010) 


//& CONDITIONAL STATEMENTS IN JAVASCRIPT

/* CONDITIONAL STATEMENTS ARE USED TO PERFORM DIFFERENT ACTIONS BASED ON DIFFERENT CONDITIONS. THEY ALLOW YOU TO CONTROL THE FLOW OF YOUR PROGRAM BY 
EXECUTING CERTAIN BLOCKS OF CODE ONLY WHEN SPECIFIC CONDITIONS ARE MET. AND THERE ARE SEVERAL TYPES OF CONDITIONAL STATEMENTS IN JAVASCRIPT.

1. If Statement : IT EXECUTES A BLOCK OF CODE IF A SPECIFIED CONDITION IS TRUE.AND IT CAN BE USED ALONE OR WITH ELSE OR ELSE IF STATEMENTS.
2. If...Else Statement : IT EXECUTES ONE BLOCK OF CODE IF A CONDITION IS TRUE, AND ANOTHER BLOCK OF CODE IF THE CONDITION IS FALSE.
3. If...Else If...Else Statement : IT EXECUTES DIFFERENT BLOCKS OF CODE BASED ON MULTIPLE CONDITIONS.
4. Switch Statement : IT EVALUATES AN EXPRESSION AND EXECUTES THE BLOCK OF CODE CORRESPONDING TO THE MATCHING CASE.*/

//~ 1. If Statement

// The if statement executes a block of code if a specified condition is true.
let temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day!"); // It's a hot day!
}

//example of if statement with string values
let weather = "rainy";

if (weather === "rainy") {
    console.log("Don't forget to take an umbrella!"); // Don't forget to take an umbrella!
}  


//~ 2. If...Else Statement

// The if...else statement executes one block of code if a condition is true, and another block of code if the condition is false.
let time = 10;

if (time < 12) {
    console.log("Good morning!"); // Good morning!
} else {
    console.log("Good afternoon!");
}

//example of if...else statement with string values
let dayOfWeek = "Saturday";

if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    console.log("It's the weekend!"); // It's the weekend!
} else {
    console.log("It's a weekday.");
}

//~ 3. If...Else If...Else Statement

// The if...else if...else statement executes different blocks of code based on multiple conditions.
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // Grade: B
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

//example of if...else if...else statement with string values
let color = "blue";

if (color === "red") {
    console.log("The color is red.");
} else if (color === "green") {
    console.log("The color is green.");
} else if (color === "blue") {
    console.log("The color is blue."); // The color is blue.
} else {
    console.log("Unknown color.");
}   

//~ 4. Switch Statement

// The switch statement evaluates an expression and executes the block of code corresponding to the matching case.
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Wednesday
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}   

//example of switch statement with string values
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("This is a banana.");
        break;
    case "apple":
        console.log("This is an apple."); // This is an apple.
        break;
    case "orange":
        console.log("This is an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}   

//& ABOUT MDN DOCS 
/* The Mozilla Developer Network (MDN) provides comprehensive documentation for JavaScript, including information about operators and conditional statements. 
so you can refer to the MDN documentation for more details and examples on these topics. You can find the documentation for operators here: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators and for conditional statements here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling and you can also explore other JavaScript topics on the 
MDN website.

thus, by referring to the MDN documentation, you can gain a deeper understanding of operators and conditional statements in JavaScript and enhance your 
programming skills and will help you write more efficient and effective code.*/

//& SUMMARY

/* In this chapter, we have learned about operators and conditional statements in JavaScript.
Operators are special symbols or characters that perform operations on values or variables. We have covered arithmetic, assignment, comparison, logical, ternary, type, and bitwise operators.

Conditional statements allow us to control the flow of our program by executing certain blocks of code only when specific conditions are met. We have explored if statements, if...else statements, if...else if...else statements, and switch statements.

By understanding and using operators and conditional statements effectively, we can write more powerful and flexible JavaScript programs. */
