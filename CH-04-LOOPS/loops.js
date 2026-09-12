//^                                                      CHAPTER-04 LOOPS IN JAVASCRIPT                                                                     //

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

//ONE MORE EXAMPLE OF FOR LOOP

const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);
}

//ANOTHER EXAMPLE OF FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log("Counting: " + i);
}

//ANOTHER EXAMPLE OF FOR LOOP
for (let i = 10; i > 0; i--) {
    console.log("Countdown: " + i);
}

//ANOTHER EXAMPLE OF FOR LOOP
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Even Number: " + i);
    }
}
//~2. While Loop
// USED FOR REPEATING A BLOCK OF CODE AS LONG AS A SPECIFIED CONDITION IS TRUE.
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration: " + j);
    j++;
}
//ANOTHER EXAMPLE OF WHILE LOOP
let m = 0;
while (m < fruits.length) {
    console.log("Fruit from While Loop: " + fruits[m]);
    m++;
}

//ANOTHER EXAMPLE OF WHILE LOOP
let n = 0;
while (n < 3) {
    console.log("Counting: " + n);
    n++;
}

//ANOTHER EXAMPLE OF WHILE LOOP
let p = 10;
while (p > 0) {
    console.log("Countdown: " + p);
    p--;
}

//ANOTHER EXAMPLE OF WHILE LOOP
let q = 1;
while (q <= 10) {
    if (q % 2 === 0) {
        console.log("Even Number: " + q);
    }
    q++;
}
//~3. Do...While Loop

// USED FOR EXECUTING A BLOCK OF CODE ONCE, AND THEN REPEATING THE LOOP AS LONG AS A SPECIFIED CONDITION IS TRUE.
let k = 0;
do {
    console.log("Do...While Loop Iteration: " + k);
    k++;
} while (k < 5);

//~4. For...In Loop
// USED FOR ITERATING OVER THE PROPERTIES OF AN OBJECT.
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}

//~5. For...Of Loop
// USED FOR ITERATING OVER THE VALUES OF AN ITERABLE OBJECT (LIKE ARRAYS, STRINGS, MAPS, SETS, ETC.).
const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
    console.log("For...Of Loop Value: " + num);
}   

//ANOTHER EXAMPLE OF FOR...OF LOOP
const str = "Hello";
for (const char of str) {
    console.log("Character: " + char);
}  

//ANOTHER EXAMPLE OF FOR...OF LOOP
const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
    console.log("Set Value: " + value);
}   

//ANOTHER EXAMPLE OF FOR...OF LOOP  
const map = new Map([["a", 1], ["b", 2], ["c", 3]]);
for (const [key, value] of map) {
    console.log("Map Key: " + key + ", Value: " + value);
}

//~ CONDITIONAL TERNARY OPERATOR

// THE CONDITIONAL (TERNARY) OPERATOR IS A SHORTCUT FOR THE IF...ELSE STATEMENT. IT TAKES THREE OPERANDS: A CONDITION, AN EXPRESSION TO EXECUTE IF THE CONDITION IS TRUE, AND AN EXPRESSION TO EXECUTE IF THE CONDITION IS FALSE.AND IT IS USED TO ASSIGN A VALUE TO A VARIABLE BASED ON A CONDITION.
if (true) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

// USING CONDITIONAL TERNARY OPERATOR
true ? console.log("Condition is true") : console.log("Condition is false");

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const age = 18;
const canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const number = 10;
const result = (number % 2 === 0) ? "Even Number" : "Odd Number";
console.log(result);

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const score = 85;
const grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" :
              (score >= 60) ? "D" : "F";
console.log("Grade: " + grade);

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log("Discount: " + (discount * 100) + "%");

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const temperature = 30;
const weather = (temperature > 25) ? "Hot" : "Cold";
console.log("Weather: " + weather);

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const isLoggedIn = false;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const day = "Saturday";
const activity = (day === "Saturday" || day === "Sunday") ? "Relax" : "Work";
console.log("Activity: " + activity);

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const number2 = -5;
const sign = (number2 > 0) ? "Positive" : (number2 < 0) ? "Negative" : "Zero";
console.log("Sign: " + sign);

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const isRaining = true;
const action = isRaining ? "Take an umbrella." : "Enjoy the sunshine.";
console.log(action);

// ANOTHER EXAMPLE OF CONDITIONAL TERNARY OPERATOR
const speed = 80;
const speedLimit = 60;
const speedMessage = (speed > speedLimit) ? "You are speeding!" : "You are within the speed limit.";
console.log(speedMessage);

//~MDN DOCS 
// FOR LOOP : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// WHILE LOOP : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// DO...WHILE LOOP : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
// FOR...IN LOOP : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// FOR...OF LOOP : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

