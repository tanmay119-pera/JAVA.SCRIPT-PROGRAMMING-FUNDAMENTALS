# Chapter 04: Loops & Strings

<p align="left">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"><img src="https://img.shields.io/badge/Loops-5_Constructs-FF6B6B?style=for-the-badge&logo=codecademy&logoColor=white" alt="Loops" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><img src="https://img.shields.io/badge/Strings-22_Methods-00D4FF?style=for-the-badge&logo=codecademy&logoColor=white" alt="Strings" /></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" /></a>
  <a href="https://github.com/tanmay119-pera"><img src="https://img.shields.io/badge/Contributor-Tanmay_(Adesh_Srivastava)-00D4FF?style=for-the-badge&logo=github&logoColor=black&labelColor=080C14" alt="Contributor" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge" alt="License" /></a>
</p>

> **Overview**  
> An exhaustive handbook covering iterative control structures (`for`, `while`, `do...while`, `for...in`, `for...of`), string immutability, escape sequences, modern template literal interpolation, and all 22 fundamental string manipulation methods in JavaScript.

---

## 📑 Table of Contents

- [🔄 1. Understanding Loops in JavaScript](#-1-understanding-loops-in-javascript)
  - [Why Do We Need Loops?](#why-do-we-need-loops)
  - [Core Components of an Iteration Loop](#core-components-of-an-iteration-loop)
- [🔁 2. The 5 Core Loop Constructs](#-2-the-5-core-loop-constructs)
  - [1. The Traditional `for` Loop](#1-the-traditional-for-loop)
  - [2. The `while` Loop](#2-the-while-loop)
  - [3. The `do...while` Loop](#3-the-dowhile-loop)
  - [4. The `for...in` Loop (Object Properties)](#4-the-forin-loop-object-properties)
  - [5. The `for...of` Loop (Iterable Collections)](#5-the-forof-loop-iterable-collections)
- [⚡ 3. Advanced Ternary Operator Patterns](#-3-advanced-ternary-operator-patterns)
- [🔤 4. Strings in JavaScript](#-4-strings-in-javascript)
  - [String Definition & Immutability](#string-definition--immutability)
  - [String Literal Declarations](#string-literal-declarations)
  - [Length and Property Access](#length-and-property-access)
- [🛡️ 5. Escape Sequences in JavaScript](#️-5-escape-sequences-in-javascript)
- [🛠️ 6. The 22 Essential String Methods](#️-6-the-22-essential-string-methods)
  - [Master Methods Quick-Reference Table](#master-methods-quick-reference-table)
  - [Detailed Breakdown of Methods (1 to 22)](#detailed-breakdown-of-methods-1-to-22)
- [✨ 7. Template Literals & String Interpolation](#-7-template-literals--string-interpolation)
- [🎯 8. Chapter Summary & Key Takeaways](#-8-chapter-summary--key-takeaways)
- [🤝 9. Contribution & Author Details](#-9-contribution--author-details)
- [📄 License](#-license)

---

## 🔄 1. Understanding Loops in JavaScript

### Why Do We Need Loops?
In programming, repeating tasks manually leads to bloated, error-prone code. **Loops** automate repetitive computations by executing a code block repeatedly until a termination condition evaluates to `false`.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HOW A LOOP EXECUTES IN MEMORY                   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   ┌──────────────────┐                                                 │
│   │  Initialization  │ (e.g. let i = 0)                                │
│   └─────────┬────────┘                                                 │
│             ▼                                                          │
│     /───────────────\          FALSE                                   │
│    < Condition Met?  > ───────────────────────► [ Exit Loop / Continue]│
│     \───────────────/                                                  │
│             │ TRUE                                                     │
│             ▼                                                          │
│   ┌──────────────────┐                                                 │
│   │   Execute Body   │ (e.g. console.log(i))                           │
│   └─────────┬────────┘                                                 │
│             ▼                                                          │
│   ┌──────────────────┐                                                 │
│   │ Update / Step    │ (e.g. i++) ──► Loops back to Condition Check    │
│   └──────────────────┘                                                 │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🔁 2. The 5 Core Loop Constructs

### 1. The Traditional `for` Loop
Best suited when the number of iterations is known in advance.

```javascript
// Syntax: for (initialization; condition; update)
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration: " + i);
}
```

#### Common `for` Loop Patterns:
```javascript
// 1. Iterating Over an Array
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);
}

// 2. Reverse Countdown
for (let i = 10; i > 0; i--) {
    console.log("Countdown: " + i);
}

// 3. Selective Filtering (Even Numbers)
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Even Number: " + i);
    }
}
```

### 2. The `while` Loop
Repeats as long as a condition evaluates to `true`. Evaluates condition **before** entering the loop body.

```javascript
let count = 0;
while (count < 5) {
    console.log("While Loop Iteration: " + count);
    count++; // Always ensure loop variable updates to avoid infinite loops!
}
```

### 3. The `do...while` Loop
An **exit-controlled** loop. Executes the code block **at least once** before evaluating the conditional expression.

```javascript
let k = 0;
do {
    console.log("Do...While Loop Iteration: " + k);
    k++;
} while (k < 5);
```

### 4. The `for...in` Loop (Object Properties)
Iterates over the enumerable string properties (keys) of an Object:

```javascript
const person = { name: "John", age: 30, city: "New York" };

for (const key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: New York
```

### 5. The `for...of` Loop (Iterable Collections)
Introduced in ES6, `for...of` iterates directly over the **values** of iterable objects (Arrays, Strings, Sets, Maps):

```javascript
// 1. Iterating an Array
const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
    console.log("Value: " + num);
}

// 2. Iterating a String (Character by Character)
for (const char of "Hello") {
    console.log("Character: " + char);
}

// 3. Iterating a Map
const map = new Map([["a", 1], ["b", 2]]);
for (const [key, val] of map) {
    console.log(`Key: ${key}, Value: ${val}`);
}
```

---

## ⚡ 3. Advanced Ternary Operator Patterns

The conditional operator (`condition ? expr1 : expr2`) enables clean inline conditional expressions:

```javascript
// Multi-Tier Tiered Grade Assignment
const score = 85;
const grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" :
              (score >= 60) ? "D" : "F";
console.log("Grade: " + grade); // Grade: B

// Number Sign Detection
const num = -5;
const sign = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log("Sign: " + sign); // Sign: Negative

// Speed Enforcement
const speed = 80;
const speedLimit = 60;
const message = (speed > speedLimit) ? "You are speeding!" : "Speed OK";
console.log(message); // You are speeding!
```

---

## 🔤 4. Strings in JavaScript

### String Definition & Immutability
A **String** is an indexed sequence of UTF-16 code units used to represent textual data. 

> ⚠️ **Core Mechanical Law**: **Strings in JavaScript are completely IMMUTABLE.**  
> Once created, string characters cannot be modified in-place. All string methods return a **new string** rather than modifying the original instance.

```javascript
let str = "Hello";
str[0] = "J";      // Attempting in-place mutation
console.log(str);  // Still "Hello"! Silent failure in non-strict mode
```

### String Literal Declarations
```javascript
const singleQuote = 'Single Quotes';
const doubleQuote = "Double Quotes";
const templateLiteral = `Template Literal (Backticks)`;
```

### Length and Property Access
```javascript
const text = "JavaScript";
console.log(text.length);   // 10
console.log(text[0]);        // "J" (Zero-indexed)
console.log(text.charAt(4)); // "S"
```

---

## 🛡️ 5. Escape Sequences in JavaScript

Escape characters (prefixed with `\`) allow embedding special or reserved characters into string literals:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      ESCAPE CHARACTERS CHEAT SHEET                     │
├───────────────┬────────────────────────────────────────────────────────┤
│ Sequence      │ Character Represented                                  │
├───────────────┼────────────────────────────────────────────────────────┤
│ `\n`          │ Newline (Line feed)                                    │
│ `\t`          │ Horizontal Tab                                         │
│ `\'`          │ Single Quote (`'`)                                     │
│ `\"`          │ Double Quote (`"`)                                     │
│ `\\`          │ Backslash (`\`)                                        │
│ `\uXXXX`      │ Unicode Character (e.g. `\u2764` => ❤)                 │
│ `\r`          │ Carriage Return                                        │
│ `\b`          │ Backspace                                              │
│ `\f`          │ Form Feed                                              │
│ `\v`          │ Vertical Tab                                           │
└───────────────┴────────────────────────────────────────────────────────┘
```

---

## 🛠️ 6. The 22 Essential String Methods

### Master Methods Quick-Reference Table

| Method | Syntax | Primary Operation |
| :--- | :--- | :--- |
| `charAt()` | `str.charAt(index)` | Returns character at position |
| `charCodeAt()` | `str.charCodeAt(index)` | Returns UTF-16 numeric code at index |
| `concat()` | `str.concat(str2, ...)` | Joins strings together |
| `includes()` | `str.includes(search)` | Checks if substring exists (`true`/`false`) |
| `indexOf()` | `str.indexOf(search)` | Returns first index of substring (or -1) |
| `lastIndexOf()` | `str.lastIndexOf(search)`| Returns last index of substring (or -1) |
| `startsWith()` | `str.startsWith(search)` | Checks prefix match |
| `endsWith()` | `str.endsWith(search)` | Checks suffix match |
| `toLowerCase()`| `str.toLowerCase()` | Converts entire string to lowercase |
| `toUpperCase()`| `str.toUpperCase()` | Converts entire string to uppercase |
| `trim()` | `str.trim()` | Strips leading & trailing whitespace |
| `slice()` | `str.slice(start, end)` | Extracts section (supports negative index) |
| `substring()` | `str.substring(start, end)`| Extracts section between indices |
| `replace()` | `str.replace(old, new)` | Replaces first match |
| `split()` | `str.split(delimiter)` | Splits string into an Array |
| `repeat()` | `str.repeat(count)` | Repeats string $N$ times |
| `padStart()` | `str.padStart(len, char)` | Pads beginning to target length |
| `padEnd()` | `str.padEnd(len, char)` | Pads end to target length |
| `match()` | `str.match(regex)` | Matches against regular expression |
| `search()` | `str.search(regex)` | Searches for regex match index |
| `valueOf()` | `str.valueOf()` | Returns primitive string value |
| `fromCharCode()`| `String.fromCharCode(...)`| Creates string from character code points|

### Detailed Breakdown of Methods (1 to 22)

```javascript
const sample = "Hello, JavaScript!";

// 1. charAt()
console.log(sample.charAt(7)); // "J"

// 2. concat()
console.log("Hello".concat(", ", "World!")); // "Hello, World!"

// 3. includes()
console.log(sample.includes("Script")); // true

// 4. indexOf()
console.log(sample.indexOf("Java")); // 7

// 5. lastIndexOf()
console.log(sample.lastIndexOf("a")); // 10

// 6. replace()
console.log(sample.replace("JavaScript", "JS")); // "Hello, JS!"

// 7. split()
console.log(sample.split(", ")); // [ 'Hello', 'JavaScript!' ]

// 8. toLowerCase()
console.log(sample.toLowerCase()); // "hello, javascript!"

// 9. toUpperCase()
console.log(sample.toUpperCase()); // "HELLO, JAVASCRIPT!"

// 10. trim()
console.log("   Clean Code   ".trim()); // "Clean Code"

// 11. startsWith()
console.log(sample.startsWith("Hello")); // true

// 12. endsWith()
console.log(sample.endsWith("!")); // true

// 13. repeat()
console.log("Echo! ".repeat(3)); // "Echo! Echo! Echo! "

// 14. padStart()
console.log("5".padStart(3, "0")); // "005"

// 15. padEnd()
console.log("5".padEnd(3, "0")); // "500"

// 16. substring()
console.log(sample.substring(7, 17)); // "JavaScript"

// 17. slice()
console.log(sample.slice(-9, -1)); // "JavaScrip"

// 18. match()
console.log(sample.match(/Java/)); // Match object

// 19. search()
console.log(sample.search(/Script/)); // 11

// 20. valueOf()
console.log(sample.valueOf()); // "Hello, JavaScript!"

// 21. charCodeAt()
console.log(sample.charCodeAt(0)); // 72 (ASCII/Unicode for 'H')

// 22. String.fromCharCode()
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
```

---

## ✨ 7. Template Literals & String Interpolation

Introduced in ECMAScript 2015 (ES6), **Template Literals** revolutionized JavaScript string construction using backticks (`` ` ``).

### Key Advantages:
1. **Dynamic Expression Interpolation (`${expression}`)**:
   ```javascript
   const user = "Alice";
   const age = 25;
   console.log(`Hello, ${user}! Next year you will be ${age + 1}.`);
   ```
2. **Effortless Multi-Line Strings**:
   ```javascript
   const htmlSnippet = `
       <div class="card">
           <h2>Chapter 4</h2>
           <p>Loops and Strings</p>
       </div>
   `;
   ```
3. **Complex Nested Expressions**:
   ```javascript
   const item = { name: "MacBook Pro", price: 1999 };
   console.log(`Purchase: ${item.name} ($${item.price.toFixed(2)})`);
   ```

---

## 🎯 8. Chapter Summary & Key Takeaways

1. **Pick the Right Loop**:
   - Use `for...of` for clean element iteration across arrays and strings.
   - Use `for` when you require precise index manipulation or reverse steps.
   - Use `for...in` exclusively for Object keys.
2. **Prevent Infinite Loops**: Always ensure `while` and `do...while` conditions have guaranteed progression toward a terminating state.
3. **Strings are Read-Only**: Remember that strings cannot be changed in-place; all transformations create new strings.
4. **Prefer Template Literals**: Eliminate brittle `+` concatenation by adopting backtick template literals (`` `${}` ``).
5. **Master Core String Methods**: Knowing `slice()`, `split()`, `trim()`, `includes()`, and `replace()` is foundational to real-world data parsing.

---

## 🤝 9. Contribution & Author Details

<table align="center" width="100%">
  <tr>
    <td align="center" width="100%" style="padding: 24px; background: #0d1117; border-radius: 12px; border: 1px solid #30363d;">
      <h3>⚡ Authored & Engineered by: Tanmay (Adesh Srivastava)</h3>
      <p><em>Agentic AI Developer • Systems Architect • AI Builder</em></p>
      <p>
        Building foundational computer science handbooks, multi-agent frameworks, and high-performance open-source documentation.
      </p>
      <div align="center">
        <a href="https://github.com/tanmay119-pera">
          <img src="https://img.shields.io/badge/GitHub-tanmay119--pera-00D4FF?style=for-the-badge&logo=github&logoColor=black&labelColor=080C14" alt="GitHub" />
        </a>
        &nbsp;
        <a href="https://www.linkedin.com/in/adesh-srivastava-706278411">
          <img src="https://img.shields.io/badge/LinkedIn-Adesh_Srivastava-00D4FF?style=for-the-badge&logo=linkedin&logoColor=black&labelColor=080C14" alt="LinkedIn" />
        </a>
        &nbsp;
        <a href="https://x.com/Tanmay119">
          <img src="https://img.shields.io/badge/Twitter%20%2F%20X-Tanmay119-38BDF8?style=for-the-badge&logo=x&logoColor=white&labelColor=080C14" alt="X" />
        </a>
        &nbsp;
        <a href="mailto:tanmay.w119@gmail.com">
          <img src="https://img.shields.io/badge/Gmail-tanmay.w119-00D4FF?style=for-the-badge&logo=gmail&logoColor=white&labelColor=080C14" alt="Gmail" />
        </a>
      </div>
    </td>
  </tr>
</table>

---

## 📄 License

This educational handbook is distributed under the **MIT License**. Free to study, reference, adapt, and share!
