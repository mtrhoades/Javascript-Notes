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

// else if statements:
// *The order of how 'if else' and 'else if' statements is important.

function testNums(num) {
if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}
}
console.log(testNums(7)) // consoles out "Between 5 and 15".


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

console.log("The total is " + total);
console.log("The sentence says " + sentence);

/* Comparison Operators:

<   - less than, (converts data types when comparing.)
>   - greater than, (converts data types when comparing.)
<=  - less than or equal to, (converts data types when comparing.)
>=  - greater than or equal to, (converts data types when comparing.)

==  - equal to loose equality (loose equality compares by converting to a common type and than checking equality between them.)

=== - equal to strit equality (strict equality compares two or more operands by checking equality bewtween values as well as their types.* It does NOT perform a data type conversion)

!=  - not equal (loose equality, converts data types)
!== - not equal value or not equal type (strict equality, does NOT convert data types)

The logical 'and' operator:
&&  - returns true if and only if the operands to the left and right of it are true. Same thing as an 'if' statement nested into another 'if' statement.
EXAMPLE */

function testNum(num) {
    if (num > 5) {
    if (num < 10) {
        return "Yes";
    }
}
return "No";
}
console.log(testNum(6)) // consoles out "Yes".

// ^ is the same thing as:

function testNum(num) {
    if (num > 5 && num < 10) { // uses the && instead of two 'if' statements.
        return "Yes";
    }
    return "No";
}
console.log(testNum(9)); // consoles out "Yes".

/* The logical 'or' operator:
||  - returns true if either of the operands is true, Otherwise it returns false. */

// EXAMPLE

function testNum(num) {
if (num > 10 || num < 5) {
    return "No";
}
return "Yes";
}

console.log(testNum(11)); // consoles out "No"




// Template Literals:

let variable = "Hello"

// the old way
// let greeting = (variable + " ,World!")

// the new way
let greeting = (`${variable} ,World!`)

console.log(greeting)


// Higher Order Functions:
// forEach, .filter, .map

// forEach functions are used to:
// (run a callback function for each element in an array.)

//* A callback function is a function you pass into another function.

function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) { 
// run a for loop within the forEach function to make whatever array you want inside the argument when invoking it.
        let number = array[i] // made variable for a single number in whatever array is made out of i within the arguments of invoking it.
        callback(number) // callsback each number in the array when it is invoked below.
    }
}
forEach([1, 2, 3], function(number) { // arguments an array of [1, 2, 3], and the callback function of the variable 'number' made above.
    console.log('iteration', number) // consoles out iteration 1, 2, & 3
});



// OTHER EXAMPLES OF forEach METHOD:

// Array
const fruits = ['apple', 'banana', 'carrot'];

// forEach Method + Anonymous function
fruits.forEach(function(i) {
    console.log(i)
});

// forEach Method + Anonymous Arrow function with curly braces
fruits.forEach((i) => {
    console.log(i)
});

// forEach Method + Anonymous Arrow function WITHOUT curly braces
fruits.forEach((i) => console.log(i));



// this. keyword:
// references the array, instead of a parameter.
// replace array or array name with keyword => this.

/*
function forEach(callback) {
    for(let i = 0; i < this.length; i++) {
        let number = this[i]
        callback(number)
    }
}
*/

// Arrow Functions: these do the same thing as functions but with less code.

/* Initial function
function addsNumbers(a, b) {
    return a + b;
}

1. Refactor to an arrow function with curly braces
const addsNumbers = (a, b) => {
    return a + b;
}

2. Refactor arrow function WITHOUT curly braces */
const addsNumbers = (a, b) => a + b; // with no curly braces, return is implied.

const result = addsNumbers(3, 5)

console.log(`The result is ${result}`) // consoles out the number 8 using template literals




/* Creating Classes in Javascript:

A class is a the blueprint we write so we can build objects.
We can reuse the same class to create many objects.

class Car {

}

* The class name is always Capitalized.

Classes have fields to encapusulate our data in:

class Car {
    make;
    model;
    color;
}

the 'new' keyword represents an object, and is used when instantiating a new instance of the class.

Constructor Method:
is called each time we instatiate a new object. */

class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    CarInfo() {
        console.log("Make: ", + this.make + ", " + "Model: " + this.model + ", " +"Color: ", + this.color)
    }
    drive() {
        console.log("Drive");
    }
}
let newJaguar = new Car('Jaguar', 'Turbo XE', 'Black');
newJaguar.drive();
// ^ consoles out "Drive"
newJaguar.CarInfo()



/* Asychronous Code:

Asynchronous logic is expressed by:
1. callback  2. promises  3.async/await

* Asychronous logic is logic that allows the program to do other things while it waits in the background to run later.

Using the 'wait' function:

const character = createCharacter('assets/green-character.gif')

move character east:
character.walkEast()

make character wait 1500 miliseconds before making next move:
wait(1500)

^blocks all other code and just waits
*/

// Use setTimeout function instead.

// Using setTimeout function:

console.log('a');
console.log('b');

setTimeout(() => {
    console.log('c'); // console logs 'c' after 2000 miliseconds.
}, 2000);

console.log('d')

// walkEast function:

const moveEast = (time) => {
    console.log('Moving east');

    setTimeout(() => {
        console.log('Stop moving');
    }, time);
};

moveEast(1000); // consoles 'Moving East' twice immeadiatley
moveEast(2000); // consoles 'Stop Moving' once after 1000 miliseconds, and than again after 2000 miliseconds

// ^ Look at activity - Web Game part V (Asynchrony with callback functions in github)

// Promises in Asynchrony:
// Promises turns callback 'hell' into cleaner code.

const greet = () => console.log('hello')
/* is the same as:
const greet = () => {
    console.log('hello')
}
*/
// invoke it:
greet();


const movesEast = () => {
    console.log('Moving East');

    setTimeout(() => {
        console.log('Stop Moving');
    }, 5000);
 };

const movesNorth = () => {
    console.log('Moving North');

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Stop Moving');
        }, 5000);
    });
};

movesEast();
movesNorth();
    // .then((command) => {
    //     console.log(command);
    // });

