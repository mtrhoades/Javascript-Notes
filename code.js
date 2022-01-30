console.log("Javascript Notes")

/* Data Types:

Strings: "Hello, World!" or 'Hello, World!'
Booleans: True or False
Numbers: 4, 2.3, 7.55
Arrays: ["dog", "cat", "bird"] or [200, 623, -29] // starts at 0 index.
        .push - adds item to end of array.
        .pop - minus item from end of array.
        .concat - merges two or more arrays together.
        * All ARRAYS USE SQUARE BRACKET NOTATION. []
Objects: {name: "James", job: "software engineer"}
         {length: 20, width: 30} // objects have key: value pairs.
         * ALL OBJECTS USE DOT NOTATION (.) OR SQUARE BRACKET NOTATION [] TO ACCESS PROPERTIES WITHIN AN OBJECT.
         * key = property.
        - Use the dot notation (.) or square bracket notation [] to create new properties of an object.(new key: value pairs)
        - Use delete:*/
// EXAMPLE of using delete in objects:

const ourDog = {
    name: "Ruckus",
    legs: 4,
    tails: 1,
    friends: ["people", "other dogs"],
    bark: "Woof!"
}
delete ourDog.tails;

console.log(ourDog); // consoles out the above object ourDog without the "tails" property.

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

// * if else chains can be replaced with switch statments.

// EXAMPLE:

let answers = "";

function forSwitchCase(val) {
if (val === 1) {
    answers = "a";
} else if (val === 2) {
    answers = "b";
}else {
    answer = "c";

}
return answers;
}
console.log(forSwitchCase(1));

// Now the above example can be replaced with switch case:

function forSwitchCase(val) {
switch(val) {
    case 1:
    answers = "a";
        break;
    case 2:
    answers = "b";
        break;
    default:
    answers = "c";
}
return answers;
}
console.log(forSwitchCase(3));


// ANOTHER EXAMPLE OF SWITCH CASE WITH COUNTING CARDS:

let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count ++
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count --
    break;
}
if (count > 0) {
  return (`${count} Bet`)
} else {
  return (`${count} Hold`)
}

}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));
// consoles out 1 Bet, 2 Bet, 2 Bet, 1 Bet, 0 Hold


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

/** look up file in github:
 * 
 * javascript-07-higherOrderFunctions-practice
 * 
 */

// forEach functions are used to:
// (run a callback function for each element in an array.)

//* A callback function is a function you pass as an argument into another function.

//EXAMPLE CALLBACK FUNCTION:

function translate(name, toLanguageFunction) {
    let translation = toLanguageFunction(name);
    console.log(translation);
}
function toSpanish(name) {
    if (name === "hello") {
        return "hola";
    }
}
console.log(translate("hello", toSpanish)); // consoles out "hola"


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
    carInfo() {
        console.log("Make: ", + this.make + ", " + "Model: " + this.model + ", " +"Color: ", + this.color)
    }
    drive() {
        console.log("Drive");
    }
}
let newJaguar = new Car('Jaguar', 'Turbo XE', 'Black');
newJaguar.drive();
// ^ consoles out "Drive"
newJaguar.carInfo()



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


// Making a function for validating a pin number by using only 4 or 6 digits in length.

function validatePIN (pin) {
    if  (pin.length === 6 || pin.length === 4) {
        return true;
    } else {
        return false;
    }
}
console.log(validatePIN("3975")); // Has to be a "string" value to work.

// Below is the same code but with added code for typing in other characters other than number values for a pin number.

function validatePINs (pin) {
    if (!(typeof pin === "string" && !~pin.indexOf('.') && !isNaN(Number(pin)) && (pin.length === 4 || pin.length === 6))) {
        return false;
     } else {
        return true;
     }
  }
  console.log(validatePINs("99k9")); // Still has to be in "string" value to work.


// More Asynchronization:

function doChores() {
    console.log("Doing Chores."); // happens 1st.
    return new Promise ((resolve) => { // everytime you create a new Promise, use resolve as the parameter.
        resolve()
    })
}

doChores()
    .then(() => { // chain .then to the invoke.
        console.log("Let's go out and eat.") // happens 2nd.
    });


// sleep functions:

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {

        }, 1000);
    });
}


// ^ is the same as below: (showed different variable - sleep vs sleeps to show difference.)

const sleeps = () => {
    return new Promise((resolve)  => {
        setTimeout(resolve, 1000);
    });
}

// async/await functions:

function sleeper() {
    return new Promise ((resolve) => {
        resolve('hello')
    });
}

async function wellingtonEats() {
    await sleeper(); // waits until the promise above is resolved.

    console.log('Eat Meat!');

    return "$3.50";
}

console.log(wellingtonEats());

// Asyncronous vs Synchronous:
// Wait        vs. Don't wait

// * await pairs with async functions.

// * Look up JS-Web-game-part-7 in github to reference.



// Concurrency with Promise.all:

// Concurrency is using asynchronous logic to run mutliple processes at the same time.

// * Concurrency is not Parallelism

// Concurrency is implemented by software, parallelism is implemented by hardware.

// Promise.all:

function washDishes() {
    return new Promise((resolve) => {
        resolve('Done with dishes');
    });
}

function walkDog() {
    return new Promise((resolve) => {
        resolve('Done with walking dog');
    });
}

const promise = Promise.all([washDishes(), walkDog()]);

// const chores = await promise;
// ^ only works in async functions, would have to create an async function.

promise.then((value)=> {
    console.log(value);
});



/* Internal vs. External vs. Inline Javascript:

Internal JS: written inside HTML file with <script></script> tags.

External JS: using an external JS file like the one we are in right now and linking it to HTML file with <script> tag.

^ Link external JS files at END of body in HTML file.

Inline JS is using JS in HTML file but within each HTML element.

Example of Inline:

<button onclick="alert(Inline!');">Click Me</button> 

*/

// Below is an example of the order of functions and invoking it does not matter, it still runs the same.

print();

function print() {
    console.log(1)
}

// Selecting an element from HTML by id:

let h1Tag = document.getElementById('h1');
h1Tag.textContent = 'Something Else'; // changes the text content.

// Selecting an element from HTML by id and used in a function:

function changeColor(newColor) {
    let elem = document.getElementById('h1');
    elem.style.color = newColor; // changes the text color.
}

changeColor('red');

// Giving an element a class or id name in javascript:

let div = document.createElement('div');
div.id = 'content';
div.className = 'note';

console.log(div.id) 

// using .innerHTML:

const containerDiv = document.querySelector('#container');

const h1 = document.createElement('h1');
h1.innerHTML = "This is a heading";

containerDiv.appendChild(h1);
// ^ creates a new h1 element with content.

// append Child vs append:
// append is more verstatile than appendChild.

containerDiv.append("This is a container");

// using .remove to remove an element:

// containerDiv.remove(h1)

// ^ removes whole containerDiv.

// using setAttribute:

// h1.className = 'heading';

// or...

h1.setAttribute('id', 'heading'); // sets the attribute for element in javascript for the HTML file.


let header = document.createElement('h1');
header.id = 'header1';
header.textContent = "Warranty Information";
header.innerHTML = "Warranty Information";
document.body.append(header);
// ^ adds h1 Warranty Information

let firstNameLabel = document.createElement('label');
firstNameLabel.id = 'firstname';
firstNameLabel.innerHTML = "First Name";
document.body.append(firstNameLabel);
// ^ adds label First Name

let firstNameInput = document.createElement('input');
firstNameInput.id = 'firstname';
firstNameInput.innerHTML = "First Name";
document.body.append(firstNameInput);
// ^ adds input box for label First Name

// ^ comes from github file:
// javascript-06-dom-practice


