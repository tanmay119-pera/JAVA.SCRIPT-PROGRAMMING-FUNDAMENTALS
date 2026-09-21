# Chapter 03: Operators & Conditional Statements

<p align="left">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators"><img src="https://img.shields.io/badge/Operators-7_Categories-A855F7?style=for-the-badge&logo=codecademy&logoColor=white" alt="Operators" /></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" /></a>
  <a href="https://github.com/tanmay119-pera"><img src="https://img.shields.io/badge/Contributor-Tanmay_(Adesh_Srivastava)-00D4FF?style=for-the-badge&logo=github&logoColor=black&labelColor=080C14" alt="Contributor" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge" alt="License" /></a>
</p>

> **Overview**  
> A comprehensive reference handbook covering computational operators (arithmetic, unary, assignment, strict comparison, logical, ternary, bitwise) and program control flow architectures (`if`, `if-else`, `else-if`, and `switch`).

---

## 📑 Table of Contents

- [💬 1. Code Comments in JavaScript](#-1-code-comments-in-javascript)
  - [Single-Line Comments (`//`)](#single-line-comments-)
  - [Multi-Line Block Comments (`/* */`)](#multi-line-block-comments--)
- [⚙️ 2. The 7 Categories of JavaScript Operators](#️-2-the-7-categories-of-javascript-operators)
  - [1. Arithmetic Operators](#1-arithmetic-operators)
  - [2. Unary Increment & Decrement (`++`, `--`)](#2-unary-increment--decrement---)
  - [3. Assignment Operators](#3-assignment-operators)
  - [4. Comparison Operators (Loose `==` vs Strict `===`)](#4-comparison-operators-loose--vs-strict-)
  - [5. Logical Operators & Short-Circuit Evaluation](#5-logical-operators--short-circuit-evaluation)
  - [6. The Conditional Ternary Operator (`?:`)](#6-the-conditional-ternary-operator-)
  - [7. Type Operators (`typeof`, `instanceof`)](#7-type-operators-typeof-instanceof)
  - [8. Bitwise Operators (Binary-Level Operations)](#8-bitwise-operators-binary-level-operations)
- [🔀 3. Conditional Statements & Control Flow](#-3-conditional-statements--control-flow)
  - [The `if` Statement](#the-if-statement)
  - [The `if...else` Statement](#the-ifelse-statement)
  - [The Multi-Branch `if...else if...else` Statement](#the-multi-branch-ifelse-ifelse-statement)
  - [The `switch` Statement (Cases, `break`, and `default`)](#the-switch-statement-cases-break-and-default)
- [⚖️ 4. Truthy vs Falsy Values in JavaScript](#️-4-truthy-vs-falsy-values-in-javascript)
- [📚 5. MDN Documentation & Standards](#-5-mdn-documentation--standards)
- [🎯 6. Chapter Summary & Key Takeaways](#-6-chapter-summary--key-takeaways)
- [🤝 7. Contribution & Author Details](#-7-contribution--author-details)
- [📄 License](#-license)

---

## 💬 1. Code Comments in JavaScript

Comments provide human-readable annotations that explain intent, document complex logic, and improve team collaboration. The JavaScript engine completely disregards comments during execution.

### Single-Line Comments (`//`)
```javascript
// This is a single-line comment explaining variable intent
let userScore = 95; // Inline comment
```

### Multi-Line Block Comments (`/* */`)
```javascript
/*
  This function calculates monthly compound interest.
  Arguments: principal, annualRate, periods
  Returns: calculated final balance
*/
```

---

## ⚙️ 2. The 7 Categories of JavaScript Operators

An **operator** is a mathematical or logical symbol that performs an operation on one or more **operands** (values or variables) to produce a result.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       JAVASCRIPT OPERATOR CATEGORIES                    │
├───────────────────┬─────────────────────────────────────────────────────┤
│ 1. Arithmetic     │ `+`, `-`, `*`, `/`, `%` (Modulus), `**` (Exponent)  │
├───────────────────┼─────────────────────────────────────────────────────┤
│ 2. Unary          │ Pre/Post Increment (`++a`, `a++`), Decrement (`--`) │
├───────────────────┼─────────────────────────────────────────────────────┤
│ 3. Assignment     │ `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`            │
├───────────────────┼─────────────────────────────────────────────────────┤
│ 4. Comparison     │ `==`, `===` (Strict), `!=`, `!==`, `>`, `<`, `>=`, `<=`│
├───────────────────┼─────────────────────────────────────────────────────┤
│ 5. Logical        │ `&&` (AND), `||` (OR), `!` (NOT)                    │
├───────────────────┼─────────────────────────────────────────────────────┤
│ 6. Ternary        │ `condition ? exprIfTrue : exprIfFalse`              │
├───────────────────┼─────────────────────────────────────────────────────┤
│ 7. Bitwise / Type │ `&`, `|`, `^`, `~`, `<<`, `>>`, `typeof`, `instanceof`│
└───────────────────┴─────────────────────────────────────────────────────┘
```

### 1. Arithmetic Operators
Used to perform standard mathematical calculations on numbers:

```javascript
let a = 10;
let b = 5;

console.log("Addition: " + (a + b));        // 15
console.log("Subtraction: " + (a - b));     // 5
console.log("Multiplication: " + (a * b));  // 50
console.log("Division: " + (a / b));        // 2
console.log("Modulus (Remainder): " + (a % b)); // 0
console.log("Exponentiation: " + (a ** b)); // 100000 (10^5)
```

### 2. Unary Increment & Decrement (`++`, `--`)
The timing of when the variable is modified relative to when its value is read is critical:

- **Pre-Increment (`++a`) / Pre-Decrement (`--b`)**: Increments/decrements the operand **first**, then yields the updated value.
- **Post-Increment (`a++`) / Post-Decrement (`b--`)**: Evaluates the operand with its **current** value first, then increments/decrements in memory.

```javascript
let x = 10;
console.log(++x); // 11 (Incremented immediately before output)

let y = 10;
console.log(y++); // 10 (Returns 10 for log, then becomes 11 in memory)
console.log(y);   // 11
```

### 3. Assignment Operators
Used to allocate or update the value stored in a variable:

```javascript
let c = 20;
c += 5;  // Equivalent to: c = c + 5  => 25
c -= 10; // Equivalent to: c = c - 10 => 15
c *= 2;  // Equivalent to: c = c * 2  => 30
c /= 3;  // Equivalent to: c = c / 3  => 10
c %= 4;  // Equivalent to: c = c % 4  => 2
```

### 4. Comparison Operators (Loose `==` vs Strict `===`)
Comparison operators evaluate relational logic and return a boolean (`true` or `false`).

```
┌────────────────────────────────────────────────────────────────────────┐
│                   LOOSE (==) vs STRICT (===) EQUALITY                  │
├───────────────────────────────────┬────────────────────────────────────┤
│   ⚠️ LOOSE EQUALITY (`==`)         │   🛡️ STRICT EQUALITY (`===`)        │
├───────────────────────────────────┼────────────────────────────────────┤
│ • Converts types automatically    │ • Compares BOTH Value AND Type     │
│ • Prone to unexpected bugs        │ • Zero implicit type coercion      │
│ • `5 == "5"` evaluates to `true`  │ • `5 === "5"` evaluates to `false` │
│ • `0 == false` evaluates to `true`│ • `0 === false` evaluates to `false`│
│ • `null == undefined` is `true`   │ • `null === undefined` is `false`  │
└───────────────────────────────────┴────────────────────────────────────┘
```

```javascript
let num = 10;
let str = "10";

console.log(num == str);  // true  (Loose: coerces string to number)
console.log(num === str); // false (Strict: type 'number' !== 'string')
console.log(num !== str); // true  (Strictly not equal)
console.log(num > 5);     // true
console.log(num <= 10);   // true
```
> 💡 **Golden Engineering Rule**: Always use strict equality (`===` and `!==`) to prevent hidden type-coercion bugs.

### 5. Logical Operators & Short-Circuit Evaluation
Logical operators allow combining multiple conditional tests:

- **Logical AND (`&&`)**: Evaluates to `true` only if **both** operands are truthy. Short-circuits on the first falsy operand.
- **Logical OR (`||`)**: Evaluates to `true` if **at least one** operand is truthy. Short-circuits on the first truthy operand.
- **Logical NOT (`!`)**: Inverts the boolean truthiness of its operand.

```javascript
let hasDriverLicense = true;
let hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense);                // false
```

### 6. The Conditional Ternary Operator (`?:`)
The ternary operator is the only JavaScript operator that takes three operands. It serves as an expressive, inline shorthand for standard `if...else` statements:

```javascript
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote); // "Yes"

let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("Number is: " + result); // "Even"
```

### 7. Type Operators (`typeof`, `instanceof`)
Used to determine an entity's data type or prototype ancestry:

```javascript
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"

let today = new Date();
console.log(today instanceof Date);   // true

let list = [1, 2, 3];
console.log(list instanceof Array);  // true
```

### 8. Bitwise Operators (Binary-Level Operations)
Bitwise operators treat operands as 32-bit integers and operate at the individual bit level:

```javascript
let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011

console.log(num1 & num2);  // Bitwise AND: 1 (Binary: 0001)
console.log(num1 | num2);  // Bitwise OR:  7 (Binary: 0111)
console.log(num1 ^ num2);  // Bitwise XOR: 6 (Binary: 0110)
console.log(~num1);        // Bitwise NOT: -6
console.log(num1 << 1);    // Left Shift: 10 (Binary: 1010)
console.log(num1 >> 1);    // Right Shift: 2 (Binary: 0010)
```

---

## 🔀 3. Conditional Statements & Control Flow

Conditional statements enable programs to make decisions and execute specific blocks of code depending on whether specified criteria evaluate to `true` or `false`.

### The `if` Statement
Executes a block of code only if the specified condition resolves to truthy:
```javascript
let temperature = 30;
if (temperature > 25) {
    console.log("It's a hot day!");
}
```

### The `if...else` Statement
Executes code block A if condition is true; executes code block B otherwise:
```javascript
let hour = 10;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
```

### The Multi-Branch `if...else if...else` Statement
Evaluates a cascade of conditions sequentially until a matching condition is encountered:
```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // Executes this block
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D / Retake required");
}
```

### The `switch` Statement (Cases, `break`, and `default`)
When testing a single variable against many possible discrete values, `switch` provides cleaner syntax than an extensive `if...else if` ladder:

```javascript
let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Matched!
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
        console.log("Invalid day index");
}
```
> ⚠️ **The Critical Role of `break`**: Without a `break` statement, execution will continue ("fall through") into following cases regardless of whether their condition matches!

---

## ⚖️ 4. Truthy vs Falsy Values in JavaScript

In JavaScript, any value coerced in a boolean context resolves to either **truthy** or **falsy**:

```
┌──────────────────────────────────┬──────────────────────────────────┐
│     ❌ FALSY VALUES (Always False)│    ✅ TRUTHY VALUES (Everything Else)│
├──────────────────────────────────┼──────────────────────────────────┤
│ • `false`                        │ • `true`                         │
│ • `0`, `-0`, `0n`                │ • Any non-zero number (1, -42)   │
│ • `""`, `''`, ```` (Empty String)│ • Any non-empty string ("0", " ")│
│ • `null`                         │ • Objects & Arrays (`{}`, `[]`)  │
│ • `undefined`                    │ • Functions                      │
│ • `NaN` (Not a Number)           │ • Dates & Symbols                │
└──────────────────────────────────┴──────────────────────────────────┘
```

---

## 📚 5. MDN Documentation & Standards

For official ECMAScript language specifications and web developer references:
- 📖 [MDN Expressions & Operators Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- 📖 [MDN Control Flow & Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

---

## 🎯 6. Chapter Summary & Key Takeaways

1. **Precedence Matters**: Expressions evaluate based on mathematical and logical operator precedence; use parentheses `()` to enforce order.
2. **Strictness by Default**: Always favor `===` and `!==` over `==` and `!=` to eliminate automatic type coercion hazards.
3. **Short-Circuiting**: Use `&&` for conditional execution and `||` for fallback default values.
4. **Ternaries for Assignment**: The ternary operator (`? :`) is ideal for concise conditional assignment, but avoid nesting ternaries.
5. **Remember `break` in Switch**: Always include `break` in `switch` statements unless deliberate fall-through is required.

---

## 🤝 7. Contribution & Author Details

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
