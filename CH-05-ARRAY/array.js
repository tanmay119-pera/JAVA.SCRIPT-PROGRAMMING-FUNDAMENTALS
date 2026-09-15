//^                                                       CHAPTER 5: ARRAYS IN JAVASCRIPT                                                                    //

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

//for loop
for (let i = 0; i < heroesList.length; i++) {
    console.log(heroesList[i]);
}  // OUTPUT: "ironman", "Batman", "thor"

//for...of loop
for (let hero of heroesList) {
    console.log(hero);
}  // OUTPUT: "ironman", "Batman", "thor"

//forEach method
heroesList.forEach(function(hero) {
    console.log(hero);
});  // OUTPUT: "ironman", "Batman", "thor"

//& ARRAY METHODS
/* JAVASCRIPT PROVIDES VARIOUS METHODS TO MANIPULATE ARRAYS. SOME COMMON ARRAY METHODS INCLUDE: */

// 1. CONCAT: COMBINES TWO OR MORE ARRAYS INTO A NEW ARRAY.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // OUTPUT: [1, 2, 3, 4, 5, 6]

// 2. SLICE: RETURNS A SHALLOW COPY OF A PORTION OF AN ARRAY INTO A NEW ARRAY.
let fruitsSlice = ["apple", "banana", "cherry", "date"];
let slicedFruits = fruitsSlice.slice(1, 3);
console.log(slicedFruits); // OUTPUT: ["banana", "cherry"]

// 3. SPLICE: CHANGES THE CONTENT OF AN ARRAY BY REMOVING OR REPLACING EXISTING ELEMENTS AND/OR ADDING NEW ELEMENTS.
let colorsSplice = ["red", "green", "blue", "yellow"];
colorsSplice.splice(1, 2, "purple", "orange");
console.log(colorsSplice); // OUTPUT: ["red", "purple", "orange", "yellow"]

// 4. INDEXOF: RETURNS THE FIRST INDEX AT WHICH A GIVEN ELEMENT CAN BE FOUND IN THE ARRAY, OR -1 IF IT IS NOT PRESENT.
let animalsIndex = ["cat", "dog", "rabbit"];
console.log(animalsIndex.indexOf("dog")); // OUTPUT: 1
console.log(animalsIndex.indexOf("hamster")); // OUTPUT: -1

// 5. INCLUDES: DETERMINES WHETHER AN ARRAY INCLUDES A CERTAIN ELEMENT, RETURNING TRUE OR FALSE.
let numbersIncludes = [1, 2, 3, 4, 5];
console.log(numbersIncludes.includes(3)); // OUTPUT: true
console.log(numbersIncludes.includes(6)); // OUTPUT: false

// 6. REVERSE: REVERSES THE ORDER OF THE ELEMENTS IN AN ARRAY.
let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters); // OUTPUT: ["d", "c", "b", "a"]

// 7. SORT: SORTS THE ELEMENTS OF AN ARRAY IN PLACE AND RETURNS THE SORTED ARRAY.
let numbersSort = [3, 1, 4, 2, 5];
numbersSort.sort();
console.log(numbersSort); // OUTPUT: [1, 2, 3, 4, 5]

// 8. JOIN: JOINS ALL ELEMENTS OF AN ARRAY INTO A STRING.
let words = ["Hello", "world"];
let joinedString = words.join(" ");
console.log(joinedString); // OUTPUT: "Hello world"

// 9. MAP: CREATES A NEW ARRAY WITH THE RESULTS OF CALLING A PROVIDED FUNCTION ON EVERY ELEMENT IN THE CALLING ARRAY.
let numbersMap = [1, 2, 3, 4, 5];
let squaredNumbers = numbersMap.map(num => num * num);
console.log(squaredNumbers); // OUTPUT: [1, 4, 9, 16, 25]

// 10. FILTER: CREATES A NEW ARRAY WITH ALL ELEMENTS THAT PASS THE TEST IMPLEMENTED BY THE PROVIDED FUNCTION.
let numbersFilter = [1, 2, 3, 4, 5];
let evenNumbers = numbersFilter.filter(num => num % 2 === 0);
console.log(evenNumbers); // OUTPUT: [2, 4]

// 11. REDUCE: EXECUTES A REDUCER FUNCTION ON EACH ELEMENT OF THE ARRAY, RESULTING IN A SINGLE OUTPUT VALUE.
let numbersReduce = [1, 2, 3, 4, 5];
let sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // OUTPUT: 15

// 12. Push: ADDS ONE OR MORE ELEMENTS TO THE END OF AN ARRAY AND RETURNS THE NEW LENGTH OF THE ARRAY.
let pushArray = [1, 2, 3];
pushArray.push(4, 5);
console.log(pushArray); // OUTPUT: [1, 2, 3, 4, 5]

// 13. Pop: REMOVES THE LAST ELEMENT FROM AN ARRAY AND RETURNS THAT ELEMENT.
let popArray = [1, 2, 3];
let lastElement = popArray.pop();
console.log(lastElement); // OUTPUT: 3
console.log(popArray); // OUTPUT: [1, 2]

// 14. Shift: REMOVES THE FIRST ELEMENT FROM AN ARRAY AND RETURNS THAT ELEMENT.
let shiftArray = [1, 2, 3];
let firstElement = shiftArray.shift();
console.log(firstElement); // OUTPUT: 1
console.log(shiftArray); // OUTPUT: [2, 3]

// 15. Unshift: ADDS ONE OR MORE ELEMENTS TO THE BEGINNING OF AN ARRAY AND RETURNS THE NEW LENGTH OF THE ARRAY.
let unshiftArray = [2, 3];
unshiftArray.unshift(0, 1);
console.log(unshiftArray); // OUTPUT: [0, 1, 2, 3]

//16. Find: RETURNS THE VALUE OF THE FIRST ELEMENT IN THE ARRAY THAT SATISFIES THE PROVIDED TEST FUNCTION.
let findArray = [1, 2, 3, 4, 5];
let foundElement = findArray.find(num => num > 3);
console.log(foundElement); // OUTPUT: 4

//17. FindIndex: RETURNS THE INDEX OF THE FIRST ELEMENT IN THE ARRAY THAT SATISFIES THE PROVIDED TEST FUNCTION.
let findIndexArray = [1, 2, 3, 4, 5];
let foundIndex = findIndexArray.findIndex(num => num > 3);
console.log(foundIndex); // OUTPUT: 3

//18. Some: TESTS WHETHER AT LEAST ONE ELEMENT IN THE ARRAY PASSES THE TEST IMPLEMENTED BY THE PROVIDED FUNCTION.
let someArray = [1, 2, 3, 4, 5];
let hasEvenNumber = someArray.some(num => num % 2 === 0);
console.log(hasEvenNumber); // OUTPUT: true

//19. Every: TESTS WHETHER ALL ELEMENTS IN THE ARRAY PASS THE TEST IMPLEMENTED BY THE PROVIDED FUNCTION.
let everyArray = [2, 4, 6, 8];
let allEvenNumbers = everyArray.every(num => num % 2 === 0);
console.log(allEvenNumbers); // OUTPUT: true

//20. Flat: FLATTENS A MULTI-DIMENSIONAL ARRAY INTO A SINGLE-DIMENSIONAL ARRAY.
let flatArray = [1, [2, [3, [4]], 5]];
let flattenedArray = flatArray.flat(2);
console.log(flattenedArray); // OUTPUT: [1, 2, 3, [4], 5]   

// 21. toString: CONVERTS AN ARRAY TO A STRING REPRESENTATION.
let toStringArray = [1, 2, 3, 4, 5];
let arrayAsString = toStringArray.toString();
console.log(arrayAsString); // OUTPUT: "1,2,3,4,5"

// 22. isArray: CHECKS IF A VALUE IS AN ARRAY.
let isArrayValue = [1, 2, 3];
console.log(Array.isArray(isArrayValue)); // OUTPUT: true   

// 23. Fill: FILLS ALL THE ELEMENTS OF AN ARRAY FROM A START INDEX TO AN END INDEX WITH A STATIC VALUE.
let fillArray = [1, 2, 3, 4, 5];
fillArray.fill(0, 1, 4);
console.log(fillArray); // OUTPUT: [1, 0, 0, 0, 5]

// 24. CopyWithin: SHALLOW COPIES PART OF AN ARRAY TO ANOTHER LOCATION IN THE SAME ARRAY AND RETURNS IT WITHOUT MODIFYING ITS LENGTH.
let copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3);
console.log(copyWithinArray); // OUTPUT: [4, 5, 3, 4, 5]

//& CONCLUSION

/* IN THIS CHAPTER, WE HAVE LEARNED ABOUT ARRAYS IN JAVASCRIPT. WE COVERED ARRAY DECLARATION, ACCESSING ELEMENTS, MODIFICATION, AND COMMON ARRAY METHODS. 
UNDERSTANDING ARRAYS IS ESSENTIAL FOR EFFECTIVE DATA MANAGEMENT AND MANIPULATION IN JAVASCRIPT PROGRAMMING. BY MASTERING ARRAYS, YOU CAN HANDLE COMPLEX DATA 
STRUCTURES AND IMPLEMENT VARIOUS ALGORITHMS IN YOUR APPLICATIONS. */

