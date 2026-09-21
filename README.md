# JavaScript Programming Fundamentals

<p align="left">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-Web_Standards-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" /></a>
  <a href="https://github.com/tanmay119-pera"><img src="https://img.shields.io/badge/Contributor-Tanmay_(Adesh_Srivastava)-00D4FF?style=for-the-badge&logo=github&logoColor=black&labelColor=080C14" alt="Contributor" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge" alt="License" /></a>
</p>

> **Overview**  
> An open-source, chapter-by-chapter computer science curriculum and handbook covering modern JavaScript from core foundations to advanced full-stack concepts. Each chapter features comprehensive theoretical documentation, runnable browser companions, and detailed practical code samples.

---

## 📑 Table of Contents

- [🚀 Curriculum & Chapters Index](#-curriculum--chapters-index)
- [📂 Repository Architecture](#-repository-architecture)
- [💻 Getting Started & Execution](#-getting-started--execution)
- [🛠️ Tech Stack & Prerequisites](#️-tech-stack--prerequisites)
- [🗺️ Complete 13-Chapter Roadmap](#️-complete-13-chapter-roadmap)
- [🤝 Author & Maintainer](#-author--maintainer)
- [📄 License](#-license)

---

## 🚀 Curriculum & Chapters Index

Click on any chapter link to read its comprehensive handbook:

| Chapter | Title & Handbook | Core Focus Topics | Companion Files | Status |
| :---: | :--- | :--- | :---: | :---: |
| **01** | [📖 Chapter 01: Introduction to JavaScript](./CH-01-INTRO-JS/README.md) | Web trinity, Client vs Server, Execution engines, DevTools | [`intro-to-java.js`](./CH-01-INTRO-JS/intro-to-java.js) | Complete |
| **02** | [📖 Chapter 02: Variables and Data Types](./CH-02-VARIABLE&DATATYPES/README.md) | Memory model, 14 Naming rules, `let`/`const`/`var`, 8 Data types | [`java.js`](./CH-02-VARIABLE&DATATYPES/java.js) | Complete |
| **03** | [📖 Chapter 03: Operators & Conditional Statements](./CH-03-OPREATORS&ConditionalStatement/README.md) | Arithmetic, Strict equality, Logical, Bitwise, `if...else`, `switch` | [`operators.js`](./CH-03-OPREATORS&ConditionalStatement/operators.js) | Complete |
| **04** | [📖 Chapter 04: Loops & Strings](./CH-04-LOOPS&STRING/README.md) | `for`/`while`/`do-while`/`for-of`, String immutability, 22 Methods | [`loops.js`](./CH-04-LOOPS&STRING/loops.js) | Complete |
| **05** | [📖 Chapter 05: Arrays in JavaScript](./CH-05-ARRAY/README.md) | Zero-indexing, Traversal, 24 Essential Array Methods, Mutation rules | [`array.js`](./CH-05-ARRAY/array.js) | Complete |
| **06** | [📖 Chapter 06: Functions in JavaScript](./CH-06-FUNCTIONS/README.md) | First-class functions, Arrow syntax, Scopes, Closures, Callbacks | [`functions.js`](./CH-06-FUNCTIONS/functions.js) | Complete |
| **07** | ⏳ Chapter 07: DOM Manipulation - Part 1 | Selectors, Node trees, Querying elements, DOM properties | — | Planned |
| **08** | ⏳ Chapter 08: DOM Manipulation - Part 2 | Attributes, Class manipulation, Dynamic element creation | — | Planned |
| **09** | ⏳ Chapter 09: Events in JavaScript | Event listeners, Event objects, Bubbling, Capturing | — | Planned |
| **10** | ⏳ Chapter 10: Building JavaScript Project 1 | Full-stack mini application, Dynamic UI state management | — | Planned |
| **11** | ⏳ Chapter 11: Classes & Object-Oriented JS | Prototypes, Classes, Constructors, Inheritance, Encapsulation | — | Planned |
| **12** | ⏳ Chapter 12: Asynchronous JavaScript | Callbacks, Promises, Async/Await, Microtask queue | — | Planned |
| **13** | ⏳ Chapter 13: Fetch API & Modern Networking | HTTP requests, REST APIs, JSON parsing, Error handling | — | Planned |

---

## 📂 Repository Architecture

```
JAVA^SCRIPT-PROGRAMMING/
├── README.md                                  # Repository Master Curriculum Dashboard
├── CH-01-INTRO-JS/                            # Chapter 1: Introduction to JavaScript
│   ├── README.md                              # Comprehensive Theory Handbook
│   ├── index.html                             # Browser Entrypoint
│   └── intro-to-java.js                       # Chapter Executable Code
├── CH-02-VARIABLE&DATATYPES/                  # Chapter 2: Variables and Data Types
│   ├── README.md                              # Comprehensive Theory Handbook
│   ├── index.html                             # Browser Entrypoint
│   └── java.js                                # Chapter Executable Code
├── CH-03-OPREATORS&ConditionalStatement/      # Chapter 3: Operators & Control Flow
│   ├── README.md                              # Comprehensive Theory Handbook
│   ├── index.html                             # Browser Entrypoint
│   └── operators.js                           # Chapter Executable Code
├── CH-04-LOOPS&STRING/                        # Chapter 4: Loops & Strings
│   ├── README.md                              # Comprehensive Theory Handbook
│   ├── index.html                             # Browser Entrypoint
│   └── loops.js                               # Chapter Executable Code
├── CH-05-ARRAY/                               # Chapter 5: Arrays in JavaScript
│   ├── README.md                              # Comprehensive Theory Handbook
│   ├── index.html                             # Browser Entrypoint
│   └── array.js                               # Chapter Executable Code
└── CH-06-FUNCTIONS/                           # Chapter 6: Functions in JavaScript
    ├── README.md                              # Comprehensive Theory Handbook
    ├── index.html                             # Browser Entrypoint
    └── functions.js                           # Chapter Executable Code
```

---

## 💻 Getting Started & Execution

### 1. Clone the Repository
```bash
git clone https://github.com/tanmay119-pera/JAVA.SCRIPT-PROGRAMMING-FUNDAMENTALS.git
cd JAVA.SCRIPT-PROGRAMMING-FUNDAMENTALS
```

### 2. Run in Your Web Browser
Each chapter folder includes an `index.html` file that directly mounts the corresponding JavaScript file.
- Double-click any `index.html` file or use the **VS Code Live Server** extension.
- Open Developer Tools (`F12` or `Cmd + Option + I`) and switch to the **Console** tab to view output.

### 3. Run via Node.js
You can execute any `.js` file directly in your terminal:
```bash
# Example: Run Chapter 1
node CH-01-INTRO-JS/intro-to-java.js

# Example: Run Chapter 5
node CH-05-ARRAY/array.js
```

---

## 🛠️ Tech Stack & Prerequisites

- **JavaScript (ECMAScript 2015 / ES6+)**
- **Node.js** (v16.0.0 or higher recommended for terminal execution)
- **Modern Web Browser** (Google Chrome, Brave, Mozilla Firefox, or Safari)
- **Code Editor** (Visual Studio Code recommended with Prettier and Live Server extensions)

---

## 🗺️ Complete 13-Chapter Roadmap

```
┌────────────────────────────────────────────────────────────────────────┐
│               ⚡ JAVASCRIPT PROGRAMMING CURRICULUM ROADMAP ⚡           │
├────────────────────────────────────────────────────────────────────────┤
│  ✅ CH-01: Introduction to JavaScript                                  │
│  ✅ CH-02: Variables & Data Types (Memory, Scope & Primitives)          │
│  ✅ CH-03: Operators & Conditional Statements (Logic & Flow)           │
│  ✅ CH-04: Loops & Strings (Iteration & Text Manipulation)             │
│  ✅ CH-05: Arrays (Indices, Traversal & 24 Essential Methods)          │
│  ✅ CH-06: Functions (Declarations, Arrows, Closures & Scope)          │
│  ⏳ CH-07: DOM Manipulation - Part 1 (Selectors & Trees)               │
│  ⏳ CH-08: DOM Manipulation - Part 2 (Attributes & Dynamic Styles)     │
│  ⏳ CH-09: Events in JavaScript (Event Listeners & Bubbling)           │
│  ⏳ CH-10: Building Project 1 (Interactive Full Application)           │
│  ⏳ CH-11: Classes & Object-Oriented Programming (OOP)                 │
│  ⏳ CH-12: Asynchronous JS (Callbacks, Promises, Async/Await)         │
│  ⏳ CH-13: Fetch API & Networking (Connecting to Real-World APIs)      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 👨‍💻 Author & Maintainer

<table align="center" width="100%">
  <tr>
    <td align="center" width="100%" style="padding: 24px; background: #0d1117; border-radius: 12px; border: 1px solid #30363d;">
      <a href="https://github.com/tanmay119-pera">
        <img src="https://github.com/tanmay119-pera.png" width="90px" style="border-radius: 50%; border: 3px solid #00D4FF; box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);" alt="Tanmay (Adesh Srivastava)" />
      </a>
      <h3 style="margin-top: 12px;">⚡ Authored & Engineered by: Tanmay (Adesh Srivastava)</h3>
      <p><em>Agentic AI Developer • Systems Architect • AI Builder</em></p>
      <p>
        Building foundational computer science handbooks, multi-agent frameworks, and high-performance open-source documentation.
      </p>
      <div align="center" style="margin-top: 14px;">
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

This educational repository is distributed under the **MIT License**. Free to study, reference, adapt, and share!