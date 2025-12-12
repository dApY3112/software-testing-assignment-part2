# Software Testing – Assignment Part 2

## Purpose of this Repository

This repository is based on the **official student template** for the Software Testing course at **Tampere University**.  
The purpose of this assignment is to practice **unit testing**, **branch coverage analysis**, and **test quality evaluation** using **Jest** and **Coveralls**.

The repository contains only:
- Source code under test (`/src`)
- Test cases written by the student (`/tests`)
- A minimal `package.json`
- License files (must not be modified or removed)

⚠️ **Important:**  
The license file inside the source code folder must **NOT** be removed or modified under any circumstances.  
Doing so violates the license terms of the software under testing.

---

## Assignment Objectives

The goals of this assignment are:

- Design and implement **unit tests** for JavaScript utility functions
- Achieve **high statement, function, and branch coverage**
- Analyze uncovered branches and justify limitations when full coverage is not feasible
- Use **Jest** for testing and **Coveralls** for coverage reporting
- Demonstrate understanding of **edge cases** and **JavaScript type coercion**

---

## Technologies Used

- **Node.js**
- **Jest** – Unit testing framework
- **Babel / ES Modules**
- **Coveralls** – Test coverage reporting

---

## Project Structure

├── src/ # Source code under test
├── tests/ # Unit tests
│ └── other-utils/
├── coverage/ # Coverage reports (generated)
├── package.json
├── jest.config.mjs
├── README.md
└── LICENSE


---

## Test Coverage

Coverage is automatically reported using **Coveralls**.

[![Coverage Status](https://coveralls.io/repos/github/dApY3112/software-testing-assignment-part2/badge.svg)](https://coveralls.io/github/dApY3112/software-testing-assignment-part2)

All required test suites pass successfully, and the project achieves **high overall coverage**, including:
- Statement coverage
- Branch coverage
- Function coverage

Some branches are environment-dependent (e.g. Node.js Buffer detection) and are documented accordingly.

---

## How to Run the Project

### Install dependencies
```bash
npm install
```
### Run all tests
```bash
npm test
```
### Generate coverage report
```bash
npm run coverage report
```
Notes on Coverage Limitations

Certain branches (e.g. Node-specific Buffer detection or environment-based feature flags) cannot be fully covered without modifying the original source code or runtime environment.
These cases are intentionally left as-is to comply with the assignment rules and software license.
Author

Student:Tin Nguyen, Nguyen Ngo

Course: Software Testing

University: Tampere University
