//^                                                              CHAPTER 5: ARRAYS                                                                         //

//~ IN THIS CHAPTER, WE WILL LEARN ABOUT ARRAYS IN JAVASCRIPT. ARRAYS ARE USED TO STORE MULTIPLE VALUES IN A SINGLE VARIABLE. THEY PROVIDE A WAY TO ORGANIZE 
//~ AND MANAGE DATA EFFICIENTLY. WE WILL COVER ARRAY DECLARATION, ACCESSING ELEMENTS, MODIFICATION, AND COMMON ARRAY METHODS WITH EXAMPLES TO ILLUSTRATE 
//~ THEIR USAGE IN JAVASCRIPT.

//& ARRAYS IN JAVASCRIPT

/* ARRAYS ARE USED TO STORE MULTIPLE VALUES IN A SINGLE VARIABLE. THEY PROVIDE A WAY TO ORGANIZE AND MANAGE DATA EFFICIENTLY. ARRAYS CAN HOLD ELEMENTS OF 
DIFFERENT DATA TYPES, INCLUDING NUMBERS, STRINGS, OBJECTS, AND EVEN OTHER ARRAYS.

ARRAYS ARE ZERO-INDEXED, MEANING THE FIRST ELEMENT IS ACCESSED USING INDEX 0, THE SECOND ELEMENT USING INDEX 1, AND SO ON. JAVASCRIPT PROVIDES VARIOUS 
METHODS TO MANIPULATE ARRAYS, SUCH AS ADDING OR REMOVING ELEMENTS, SORTING, AND ITERATING THROUGH THE ELEMENTS. ARRAYS ARE A FUNDAMENTAL DATA STRUCTURE IN 
JAVASCRIPT AND ARE WIDELY USED IN WEB DEVELOPMENT. */ 
 
//& CREATE AN ARRAY

/* TO CREATE AN ARRAY IN JAVASCRIPT, YOU CAN USE EITHER THE ARRAY LITERAL SYNTAX OR THE ARRAY CONSTRUCTOR. THE ARRAY LITERAL SYNTAX IS MORE COMMONLY USED AND 
PREFERRED FOR ITS SIMPLICITY AND READABILITY. HERE ARE EXAMPLES OF BOTH METHODS: */

// USING ARRAY LITERAL SYNTAX
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // OUTPUT: ["apple", "banana", "cherry"]

// USING ARRAY CONSTRUCTOR
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // OUTPUT: [1, 2, 3, 4, 5]    

let heroes = ["ironman", "Batman", "thor"];
console.log(heroes); // OUTPUT: ["ironman", "Batman", "thor"]

//& ARRAY INDICES

/* ARRAYS IN JAVASCRIPT ARE ZERO-INDEXED, MEANING THE FIRST ELEMENT IS ACCESSED USING INDEX 0, THE SECOND ELEMENT USING INDEX 1, AND SO ON. YOU CAN ACCESS 
ELEMENTS IN AN ARRAY BY USING THEIR INDEX. HERE'S AN EXAMPLE: */

let color = ["red", "green", "blue", "yellow"];
console.log(color[0]); // OUTPUT: "red"
console.log(color[1]); // OUTPUT: "green"
console.log(color[2]); // OUTPUT: "blue"
console.log(color[3]); // OUTPUT: "yellow"

//& MODIFYING ARRAY ELEMENTS

/* YOU CAN MODIFY ELEMENTS IN AN ARRAY BY ASSIGNING A NEW VALUE TO A SPECIFIC INDEX. HERE'S AN EXAMPLE: */

let animals = ["cat", "dog", "rabbit"];
console.log(animals); // OUTPUT: ["cat", "dog", "rabbit"]

// MODIFYING THE SECOND ELEMENT
animals[1] = "hamster";
console.log(animals); // OUTPUT: ["cat", "hamster", "rabbit"]


//& ARRAY LENGTH 
/* YOU CAN GET THE LENGTH OF AN ARRAY USING THE LENGTH PROPERTY. THIS PROPERTY RETURNS THE NUMBER OF ELEMENTS IN THE ARRAY. HERE'S AN EXAMPLE: */

let cities = ["New York", "Los Angeles", "Chicago", "Houston"];
console.log(cities.length); // OUTPUT: 4

//& ADDING ELEMENTS TO AN ARRAY

/* YOU CAN ADD ELEMENTS TO AN ARRAY USING THE PUSH METHOD, WHICH ADDS ELEMENTS TO THE END OF THE ARRAY, OR THE UNSHIFT METHOD, WHICH ADDS ELEMENTS TO THE 
BEGINNING OF THE ARRAY. HERE'S AN EXAMPLE: */

let colors = ["red", "green", "blue"];

// ADDING ELEMENT TO THE END
colors.push("yellow");
console.log(colors); // OUTPUT: ["red", "green", "blue", "yellow"]

// ADDING ELEMENT TO THE BEGINNING
colors.unshift("purple");
console.log(colors); // OUTPUT: ["purple", "red", "green", "blue", "yellow"]

//& REMOVING ELEMENTS FROM AN ARRAY

/* YOU CAN REMOVE ELEMENTS FROM AN ARRAY USING THE POP METHOD, WHICH REMOVES THE LAST ELEMENT, OR THE SHIFT METHOD, WHICH REMOVES THE FIRST ELEMENT. HERE'S AN 
EXAMPLE: */

let fruitsList = ["apple", "banana", "cherry", "date"];

// REMOVING LAST ELEMENT
fruitsList.pop();
console.log(fruitsList); // OUTPUT: ["apple", "banana", "cherry"]

// REMOVING FIRST ELEMENT
fruitsList.shift();
console.log(fruitsList); // OUTPUT: ["banana", "cherry"]

//& LOOPING OVER AN ARRAY
/* YOU CAN LOOP OVER AN ARRAY USING VARIOUS METHODS, SUCH AS FOR LOOPS, FOR...OF LOOPS, OR THE FOR EACH METHOD. HERE'S AN EXAMPLE USING A FOR LOOP: */

let numbersList = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersList.length; i++) {
    console.log(numbersList[i]);
} // OUTPUT: 1, 2, 3, 4, 5

let heroesList = ["ironman", "Batman", "thor"];
for (let i = 0; i < heroesList.length; i++) {
    console.log(heroesList[i]);
}  // OUTPUT: "ironman", "Batman", "thor" 
