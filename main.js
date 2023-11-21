// Testing javascript link through web console

// Multi-line Comment

// Declaring a variable using var (the old way)

// Reassigning values

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type

// strings in js

// Arrays AKA Python Lists

// Objects AKA Python Dicts

// Hoisting

/* 
- NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
- Not only because of var hoisting behaviors can be tricky, but so you don't
accidentally re-declare a variable that already exists.
- LET and CONST are also variable declarations using the ES6 Syntax but do allow
for re-declaration.

- LET vs CONST
- let: allows for reassignment of values (Just like Python)
- const: does NOT allow for reassignment of values 
*/

// let

// const

// ------------------------ Math Operations ----------------------------

// Addition

// Incrementing

// Increment by 1

// Subtraction

// Decrement by 1

// Decrementing

// Multiplication

// Division

// Exponents

// ---------- Math is a built-in for javascript ---------------

// Math.floor()

// Math.ceil()

// Watch out for these behaviors when adding number and strings

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python

// Function Expression

// Arrow Function (ES6)

// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }


// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)


// ------------------------- JS Loops --------------------------------
// ----- For Loops -----

// loop through an array

// loop through an array with for-of loop (values) (ES6)

// loop through an array with for-in loop (indices) (ES6)

// ----- While Loops -----

// Do-While
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// index

// indexing from the end

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types

// joining an array with a seperator
// syntax: array.join(seperator)

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice())
console.log(artists)

// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)