/**
 * ==============================================================================
 * CHAPTER 5: ARRAYS IN JAVASCRIPT
 * ==============================================================================
 * Comprehensive examples covering declaration, indexing, modification, loops,
 * and 24 essential array methods in JavaScript.
 *
 * Contributed by: Tanmay (Adesh Srivastava)
 * ==============================================================================
 */

// ==============================================================================
// 1. CREATING ARRAYS
// ==============================================================================

// Using Array Literal Syntax (Preferred)
let fruits = ["apple", "banana", "cherry"];
console.log("fruits:", fruits); // Output: ["apple", "banana", "cherry"]

// Using Array Constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("numbers:", numbers); // Output: [1, 2, 3, 4, 5]

let heroes = ["ironman", "Batman", "thor"];
console.log("heroes:", heroes); // Output: ["ironman", "Batman", "thor"]

// ==============================================================================
// 2. ARRAY INDICES (ZERO-INDEXED)
// ==============================================================================

let color = ["red", "green", "blue", "yellow"];
console.log("color[0]:", color[0]); // Output: "red"
console.log("color[1]:", color[1]); // Output: "green"
console.log("color[2]:", color[2]); // Output: "blue"
console.log("color[3]:", color[3]); // Output: "yellow"

// ==============================================================================
// 3. MODIFYING ARRAY ELEMENTS
// ==============================================================================

let animals = ["cat", "dog", "rabbit"];
console.log("Original animals:", animals); // Output: ["cat", "dog", "rabbit"]

// Modifying the second element (index 1)
animals[1] = "hamster";
console.log("Modified animals:", animals); // Output: ["cat", "hamster", "rabbit"]

// ==============================================================================
// 4. ARRAY LENGTH
// ==============================================================================

let cities = ["New York", "Los Angeles", "Chicago", "Houston"];
console.log("cities.length:", cities.length); // Output: 4

// ==============================================================================
// 5. ADDING ELEMENTS TO AN ARRAY
// ==============================================================================

let colors = ["red", "green", "blue"];

// push(): Adds element to the END
colors.push("yellow");
console.log("After push:", colors); // Output: ["red", "green", "blue", "yellow"]

// unshift(): Adds element to the BEGINNING
colors.unshift("purple");
console.log("After unshift:", colors); // Output: ["purple", "red", "green", "blue", "yellow"]

// ==============================================================================
// 6. REMOVING ELEMENTS FROM AN ARRAY
// ==============================================================================

let fruitsList = ["apple", "banana", "cherry", "date"];

// pop(): Removes the LAST element
fruitsList.pop();
console.log("After pop:", fruitsList); // Output: ["apple", "banana", "cherry"]

// shift(): Removes the FIRST element
fruitsList.shift();
console.log("After shift:", fruitsList); // Output: ["banana", "cherry"]

// ==============================================================================
// 7. LOOPING OVER AN ARRAY
// ==============================================================================

console.log("\n--- Looping over numbersList ---");
let numbersList = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersList.length; i++) {
    console.log(`numbersList[${i}]:`, numbersList[i]);
}

console.log("\n--- Traditional for loop ---");
let heroesList = ["ironman", "Batman", "thor"];
for (let i = 0; i < heroesList.length; i++) {
    console.log("for loop hero:", heroesList[i]);
}

console.log("\n--- for...of loop ---");
for (let hero of heroesList) {
    console.log("for...of hero:", hero);
}

console.log("\n--- forEach method ---");
heroesList.forEach(function(hero) {
    console.log("forEach hero:", hero);
});

// ==============================================================================
// 8. THE 24 ESSENTIAL ARRAY METHODS
// ==============================================================================

console.log("\n=================== 24 ARRAY METHODS ===================");

// 1. concat: Combines two or more arrays into a new array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log("1. concat:", combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// 2. slice: Returns a shallow copy of a portion of an array
let fruitsSlice = ["apple", "banana", "cherry", "date"];
let slicedFruits = fruitsSlice.slice(1, 3);
console.log("2. slice (1, 3):", slicedFruits); // Output: ["banana", "cherry"]

// 3. splice: Changes contents by removing, replacing, or adding elements
let colorsSplice = ["red", "green", "blue", "yellow"];
colorsSplice.splice(1, 2, "purple", "orange");
console.log("3. splice:", colorsSplice); // Output: ["red", "purple", "orange", "yellow"]

// 4. indexOf: Returns the first index of an element, or -1 if not found
let animalsIndex = ["cat", "dog", "rabbit"];
console.log("4. indexOf('dog'):", animalsIndex.indexOf("dog")); // Output: 1
console.log("4. indexOf('hamster'):", animalsIndex.indexOf("hamster")); // Output: -1

// 5. includes: Determines whether an array includes an element (returns true/false)
let numbersIncludes = [1, 2, 3, 4, 5];
console.log("5. includes(3):", numbersIncludes.includes(3)); // Output: true
console.log("5. includes(6):", numbersIncludes.includes(6)); // Output: false

// 6. reverse: Reverses elements in place
let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log("6. reverse:", letters); // Output: ["d", "c", "b", "a"]

// 7. sort: Sorts elements in place
let numbersSort = [3, 1, 4, 2, 5];
numbersSort.sort();
console.log("7. sort:", numbersSort); // Output: [1, 2, 3, 4, 5]

// 8. join: Joins all elements into a single string
let words = ["Hello", "world"];
let joinedString = words.join(" ");
console.log("8. join(' '):", joinedString); // Output: "Hello world"

// 9. map: Transforms each element into a new array
let numbersMap = [1, 2, 3, 4, 5];
let squaredNumbers = numbersMap.map(num => num * num);
console.log("9. map (squares):", squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 10. filter: Returns a new array with elements passing the test
let numbersFilter = [1, 2, 3, 4, 5];
let evenNumbers = numbersFilter.filter(num => num % 2 === 0);
console.log("10. filter (evens):", evenNumbers); // Output: [2, 4]

// 11. reduce: Reduces array to a single accumulated value
let numbersReduce = [1, 2, 3, 4, 5];
let sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("11. reduce (sum):", sum); // Output: 15

// 12. push: Appends element to end, returns new length
let pushArray = [1, 2, 3];
pushArray.push(4, 5);
console.log("12. push:", pushArray); // Output: [1, 2, 3, 4, 5]

// 13. pop: Removes and returns last element
let popArray = [1, 2, 3];
let lastElement = popArray.pop();
console.log("13. pop returned:", lastElement, "| remaining:", popArray); // Output: 3 | [1, 2]

// 14. shift: Removes and returns first element
let shiftArray = [1, 2, 3];
let firstElement = shiftArray.shift();
console.log("14. shift returned:", firstElement, "| remaining:", shiftArray); // Output: 1 | [2, 3]

// 15. unshift: Prepends element to beginning, returns new length
let unshiftArray = [2, 3];
unshiftArray.unshift(0, 1);
console.log("15. unshift:", unshiftArray); // Output: [0, 1, 2, 3]

// 16. find: Returns first element satisfying condition
let findArray = [1, 2, 3, 4, 5];
let foundElement = findArray.find(num => num > 3);
console.log("16. find (> 3):", foundElement); // Output: 4

// 17. findIndex: Returns index of first element satisfying condition
let findIndexArray = [1, 2, 3, 4, 5];
let foundIndex = findIndexArray.findIndex(num => num > 3);
console.log("17. findIndex (> 3):", foundIndex); // Output: 3

// 18. some: Checks if at least one element passes test
let someArray = [1, 2, 3, 4, 5];
let hasEvenNumber = someArray.some(num => num % 2 === 0);
console.log("18. some (even?):", hasEvenNumber); // Output: true

// 19. every: Checks if all elements pass test
let everyArray = [2, 4, 6, 8];
let allEvenNumbers = everyArray.every(num => num % 2 === 0);
console.log("19. every (all even?):", allEvenNumbers); // Output: true

// 20. flat: Flattens nested array dimensions
let flatArray = [1, [2, [3, [4]], 5]];
let flattenedArray = flatArray.flat(2);
console.log("20. flat (depth 2):", flattenedArray); // Output: [1, 2, 3, [4], 5]

// 21. toString: Converts array to comma-separated string
let toStringArray = [1, 2, 3, 4, 5];
let arrayAsString = toStringArray.toString();
console.log("21. toString:", arrayAsString); // Output: "1,2,3,4,5"

// 22. isArray: Determines if variable is an Array
let isArrayValue = [1, 2, 3];
console.log("22. Array.isArray:", Array.isArray(isArrayValue)); // Output: true

// 23. fill: Fills elements from start to end with static value
let fillArray = [1, 2, 3, 4, 5];
fillArray.fill(0, 1, 4);
console.log("23. fill (0, 1, 4):", fillArray); // Output: [1, 0, 0, 0, 5]

// 24. copyWithin: Copies sequence of elements within array
let copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3);
console.log("24. copyWithin (0, 3):", copyWithinArray); // Output: [4, 5, 3, 4, 5]

console.log("\n=================== ALL EXAMPLES COMPLETED ===================");
