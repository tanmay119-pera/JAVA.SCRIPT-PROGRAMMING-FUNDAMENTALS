<div align="center">

<!-- HERO TYPING BANNER -->
<p align="center">
  <a href="https://github.com/tanmay119-pera">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=16&duration=2400&pause=1000&color=38BDF8&background=00000000&center=true&vCenter=true&repeat=true&width=580&lines=%E2%9A%A1+JavaScript+Foundations+%E2%80%A2+Chapter+02;%F0%9F%93%A6+Variables%2C+Memory+Allocation+%26+Scope;%F0%9F%94%B1+Var+vs+Let+vs+Const+Deep-Dive;%F0%9F%A7%A9+All+8+JavaScript+Primitive+%26+Object+Types;%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB+Curated+by+Tanmay+(Adesh+Srivastava)" alt="Typing Banner" />
  </a>
</p>

<!-- BADGES BAR -->
<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"><img src="https://img.shields.io/badge/Data_Types-8_Built--in_Types-00D4FF?style=for-the-badge&logo=codecademy&logoColor=white" alt="Data Types" /></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" /></a>
  <a href="https://github.com/tanmay119-pera"><img src="https://img.shields.io/badge/Contributor-Tanmay_(Adesh_Srivastava)-00D4FF?style=for-the-badge&logo=github&logoColor=black&labelColor=080C14" alt="Contributor" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge" alt="License" /></a>
</p>

> **Chapter 02: Variables & Data Types in JavaScript**  
> An exhaustive, master-level pedagogical handbook on memory storage, scoping mechanics (`var`, `let`, `const`), dynamic type coercion, and all 8 JavaScript data types (Primitives vs Reference Objects).

---

</div>

## 📑 Table of Contents

- [📦 1. Understanding Variables in JavaScript](#-1-understanding-variables-in-javascript)
  - [What is a Variable?](#what-is-a-variable)
  - [Memory Allocation: The Key-Value Storage Model](#memory-allocation-the-key-value-storage-model)
- [🔄 2. Dynamic Typing in JavaScript](#-2-dynamic-typing-in-javascript)
  - [Loose Typing & Type Mutation](#loose-typing--type-mutation)
  - [Runtime Type Reassignment](#runtime-type-reassignment)
- [📏 3. The 14 Universal Rules of Variable Naming](#-3-the-14-universal-rules-of-variable-naming)
  - [Syntactic Constraints](#syntactic-constraints)
  - [Case Naming Conventions](#case-naming-conventions)
- [⚖️ 4. Variable Declarations: `let`, `const`, and `var`](#-4-variable-declarations-let-const-and-var)
  - [Comparison Matrix](#comparison-matrix)
  - [Why Modern JavaScript Rejects `var`](#why-modern-javascript-rejects-var)
  - [Temporal Dead Zone (TDZ)](#temporal-dead-zone-tdz)
- [🧱 5. Block Scoping (`{}`) in JavaScript](#-5-block-scoping--in-javascript)
- [🧩 6. The 8 JavaScript Data Types](#-6-the-8-javascript-data-types)
  - [Primitive vs Non-Primitive Overview](#primitive-vs-non-primitive-overview)
  - [1. Number](#1-number)
  - [2. String](#2-string)
  - [3. Boolean](#3-boolean)
  - [4. Null](#4-null)
  - [5. Undefined](#5-undefined)
  - [6. Object](#6-object)
  - [7. Symbol (ES6)](#7-symbol-es6)
  - [8. BigInt (ES11)](#8-bigint-es11)
- [🏗️ 7. Deep-Dive: Complex Object Modeling](#️-7-deep-dive-complex-object-modeling)
- [🧠 8. Stack vs Heap Memory Mechanics](#-8-stack-vs-heap-memory-mechanics)
- [🎯 9. Chapter Summary & Key Takeaways](#-9-chapter-summary--key-takeaways)
- [🤝 10. Contribution & Author Details](#-10-contribution--author-details)
- [📄 License](#-license)

---

## 📦 1. Understanding Variables in JavaScript

### What is a Variable?
In programming, a **variable** is a symbolic name (identifier) associated with a reserved location in the computer's memory. It functions as a named container that holds a value. Variables allow developers to capture user input, track application state, manipulate numbers, and persist data throughout runtime.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        VARIABLE MEMORY MODEL                           │
├───────────────────┬────────────────────────────────────────────────────┤
│ Identifier (Name) │ Value (Stored Data)                                │
├───────────────────┼────────────────────────────────────────────────────┤
│ age               │ 19                                                 │
│ name              │ "tanmay"                                           │
│ price             │ 19.99                                              │
│ isLoggedIn        │ true                                               │
│ x                 │ null                                               │
└───────────────────┴────────────────────────────────────────────────────┘
```

### Memory Allocation: The Key-Value Storage Model
When a variable is assigned, JavaScript allocates memory for the value and registers the identifier (the key) in the current Execution Context's Environment Record.
```javascript
// Variable assignment syntax: identifier = value
age = 19;
name = "tanmay";
price = 19.99;

console.log(name);  // Output: tanmay
console.log(age);   // Output: 19
console.log(price); // Output: 19.99
```

---

## 🔄 2. Dynamic Typing in JavaScript

### Loose Typing & Type Mutation
JavaScript is a **dynamically typed** (loosely typed) language. Unlike statically typed languages (C++, Java, Rust) where a variable's type is strictly enforced at compile time:
```cpp
// In C++ (Statically Typed):
int score = 100;
// score = "A+"; // ❌ COMPILE ERROR! Cannot assign string to integer
```

In JavaScript, types are associated with **values**, not variables. A variable can freely store any data type and transition to a completely different data type at any point during program execution:

```javascript
let dynamicVar = 25;              // Initially a Number
console.log(dynamicVar);          // Output: 25

dynamicVar = "twenty-five";       // Reassigned to a String
console.log(dynamicVar);          // Output: twenty-five

dynamicVar = { status: "ok" };    // Reassigned to an Object
console.log(dynamicVar);          // Output: { status: 'ok' }
```

---

## 📏 3. The 14 Universal Rules of Variable Naming

From [`java.js`](./java.js), here are the fundamental syntactic rules and professional naming guidelines every developer must observe:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    JAVASCRIPT VARIABLE NAMING RULES                     │
├────┬────────────────────────────────────────────────────────────────────┤
│ 1  │ Must begin with a letter (a-z, A-Z), underscore (_), or dollar ($)│
├────┼────────────────────────────────────────────────────────────────────┤
│ 2  │ Cannot begin with a digit (0-9) (e.g. `1user` is illegal)          │
├────┼────────────────────────────────────────────────────────────────────┤
│ 3  │ Only letters, digits, underscores (_), and dollar signs ($) allowed│
├────┼────────────────────────────────────────────────────────────────────┤
│ 4  │ Cannot contain spaces, hyphens, or punctuation (e.g. `user-name`)  │
├────┼────────────────────────────────────────────────────────────────────┤
│ 5  │ Variable names are strictly CASE-SENSITIVE (`age` != `Age` != `AGE`)│
├────┼────────────────────────────────────────────────────────────────────┤
│ 6  │ Cannot use Reserved Keywords (`let`, `const`, `class`, `function`) │
├────┼────────────────────────────────────────────────────────────────────┤
│ 7  │ Must be descriptive and convey clear intent (`isCompleted` > `c`)  │
├────┼────────────────────────────────────────────────────────────────────┤
│ 8  │ Balance conciseness with clarity (avoid cryptic single letters)    │
├────┼────────────────────────────────────────────────────────────────────┤
│ 9  │ Maintain uniform naming conventions throughout your codebase       │
├────┼────────────────────────────────────────────────────────────────────┤
│ 10 │ camelCase is the industry standard for variables (`fullName`)      │
├────┼────────────────────────────────────────────────────────────────────┤
│ 11 │ snake_case is accepted, common in Python/databases (`user_profile`)│
├────┼────────────────────────────────────────────────────────────────────┤
│ 12 │ kebab-case is NOT supported in JS identifiers (`my-var` fails)     │
├────┼────────────────────────────────────────────────────────────────────┤
│ 13 │ PascalCase is reserved for Classes and Components (`UserModel`)    │
├────┼────────────────────────────────────────────────────────────────────┤
│ 14 │ Single letters (`i`, `j`, `k`) should only be used as loop counters│
└────┴────────────────────────────────────────────────────────────────────┘
```

---

## ⚖️ 4. Variable Declarations: `let`, `const`, and `var`

JavaScript provides three keywords to declare variables. Choosing the right one determines your variable's lifecycle, scope, and mutability.

### Comparison Matrix

| Feature | `var` (Legacy ES5) | `let` (Modern ES6+) | `const` (Modern ES6+) |
| :--- | :--- | :--- | :--- |
| **Scope** | Function Scope | **Block Scope `{}`** | **Block Scope `{}`** |
| **Re-assignable?** | ✅ Yes | ✅ Yes | ❌ No (Immutable identifier) |
| **Re-declarable?** | ✅ Yes (Prone to bugs!) | ❌ No (Throws SyntaxError) | ❌ No (Throws SyntaxError) |
| **Hoisting Behavior** | Hoisted with `undefined` | Hoisted into **TDZ** | Hoisted into **TDZ** |
| **Requires Initialization?**| ❌ No | ❌ No | ✅ Yes (Mandatory initial value) |
| **Global Object Property** | Binds to `window.name` | Does not pollute `window` | Does not pollute `window` |
| **Modern Recommendation** | 🚫 **Avoid** | ⚡ **Use when value changes** | 🛡️ **Default choice!** |

### Why Modern JavaScript Rejects `var`
1. **Accidental Variable Overwriting**:
   ```javascript
   var status = "active";
   var status = "dormant"; // No error! Silently overwrites
   ```
2. **Lack of Block Scope (Leaking Out of Loops & Conditions)**:
   ```javascript
   if (true) {
       var secret = "12345";
   }
   console.log(secret); // "12345" Leaks outside the block!
   ```

### Temporal Dead Zone (TDZ)
Variables declared with `let` and `const` exist in a **Temporal Dead Zone** from the start of the block until the declaration line is executed. Accessing them before initialization throws a `ReferenceError`, preventing subtle bugs:
```javascript
// console.log(greeting); // ❌ ReferenceError: Cannot access 'greeting' before initialization
let greeting = "Hello!";
```

---

## 🧱 5. Block Scoping (`{}`) in JavaScript

A **block** in JavaScript is any code enclosed within curly braces `{}`. It establishes an independent lexical scope:

```javascript
{
    let isolatedVariable = 10;
    const blockConstant = 50;
    console.log(isolatedVariable); // Output: 10
}

// Outside the block:
// console.log(isolatedVariable); // ❌ ReferenceError: isolatedVariable is not defined
```

This ensures temporary calculation variables don't pollute surrounding application memory.

---

## 🧩 6. The 8 JavaScript Data Types

JavaScript categorizes all values into **8 built-in types**:

```
                              ┌────────────────────────┐
                              │  JAVASCRIPT DATA TYPES │
                              └───────────┬────────────┘
                                          │
         ┌────────────────────────────────┴────────────────────────────────┐
         ▼                                                                 ▼
┌─────────────────────────────────┐                       ┌─────────────────────────────────┐
│       PRIMITIVE TYPES (7)       │                       │     NON-PRIMITIVE TYPES (1)     │
├─────────────────────────────────┤                       ├─────────────────────────────────┤
│ 1. Number                       │                       │ 8. Object                       │
│ 2. String                       │                       │    ├── Object Literals `{}`     │
│ 3. Boolean                      │                       │    ├── Arrays `[]`              │
│ 4. Null                         │                       │    └── Functions `function()`   │
│ 5. Undefined                    │                       └─────────────────────────────────┘
│ 6. Symbol (ES6)                 │
│ 7. BigInt (ES11)                │
└─────────────────────────────────┘
```

### 1. Number
Represents both integers and double-precision 64-bit binary floating-point numbers (IEEE 754).
```javascript
let integer = 42;
let floatingPoint = 3.14159;
let negative = -100;
let infinity = Infinity;
let notANumber = NaN; // "Not a Number" (invalid calculation result)
```

### 2. String
Represents textual data enclosed in single quotes (`' '`), double quotes (`" "`), or backticks (`` ` ` ``).
```javascript
let single = 'Single quotes';
let double = "Double quotes";
let template = `Template literal allows ${integer} injection`;
```

### 3. Boolean
A logical data type that represents only one of two truth values: `true` or `false`.
```javascript
let isStudent = true;
let isGraduated = false;
let isLoggedIn = true;
```

### 4. Null
Represents the intentional absence of any object value. It is explicitly assigned by developers to indicate an empty state.
```javascript
let emptyValue = null;
console.log(emptyValue); // Output: null

// Historical JS quirk:
console.log(typeof null); // Output: "object" (acknowledged ES legacy bug)
```

### 5. Undefined
Indicates that a variable has been declared, but has not yet been assigned any value.
```javascript
let pendingDeclaration;
console.log(pendingDeclaration); // Output: undefined
console.log(typeof pendingDeclaration); // Output: "undefined"
```

### 6. Object
The core structural pillar of JavaScript. An unordered collection of key-value pairs used to model real-world entities.
```javascript
let person = {
    name: "John",
    age: 30
};
```

### 7. Symbol (ES6)
A unique and immutable primitive value commonly utilized as a non-colliding key for object properties.
```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // Output: false (Always guaranteed unique!)
```

### 8. BigInt (ES11)
Introduced in ECMAScript 2020 to represent arbitrary-precision integers larger than the standard Number limit ($2^{53} - 1$). Appended with `n`.
```javascript
let maxSafeInt = Number.MAX_SAFE_INTEGER; // 9007199254740991
let hugeNumber = 9007199254740991234567890n;
console.log(hugeNumber); // Output: 9007199254740991234567890n
```

---

## 🏗️ 7. Deep-Dive: Complex Object Modeling

From [`java.js`](./java.js), here is the structured representation of a composite object demonstrating nested properties, arrays, and primitive fields:

```javascript
const student = {
    name: "tony stark",
    age: 19,
    isGraduated: false,
    city: "new york",
    hobbies: ["reading", "coding", "gaming"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    }
};

// Accessing properties:
console.log(student.name);               // "tony stark" (Dot notation)
console.log(student["city"]);            // "new york"   (Bracket notation)
console.log(student.hobbies[1]);         // "coding"     (Nested array access)
console.log(student.address.zipCode);    // "10001"      (Nested object access)
```

---

## 🧠 8. Stack vs Heap Memory Mechanics

```
┌─────────────────────────────────┬─────────────────────────────────┐
│     STACK MEMORY (Primitives)   │      HEAP MEMORY (Objects)      │
├─────────────────────────────────┼─────────────────────────────────┤
│ • Fixed size, allocated quickly │ • Dynamic size, reference store │
│ • Values copied by VALUE        │ • Values copied by REFERENCE    │
│ • Number, String, Boolean, etc. │ • Objects, Arrays, Functions    │
└─────────────────────────────────┴─────────────────────────────────┘
```

- **Passed by Value**: If you copy a primitive, changing the copy does **not** affect the original.
- **Passed by Reference**: If you copy an object, both variables point to the **same heap memory location**. Mutating one mutates both!

---

## 🎯 9. Chapter Summary & Key Takeaways

1. **Variables are Named Pointers**: They reserve space in memory to store and manipulate state.
2. **Adopt Modern Scoping**: Always prioritize `const` by default; use `let` only when you anticipate reassigning the variable; completely eliminate `var`.
3. **Understand 8 Data Types**: 7 Primitives (`Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`) and 1 Reference type (`Object`).
4. **Primitives are Immutable**: Operations on primitives return brand new values; Objects can have their internal properties mutated in-place.
5. **Enforce Clean Naming**: Adhere strictly to `camelCase` and avoid ambiguous variable identifiers.

---

## 🤝 10. Contribution & Author Details

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

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=soft&color=0:0F172A,45:0284C7,100:38BDF8&height=80&section=footer&text=%E2%9A%A1%20KEEP%20LEARNING%20%E2%80%A2%20KEEP%20BUILDING%20%E2%9A%A1&fontSize=16&fontAlignY=55&fontColor=ffffff&desc=Written%20%26%20Curated%20by%20Tanmay%20(Adesh%20Srivastava)&descSize=11&descAlignY=76&descColor=bae6fd" width="80%" alt="Footer Banner" />
</p>
