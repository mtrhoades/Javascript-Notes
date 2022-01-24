console.log("Javascript Notes")

/* Data Types:

Strings: "Hello, World!" or 'Hello, World!'
Booleans: True or False
Numbers: 4, 2.3, 7.55
Arrays: ["dog", "cat", "bird"] or [200, 623, -29] // starts at 0 index.
        .push - adds item to end of array.
        .pop - minus item from end of array.
        .concat - merges two or more arrays together.
Objects: {name: "James", job: "software engineer"}
         {length: 20, width: 30} // objects have key: value pairs.
*/
// other things with data types:

// typeof - helps determine data type
console.log(typeof("Hello, World!"))
console.log(typeof(88))
console.log(typeof([3, 2, 3, 4])) // returns objects for arrays in typeof.



/* if statements:

if (true) {
    run code
} */

if (10 < 5) {
    console.log("this code will not run because 10 is not less than 5")
}
if (10 > 5) {
    console.log("this code will run because 10 is greater than 5")
}

/* else statements: - (must go with if statements)

else (false) {
    run code
} */

if (10 < 5) {
    console.log("this code will run because 10 is greater than 5")
}else {
    console.log("this code will not run becuase it is false.")
}


/* Scoping:

Global-Scope: A variable declared outside of a function. Can be accessed through all other scopes.

Function-Scope: A variable declared inside of a function. Can only be accessed within that function

Block-Scope: A variable declared inside a code block {}.

Local-Scope: A variable declared within a function/block, they become local to the function/block and can only be accessed within the function/block.
^ contains function scope and block scope.


/* Declaration of Variables:

var = (global scoped/function-scoped) For older browsers. As long as variable is not declared within any function it CAN change value later on. 
^ *do not use that much*

let = (block-scoped/local-scope) CAN change value later on but can NOT change the value of variable inside the same code block more than once. The last declared variable is what gets ran.

const = (block-scoped/local-scope) can NOT change the value of this variable later on. ONLY is declared inside of code blocks.
^ *use let and const the most*
*/


//* For Loops:

// example

for(let i = 0; i < 1; i++) {
    console.log("the console will write this 1 time")
}

for(let i = 0; i < 5; i++) {
    console.log("the console will write this 5 times")
}

//* Functions:

// (refer to example #1 below)
// functions consist of the function keyword (function), a function name (addNumber), parameters (a, b) which are always in parentheses, code to run in curly brackets {}, and an invoke (addNumber(3, 5)), which runs the code with the specific parameters set.

// example

// function #1
function addNumber (a, b) {
    return a + b
}

// function #2
function buildPhrase(word1, word2) {
    let phrase = word1 + " " + word2
    return phrase
}

let total = addNumber(3, 5);
let sentence = buildPhrase("Hello", "World!")

// invoking functions
addNumber(3, 5)
buildPhrase("hello", "world")

console.log("The total is " + total)
console.log("The sentence says " + sentence)

//* 