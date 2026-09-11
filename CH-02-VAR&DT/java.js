//^                                            CHAPTER 2: VARIABLES AND DATA TYPES IN JAVASCRIPT                                                           //

//~ In this chapter, we will explore the concept of variables and data types in JavaScript. Variables are used to store and manipulate data, while data 
//~types define the kind of values that can be stored in variables. Understanding variables and data types is essential for writing effective JavaScript code.

//& VARIABLES IN JAVASCRIPT

/* Variables are containers for storing data values. In JavaScript, you can declare a variable using the var, let, or const keywords. */
/* The var keyword is used to declare variables with function scope, while let and const are block-scoped. It is recommended to use let and const for 
variable declarations in modern JavaScript.

In memory, variables are stored as key-value pairs, where the key is the variable name and the value is the data stored in the variable. */

//! NOTE = WHATEVER WE ARE CODING HERE YOU CAN CHECK OUT THE index.html FILE FOR THE COMPLETE EXAMPLE.YOU CAN ALSO CREATE A PLAYGROUND FOR THE FILES AND RUN THE CODE IN THE BROWSER TO SEE THE OUTPUT.

//&TYPES OF VARIABLES IN JavaScript

age = 19; // Here, 'age' is the variable name (key), and 19 is the value stored in the variable.
name = "tanmay"; // Here, 'name' is the variable name (key), and 'tanmay' is the value stored in the variable.
console.log(name); // This will output: tanmay
console.log(age); // This will output: age is 19

x=null; // Here, 'x' is the variable name (key), and null is the value stored in the variable.
console.log(x); // This will output: null

y=undefined; // Here, 'y' is the variable name (key), and undefined is the value stored in the variable.
console.log(y); // This will output: undefined

price = 19.99; // Here, 'price' is the variable name (key), and 19.99 is the value stored in the variable.
console.log(price); // This will output: 19.99

//& BOOLEAN VARIABLES

isStudent = true; // Here, 'isStudent' is the variable name (key), and true is the value stored in the variable.
console.log(isStudent); // This will output: true

isGraduated = false; // Here, 'isGraduated' is the variable name (key), and false is the value stored in the variable.
console.log(isGraduated); // This will output: false

isLoggedIn = true; // Here, 'isLoggedIn' is the variable name (key), and true is the value stored in the variable.
console.log(isLoggedIn); // This will output: true  

isAdmin = false; // Here, 'isAdmin' is the variable name (key), and false is the value stored in the variable.
console.log(isAdmin); // This will output: false

isAvailable = true; // Here, 'isAvailable' is the variable name (key), and true is the value stored in the variable.
console.log(isAvailable); // This will output: true

isCompleted = false; // Here, 'isCompleted' is the variable name (key), and false is the value stored in the variable.
console.log(isCompleted); // This will output: false    

isFollowing = true; // Here, 'isFollowing' is the variable name (key), and true is the value stored in the variable.
console.log(isFollowing); // This will output: true

//? JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE, MEANING THAT VARIABLES CAN HOLD VALUES OF DIFFERENT DATA TYPES AND CAN CHANGE THEIR TYPE DURING EXECUTION.//
/* WE CAN ASSIGN DIFFERENT DATA TYPES TO THE SAME VARIABLE AT DIFFERENT POINTS IN TIME. FOR EXAMPLE, WE CAN ASSIGN A STRING VALUE TO A VARIABLE AND LATER ASSIGN A NUMBER VALUE TO THE SAME VARIABLE. THIS FLEXIBILITY ALLOWS FOR DYNAMIC AND ADAPTIVE CODING PRACTICES. */

age = 25; // Initially, 'age' is assigned a number value.
console.log(age); // This will output: 25

age = "twenty-five"; // Now, 'age' is reassigned a string value.
console.log(age); // This will output: twenty-five 

name = "tony"; // Initially, 'name' is assigned a string value.
console.log(name); // This will output: tony

name = 123; // Now, 'name' is reassigned a number value.
console.log(name); // This will output: 123

//& VARIABLES RULES IN JAVASCRIPT
/** 
 * 1. Variable names must start with a letter, underscore, or dollar sign.
 * 2. Variable names cannot contain spaces or special characters (except underscore and dollar sign).
 * 3. Variable names are case-sensitive."A"& "a" are different variables.
 * 4. Variable names cannot be reserved keywords in JavaScript.
 * 5. Variable names should be descriptive and meaningful to improve code readability.
 * 6. only letters,digits, underscores, and dollar signs are allowed in variable names.
 * 7. only letters, digits, underscores, and dollar signs should be 1st character of variable name.
 * 8. Variable names should be concise but not so short as to be unclear.
 * 9. Variable names should follow a consistent naming convention throughout the codebase.
 * 10. camel case is commonly used for variable names in JavaScript, where the first word is lowercase and subsequent words are capitalized (e.g., myVariableName).
 * 11. snake case is also used for variable names in JavaScript, where words are separated by underscores (e.g., my_variable_name).
 * 12. kebab case is also used for variable names in JavaScript, where words are separated by hyphens (e.g., my-variable-name).
 * 13. Pascal case is also used for variable names in JavaScript, where the first letter of each word is capitalized (e.g., MyVariableName).
 * 14. Avoid using single-letter variable names, except for loop counters or temporary variables.
 */

//& let, const, and var in JavaScript
/* In JavaScript, you can declare variables using the let, const, and var keywords. Each keyword has its own characteristics and use cases. */

/* The let keyword is used to declare block-scoped variables that can be reassigned. It is commonly used for variables that may change their value over time. */
/* The const keyword is used to declare block-scoped variables that cannot be reassigned. It is commonly used for variables that should remain constant throughout the program. */
/* The var keyword is used to declare function-scoped variables that can be reassigned. However, it is generally recommended to use let and const instead of var in modern JavaScript due to their block-scoping behavior and better readability. */

let fullName = "tony stark"; // Here, 'fullName' is declared using let and can be reassigned.
console.log(fullName); // This will output: tony stark

var city = "new york"; // Here, 'city' is declared using var and can be reassigned.
console.log(city); // This will output: new york
//! well nowadays , it is recommended to use let and const instead of var for variable declarations in modern JavaScript due to their block-scoping behavior and better readability.  

const pi = 3.14; // Here, 'pi' is declared using const and cannot be reassigned.
console.log(pi); // This will output: 3.14


let a; // Here, 'a' is declared using let and can be reassigned.
a = 10; // Now, 'a' is assigned a value of 10.
console.log(a); // This will output: 10

a = 20; // Now, 'a' is reassigned a value of 20.
console.log(a); // This will output: 20

const b = 5; // Here, 'b' is declared using const and cannot be reassigned.
console.log(b); // This will output: 5

// b = 10; // This will throw an error because 'b' is a constant and cannot be reassigned.


//& block in JavaScript (We will cover this in detail in the chapter -  "Functions in JavaScript")
/* A block in JavaScript is a section of code enclosed within curly braces {}. It is used to group statements together and define the scope of variables declared within it. 
Blocks are commonly used in control structures like if statements, loops, and functions. */

{
    let x = 10; // Here, 'x' is declared within the block and is only accessible within this block.
    console.log(x); // This will output: 10
}


//& DATA TYPES IN JAVASCRIPT (Number, String, Boolean, Null, Undefined, Object, Symbol, BigInt)

/* JavaScript has several built-in data types that can be used to represent different kinds of values. The main data types in JavaScript are: */

/* 1. Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14 

2. String: Represents sequences of characters enclosed in single or double quotes. Example: "Hello, World!" 

3. Boolean: Represents logical values, either true or false. Example: true, false 

4. Null: Represents the intentional absence of any object value. Example: null 

5. Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined 

6. Object: Represents complex data structures that can hold multiple values and properties. Example: { name: "John", age: 30 } 

7. Symbol (ES6): Represents unique and immutable values that can be used as identifiers for object properties. Example: Symbol("id") 

8. BigInt (ES11): Represents integers with arbitrary precision, allowing for the representation of very large numbers. Example: 9007199254740991n */

/* JavaScript is a dynamically typed language, meaning that variables can hold values of different data types and can change their type during execution. 
This flexibility allows for dynamic and adaptive coding practices. */

