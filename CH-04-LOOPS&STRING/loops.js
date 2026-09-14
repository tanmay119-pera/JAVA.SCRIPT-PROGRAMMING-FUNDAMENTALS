//^                                                      CHAPTER-04 LOOPS & STRINGS IN JAVASCRIPT                                                                     //

//~ IN THIS CHAPTER, WE WILL LEARN ABOUT LOOPS AND STRINGS IN JAVASCRIPT. LOOPS ARE USED TO REPEAT A BLOCK OF CODE MULTIPLE TIMES UNTIL A SPECIFIED CONDITION IS MET.
//~ STRINGS ARE SEQUENCES OF CHARACTERS USED TO REPRESENT TEXTUAL DATA. WE WILL COVER DIFFERENT TYPES OF LOOPS, STRING METHODS, AND PROVIDE EXAMPLES TO ILLUSTRATE THEIR USAGE IN JAVASCRIPT.

//& LOOPS IN JAVASCRIPT

/* LOOPS ARE USED TO REPEAT A BLOCK OF CODE MULTIPLE TIMES UNTIL A SPECIFIED CONDITION IS MET. THEY HELP IN AUTOMATING REPETITIVE TASKS AND REDUCING CODE REDUNDANCY. 
AND THERE ARE SEVERAL TYPES OF LOOPS IN JAVASCRIPT.

1. For Loop : IT REPEATS A BLOCK OF CODE A SPECIFIED NUMBER OF TIMES.
2. While Loop : IT REPEATS A BLOCK OF CODE AS LONG AS A SPECIFIED CONDITION IS TRUE.
3. Do...While Loop : IT EXECUTES A BLOCK OF CODE ONCE, AND THEN REPEATS THE LOOP AS LONG AS A SPECIFIED CONDITION IS TRUE.
4. For...In Loop : IT ITERATES OVER THE PROPERTIES OF AN OBJECT.
5. For...Of Loop : IT ITERATES OVER THE VALUES OF AN ITERABLE OBJECT (LIKE ARRAYS, STRINGS, MAPS, SETS, ETC.). */   

//~1. For Loop
// USED FOR REPEATING A BLOCK OF CODE A SPECIFIED NUMBER OF TIMES.

for (let i = 0; i < 5; i++) { // i++ STANDS FOR INCREMENTING THE VALUE OF I BY 1 AFTER EACH ITERATION.
    console.log("For Loop Iteration: " + i);
}
//OUTPUT :
// For Loop Iteration: 0
// For Loop Iteration: 1
// For Loop Iteration: 2
// For Loop Iteration: 3
// For Loop Iteration: 4

//ONE MORE EXAMPLE OF FOR LOOP

const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);
}
//OUTPUT :
// Fruit: Apple
// Fruit: Banana
// Fruit: Cherry

//ANOTHER EXAMPLE OF FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log("Counting: " + i);
}
//OUTPUT :
// Counting: 1
// Counting: 2
// Counting: 3
// Counting: 4
// Counting: 5
// Counting: 6
// Counting: 7
// Counting: 8
// Counting: 9
// Counting: 10

//ANOTHER EXAMPLE OF FOR LOOP
for (let i = 10; i > 0; i--) {
    console.log("Countdown: " + i);
}
//OUTPUT :
// Countdown: 10
// Countdown: 9
// Countdown: 8
// Countdown: 7
// Countdown: 6
// Countdown: 5
// Countdown: 4
// Countdown: 3
// Countdown: 2
// Countdown: 1

//ANOTHER EXAMPLE OF FOR LOOP
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Even Number: " + i);
    }
}
//OUTPUT :
// Even Number: 2
// Even Number: 4
// Even Number: 6
// Even Number: 8
// Even Number: 10

//~2. While Loop
// USED FOR REPEATING A BLOCK OF CODE AS LONG AS A SPECIFIED CONDITION IS TRUE.

let j = 0;
while (j < 5) {
    console.log("While Loop Iteration: " + j);
    j++;
}
//OUTPUT :
// While Loop Iteration: 0
// While Loop Iteration: 1
// While Loop Iteration: 2
// While Loop Iteration: 3
// While Loop Iteration: 4  

//ANOTHER EXAMPLE OF WHILE LOOP
let m = 0;
while (m < fruits.length) {
    console.log("Fruit from While Loop: " + fruits[m]);
    m++;
}
//OUTPUT :
// Fruit from While Loop: Apple
// Fruit from While Loop: Banana
// Fruit from While Loop: Cherry

//ANOTHER EXAMPLE OF WHILE LOOP
let n = 0;
while (n < 3) {
    console.log("Counting: " + n);
    n++;
}
//OUTPUT :
// Counting: 0
// Counting: 1
// Counting: 2

//ANOTHER EXAMPLE OF WHILE LOOP
let p = 10;
while (p > 0) {
    console.log("Countdown: " + p);
    p--;
}
//OUTPUT :
// Countdown: 10
// Countdown: 9
// Countdown: 8
// Countdown: 7
// Countdown: 6
// Countdown: 5
// Countdown: 4
// Countdown: 3
// Countdown: 2
// Countdown: 1

//ANOTHER EXAMPLE OF WHILE LOOP
let q = 1;
while (q <= 10) {
    if (q % 2 === 0) {
        console.log("Even Number: " + q);
    }
    q++;
}
//OUTPUT :
// Even Number: 2
// Even Number: 4
// Even Number: 6
// Even Number: 8
// Even Number: 10

//~3. Do...While Loop
// USED FOR EXECUTING A BLOCK OF CODE ONCE, AND THEN REPEATING THE LOOP AS LONG AS A SPECIFIED CONDITION IS TRUE.

let k = 0;
do {
    console.log("Do...While Loop Iteration: " + k);
    k++;
} while (k < 5);
//OUTPUT :
// Do...While Loop Iteration: 0
// Do...While Loop Iteration: 1
// Do...While Loop Iteration: 2
// Do...While Loop Iteration: 3
// Do...While Loop Iteration: 4

//~4. For...In Loop
// USED FOR ITERATING OVER THE PROPERTIES OF AN OBJECT.

const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}
//OUTPUT :
// name: John
// age: 30
// city: New York

//~5. For...Of Loop
// USED FOR ITERATING OVER THE VALUES OF AN ITERABLE OBJECT (LIKE ARRAYS, STRINGS, MAPS, SETS, ETC.).

const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
    console.log("For...Of Loop Value: " + num);
}   
//OUTPUT :
// For...Of Loop Value: 10
// For...Of Loop Value: 20
// For...Of Loop Value: 30
// For...Of Loop Value: 40
// For...Of Loop Value: 50

//ANOTHER EXAMPLE OF FOR...OF LOOP
const str = "Hello";
for (const char of str) {
    console.log("Character: " + char);
}  
//OUTPUT :
// Character: H
// Character: e
// Character: l
// Character: l
// Character: o

//ANOTHER EXAMPLE OF FOR...OF LOOP
const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
    console.log("Set Value: " + value);
}   
//OUTPUT :
// Set Value: 1
// Set Value: 2
// Set Value: 3
// Set Value: 4
// Set Value: 5

//ANOTHER EXAMPLE OF FOR...OF LOOP  
const map = new Map([["a", 1], ["b", 2], ["c", 3]]);
for (const [key, value] of map) {
    console.log("Map Key: " + key + ", Value: " + value);
}
//OUTPUT :
// Map Key: a, Value: 1
// Map Key: b, Value: 2
// Map Key: c, Value: 3

//~ CONDITIONAL TERNARY OPERATOR
// THE CONDITIONAL (TERNARY) OPERATOR IS A SHORTCUT FOR THE IF...ELSE STATEMENT. IT TAKES THREE OPERANDS: A CONDITION, AN EXPRESSION TO EXECUTE IF THE 
// CONDITION IS TRUE, AND AN EXPRESSION TO EXECUTE IF THE CONDITION IS FALSE.AND IT IS USED TO ASSIGN A VALUE TO A VARIABLE BASED ON A CONDITION.

if (true) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}
// OUTPUT : Condition is true
// USING CONDITIONAL TERNARY OPERATOR
true ? console.log("Condition is true") : console.log("Condition is false");
// OUTPUT : Condition is true

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const age = 18;
const canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
// OUTPUT : Yes, you can vote.

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const number = 10;
const result = (number % 2 === 0) ? "Even Number" : "Odd Number";
console.log(result);
// OUTPUT : Even Number

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const score = 85;
const grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" :
              (score >= 60) ? "D" : "F";
console.log("Grade: " + grade);
// OUTPUT : Grade: B

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log("Discount: " + (discount * 100) + "%");
// OUTPUT : Discount: 10%

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const temperature = 30;
const weather = (temperature > 25) ? "Hot" : "Cold";
console.log("Weather: " + weather);
// OUTPUT : Weather: Hot

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const isLoggedIn = false;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
// OUTPUT : Please log in.

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const day = "Saturday";
const activity = (day === "Saturday" || day === "Sunday") ? "Relax" : "Work";
console.log("Activity: " + activity);
// OUTPUT : Activity: Relax

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const number2 = -5;
const sign = (number2 > 0) ? "Positive" : (number2 < 0) ? "Negative" : "Zero";
console.log("Sign: " + sign);
// OUTPUT : Sign: Negative

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const isRaining = true;
const action = isRaining ? "Take an umbrella." : "Enjoy the sunshine.";
console.log(action);
// OUTPUT : Take an umbrella.

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const speed = 80;
const speedLimit = 60;
const speedMessage = (speed > speedLimit) ? "You are speeding!" : "You are within the speed limit.";
console.log(speedMessage);
// OUTPUT : You are speeding!

//& STRING IN JAVASCRIPT
// A STRING IS A SEQUENCE OF CHARACTERS USED TO REPRESENT TEXTUAL DATA. IN JAVASCRIPT, STRINGS ARE IMMUTABLE, MEANING ONCE A STRING IS CREATED, IT
//  CANNOT BE MODIFIED. HOWEVER, YOU CAN CREATE NEW STRINGS BASED ON EXISTING ONES. STRINGS CAN BE CREATED USING SINGLE QUOTES (' '), DOUBLE QUOTES 
// (" "), OR BACKTICKS (` `) FOR TEMPLATE LITERALS.

const singleQuoteString = 'Hello, World!';
const doubleQuoteString = "Hello, JavaScript!";
const templateLiteralString = `Hello, Template Literals!`;

console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateLiteralString);
// OUTPUT:
// Hello, World!
// Hello, JavaScript!
// Hello, Template Literals!

// ANOTHER EXAMPLE OF STRING
const name = "Alice";
const greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting);
// OUTPUT: Hello, Alice! Welcome to JavaScript.

// ANOTHER EXAMPLE OF STRING
const multiLineString = `This is a string
that spans multiple
lines using template literals.`;
console.log(multiLineString);
/// OUTPUT:
// This is a string
// that spans multiple
// lines using template literals.

// ANOTHER EXAMPLE OF STRING
const str1 = "Hello";
const str2 = "World";
const combinedString = str1 + " " + str2 + "!";
console.log(combinedString);
// OUTPUT: Hello World!

// ANOTHER EXAMPLE OF STRING
const lengthOfString = combinedString.length;
console.log("Length of combined string: " + lengthOfString);
// OUTPUT: Length of combined string: 12

// ANOTHER EXAMPLE OF STRING
const upperCaseString = combinedString.toUpperCase();
console.log("Uppercase: " + upperCaseString);
// OUTPUT: Uppercase: HELLO WORLD!

// ANOTHER EXAMPLE OF STRING
const lowerCaseString = combinedString.toLowerCase();
console.log("Lowercase: " + lowerCaseString);
// OUTPUT: Lowercase: hello world!

// ANOTHER EXAMPLE OF STRING
const substring = combinedString.substring(0, 5);
console.log("Substring: " + substring);
// OUTPUT: Substring: Hello

// ANOTHER EXAMPLE OF STRING
const indexOfWorld = combinedString.indexOf("World");
console.log("Index of 'World': " + indexOfWorld);
// OUTPUT: Index of 'World': 6

// ANOTHER EXAMPLE OF STRING
const replacedString = combinedString.replace("World", "JavaScript");
console.log("Replaced String: " + replacedString);
// OUTPUT: Replaced String: Hello JavaScript!

// ANOTHER EXAMPLE OF STRING
const splitString = combinedString.split(" ");
console.log("Split String: ", splitString);
// OUTPUT: Split String:  [ 'Hello', 'World!' ]

// ANOTHER EXAMPLE OF STRING
const trimmedString = "   Hello, Trim!   ".trim();
console.log("Trimmed String: '" + trimmedString + "'");
// OUTPUT: Trimmed String: 'Hello, Trim!'

// ANOTHER EXAMPLE OF STRING
const charAtIndex = combinedString.charAt(7);
console.log("Character at index 7: " + charAtIndex);
// OUTPUT: Character at index 7: o

// ANOTHER EXAMPLE OF STRING
const includesCheck = combinedString.includes("Hello");
console.log("Includes 'Hello': " + includesCheck);
// OUTPUT: Includes 'Hello': true

// ANOTHER EXAMPLE OF STRING
const startsWithCheck = combinedString.startsWith("Hello");
console.log("Starts with 'Hello': " + startsWithCheck);
// OUTPUT: Starts with 'Hello': true

// ANOTHER EXAMPLE OF STRING
const endsWithCheck = combinedString.endsWith("!");
console.log("Ends with '!': " + endsWithCheck);
// OUTPUT: Ends with '!': true

// ANOTHER EXAMPLE OF STRING
const repeatString = "Repeat! ".repeat(3);
console.log("Repeated String: " + repeatString);
// OUTPUT: Repeated String: Repeat! Repeat! Repeat!

// ANOTHER EXAMPLE OF STRING
const padStartString = "5".padStart(3, "0");
console.log("Padded Start String: " + padStartString);
// OUTPUT: Padded Start String: 005

// ANOTHER EXAMPLE OF STRING
const padEndString = "5".padEnd(3, "0");
console.log("Padded End String: " + padEndString);
// OUTPUT: Padded End String: 500

// ANOTHER EXAMPLE OF STRING
const charCodeAtIndex = combinedString.charCodeAt(1);
console.log("Character code at index 1: " + charCodeAtIndex);
// OUTPUT: Character code at index 1: 101

// ANOTHER EXAMPLE OF STRING
const fromCharCodeString = String.fromCharCode(72, 101, 108, 108, 111);
console.log("String from char codes: " + fromCharCodeString);
// OUTPUT: String from char codes: Hello

//& Template Literals in JavaScript
// TEMPLATE LITERALS ARE A FEATURE IN JAVASCRIPT THAT ALLOWS FOR EMBEDDING EXPRESSIONS AND MULTI-LINE STRINGS USING BACKTICKS (` `). THEY PROVIDE A MORE 
// CONVENIENT WAY TO CREATE STRINGS AND INCLUDE VARIABLES OR EXPRESSIONS DIRECTLY WITHIN THE STRING. ` = is symbol for template literals `*/

let specialString = `This is a special string with a variable: ${name} and an expression: ${2 + 2}.`;
console.log(specialString);

// ANOTHER EXAMPLE OF TEMPLATE LITERALS
const a = 5;
const b = 10;
const sumString = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sumString);
// ANOTHER EXAMPLE OF TEMPLATE LITERALS

// ANOTHER EXAMPLE OF TEMPLATE LITERALS
const multiLineTemplate = `This is a multi-line string.
It can span multiple lines.
Using template literals makes it easy.`;
console.log(multiLineTemplate);
// OUTPUT :
// This is a multi-line string.
// It can span multiple lines.
// Using template literals makes it easy.

// ANOTHER EXAMPLE OF TEMPLATE LITERALS
const user = { firstName: "John", lastName: "Doe" };
const userGreeting = `Hello, ${user.firstName} ${user.lastName}! Welcome to our website.`;
console.log(userGreeting);
//OUTPUT : Hello, John Doe! Welcome to our website.

// ANOTHER EXAMPLE OF TEMPLATE LITERALS
const product = { name: "Laptop", price: 999.99 };
const productInfo = `The product ${product.name} costs $${product.price}.`;
console.log(productInfo);
// OUTPUT: The product Laptop costs $999.99.
//basically this is the code for loops and strings in javascript.

//& ESCAPE CHARACTERS IN JAVASCRIPT
// ESCAPE CHARACTERS ARE SPECIAL CHARACTERS IN JAVASCRIPT THAT ALLOW YOU TO INCLUDE CHARACTERS IN A STRING THAT WOULD OTHERWISE BE DIFFICULT OR IMPOSSIBLE TO 
// INCLUDE DIRECTLY. THEY ARE PRECEDED BY A BACKSLASH (\) AND CAN REPRESENT CHARACTERS LIKE NEWLINES, TABS, QUOTES, AND MORE.

const escapeExample = "This is a string with a newline character.\nAnd this is the second line.";
console.log(escapeExample);
// OUTPUT:
// This is a string with a newline character.
// And this is the second line.

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const tabExample = "This is a string with a tab character.\tHere is the tabbed text.";
console.log(tabExample);
// OUTPUT: This is a string with a tab character.    Here is the tabbed text.

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const quoteExample = "He said, \"Hello!\" and waved.";
console.log(quoteExample);
// OUTPUT: He said, "Hello!" and waved.

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const backslashExample = "This is a backslash: \\";
console.log(backslashExample);
// OUTPUT: This is a backslash: \

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const singleQuoteExample = 'It\'s a beautiful day!';
console.log(singleQuoteExample);
// OUTPUT: It's a beautiful day!

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const unicodeExample = "This is a Unicode character: \u2764"; // Heart symbol
console.log(unicodeExample);
// OUTPUT: This is a Unicode character: ❤

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const carriageReturnExample = "This is a string with a carriage return.\rOverwritten text.";
console.log(carriageReturnExample);
// OUTPUT: Overwritten text.

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const formFeedExample = "This is a string with a form feed character.\fNew page starts here.";
console.log(formFeedExample);
//OUTPUT: This is a string with a form feed character.
//New page starts here.

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const backspaceExample = "This is a string with a backspace character.\bBackspaced text.";
console.log(backspaceExample);
// OUTPUT: This is a string with a backspace character.Backspaced text.

// ANOTHER EXAMPLE OF ESCAPE CHARACTERS
const verticalTabExample = "This is a string with a vertical tab character.\vVertical tabbed text.";
console.log(verticalTabExample);
// OUTPUT: This is a string with a vertical tab character.\vVertical tabbed text. 

//& STRING METHODS IN JAVASCRIPT
// STRING METHODS ARE BUILT-IN FUNCTIONS IN JAVASCRIPT THAT ALLOW YOU TO MANIPULATE AND WORK WITH STRINGS. THEY PROVIDE VARIOUS OPERATIONS SUCH AS 
// CONCATENATION, SEARCHING, REPLACING, SPLITTING, AND MORE. HERE ARE SOME COMMONLY USED STRING METHODS:

const sampleString = "Hello, JavaScript!";

// 1. charAt() - Returns the character at a specified index.
console.log(sampleString.charAt(7)); // OUTPUT: J

// 2. concat() - Combines two or more strings.
const string1 = "Hello";
const string2 = "World";
console.log(string1.concat(", ", string2, "!")); // OUTPUT: Hello, World!

// 3. includes() - Checks if a string contains a specified substring.
console.log(sampleString.includes("JavaScript")); // OUTPUT: true

// 4. indexOf() - Returns the index of the first occurrence of a specified substring.
console.log(sampleString.indexOf("JavaScript")); // OUTPUT: 7

// 5. lastIndexOf() - Returns the index of the last occurrence of a specified substring.
console.log(sampleString.lastIndexOf("o")); // OUTPUT: 4

// 6. replace() - Replaces a specified substring with another substring.
console.log(sampleString.replace("JavaScript", "JS")); // OUTPUT: Hello, JS!

// 7. split() - Splits a string into an array of substrings based on a specified separator.
console.log(sampleString.split(", ")); // OUTPUT: [ 'Hello', 'JavaScript!' ]

// 8. toLowerCase() - Converts a string to lowercase.
console.log(sampleString.toLowerCase()); // OUTPUT: hello, javascript!

// 9. toUpperCase() - Converts a string to uppercase.
console.log(sampleString.toUpperCase()); // OUTPUT: HELLO, JAVASCRIPT!

// 10. trim() - Removes whitespace from both ends of a string.
const stringWithWhitespace = "   Hello, World!   ";
console.log(stringWithWhitespace.trim()); // OUTPUT: Hello, World!

// 11. startsWith() - Checks if a string starts with a specified substring.
console.log(sampleString.startsWith("Hello")); // OUTPUT: true

// 12. endsWith() - Checks if a string ends with a specified substring.
console.log(sampleString.endsWith("!")); // OUTPUT: true

// 13. repeat() - Returns a new string that repeats the original string a specified number of times.
console.log("Repeat! ".repeat(3)); // OUTPUT: Repeat! Repeat! Repeat!

// 14. padStart() - Pads the current string with another string until it reaches a specified length.
console.log("5".padStart(3, "0")); // OUTPUT: 005

// 15. padEnd() - Pads the current string with another string until it reaches a specified length.
console.log("5".padEnd(3, "0")); // OUTPUT: 500

// 16. substring() - Returns a portion of the string between two specified indices.
console.log(sampleString.substring(7, 17)); // OUTPUT: JavaScript

// 17. slice() - Extracts a section of a string and returns it as a new string.
console.log(sampleString.slice(7, 17)); // OUTPUT: JavaScript

// 18. match() - Retrieves the matches of a string against a regular expression.
const regex = /JavaScript/;
console.log(sampleString.match(regex)); // OUTPUT: [ 'JavaScript', index: 7, input: 'Hello, JavaScript!', groups: undefined ]

// 19. search() - Searches for a match between a string and a regular expression.
console.log(sampleString.search(regex)); // OUTPUT: 7

// 20. valueOf() - Returns the primitive value of a String object.
const stringObject = new String("Hello, World!");
console.log(stringObject.valueOf()); // OUTPUT: Hello, World!

//& STRING INTERPOLATION IN JAVASCRIPT
// STRING INTERPOLATION IS A FEATURE IN JAVASCRIPT THAT ALLOWS YOU TO EMBED EXPRESSIONS AND VARIABLES DIRECTLY WITHIN A STRING. IT PROVIDES A MORE READABLE 
// AND CONVENIENT WAY TO CREATE STRINGS BY USING TEMPLATE LITERALS (BACKTICKS) AND PLACEHOLDERS (${expression}) FOR DYNAMIC CONTENT.

const userName = "Alice";
const userAge = 25;
const Greeting = `Hello, ${userName}! You are ${userAge} years old.`;
console.log(Greeting);
// OUTPUT: Hello, Alice! You are 25 years old.

// ANOTHER EXAMPLE OF STRING INTERPOLATION
const item = "laptop";
const price = 999.99;
const itemMessage = `The price of the ${item} is $${price}.`;
console.log(itemMessage);
// OUTPUT: The price of the laptop is $999.99.

//& SUMMARY :
// IN THIS CHAPTER, WE EXPLORED LOOPS AND STRINGS IN JAVASCRIPT. WE LEARNED ABOUT DIFFERENT TYPES OF LOOPS (FOR, WHILE, DO...WHILE, FOR...IN, FOR...OF) AND HOW TO USE THEM TO REPEAT CODE BLOCKS.
// WE ALSO DISCUSSED STRINGS, THEIR IMMUTABLE NATURE, AND VARIOUS STRING METHODS FOR MANIPULATION. ADDITIONALLY, WE COVERED ESCAPE CHARACTERS, TEMPLATE LITERALS, AND STRING INTERPOLATION FOR DYNAMIC CONTENT IN STRINGS. 
// THESE CONCEPTS ARE FUNDAMENTAL IN JAVASCRIPT PROGRAMMING AND PROVIDE A STRONG FOUNDATION FOR WORKING WITH DATA AND CONTROL FLOW. AND THIS IS THE END OF CHAPTER-04 LOOPS & STRINGS IN JAVASCRIPT.