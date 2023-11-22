// Testing javascript link through web console
console.log('test')

// Multi-line Comment
/* 
This is
a multiline
comment
*/


// Declaring a variable using var (the old way)
var firstName = 'christian';
console.log(firstName);

// Reassigning values
firstName = 'dylan';
console.log(firstName);

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
console.log(typeof firstName)

// numbers in js
var num1 = 5
var num2 = 5.5
var sum = num1 + num2
console.log(typeof num1)


// Arrays AKA Python Lists
// var students = ['daniel', 'alicia', 'jack']
// console.log(students)

// Objects AKA Python Dicts
var bio = {
    fullName: 'dylan katina',
    age: 99,
    location: 'USA'
}

console.log(bio)

// Hoisting
console.log(hoist)
var hoist = 'I am hoisted'
console.log(hoist)

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
let x = 5
console.log(x)
x = 3
console.log(x)

// const
const y = 10
console.log(y)

// ------------------------ Math Operations ----------------------------

// Addition
let add = 5 + 5

// Incrementing
add += 5

// Increment by 1
add++
console.log(add)

// Subtraction
let diff = 10 - 5
console.log(diff)

// Decrement by 1
diff--
console.log(diff)

// Decrementing
console.log(diff-=2)

// Multiplication
let product = 5 * 5
console.log(product)

product *= 2
console.log(product)

// Division
let quotient = 25 / 5
console.log(quotient)

quotient /= 2
console.log(quotient)

// Exponents
let expo = 5**2
console.log(expo)

expo**=3
console.log(expo)


// ---------- Math is a built-in for javascript ---------------

// Math.floor()
console.log(Math.floor(15.67))

// Math.ceil()
console.log(Math.ceil(15.67))

// Watch out for these behaviors when adding number and strings
const dylan_num = 18;
const aakash_num = '23';
console.log(dylan_num + parseInt(aakash_num))

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName('Heather', 'Smallwood'))


// Arrow Function (ES6)
const goatPlayer = (playerName) => {
    return `The Goat will always be ${playerName}`
}

console.log(goatPlayer('Michael Jordan'))

// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }
const checkWeather = (temp) => {
    if (temp < 65){
        return 'Its cold outside, consider wearing a hoodie!';
    } else if (temp < 80) {
        return 'Its a beautiful day';
    } else {
        return 'Its hot outside, avoid wearing black!';
    }
}

console.log(checkWeather(60))


// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)
const oddOrEven = (num) => (num % 2 === 0 ? true : false)

console.log(oddOrEven(5))

// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
let students = ['jesse', 'jack', 'aakash']

for(let i=0; i<10; i++){
    console.log(i)
}

// loop through an array
for(let i=students.length-1; i>=0; i--){
    console.log(students[i])
}

// loop through an array with for-of loop (values) (ES6)
for(let name of students){
    console.log(name)
}

// loop through an array with for-in loop (indices) (ES6)
for(let idx in students){
    console.log(students[idx])
}

// ----- While Loops -----
let num = 0
while (num < 10) {
    console.log(num)
    num+=1
}

// Do-While
let num3 = 15
do {
    console.log(num3)
    num3 += 1
} while (num3 < 10)
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// index
console.log(artists[1])

// indexing from the end
console.log(artists[artists.length-1])

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types
console.log(artists.toString())

// joining an array with a seperator
// syntax: array.join(seperator)
console.log(artists.join('$'))

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice(1))
console.log(artists)


// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)
const splicedArtists = artists.splice(0)
console.log(artists)
console.log(splicedArtists)

 

//==================Exercise #1 ==========//
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    for(let i = 0; i < names.length; i++){
        if(string.toLowerCase().includes(names[i].toLowerCase())){
            console.log(`Matched ${names[i]}`);
        } else {
            console.log("No Match");
        }
    }
}

findWords(dog_string, dog_names);
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'cherry', 'date']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

console.log(replaceEvens(arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//================Exercise #3=========//

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(arr) {
    let count = {};
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    for(let num in count) {
        if(count[num] % 2 !== 0) {
            return Number(num);
        }
    }
}

// =================== Exercise #4 ================//
// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Requirements

//     You can assume you will be given an integer input.
//     You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
//     NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// Example

// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


