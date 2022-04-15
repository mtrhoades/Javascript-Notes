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
        - Use delete */
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

// using .hasOwnProperty - is a method to return a boolean indicating whether the object has the specified property as its own property in the object. (NOT inheriting it)

// EXAMPLE:

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    }
};
console.log(recordCollection[2548].hasOwnProperty("artist")); // consoles out "true", also uses square bracket notation to grab the nested object of id - 2548 within the object recordCollection to find if it has a property of "artist".



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
    console.log("this code will show that it is false.")
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

// for(let i = 0; i < 1; i++) {
    // code to run goes here;
// }
// ^ (let i = 0) is initialization statement,
// ^ (i < 1) is the condition statement,
// ^ (i++) is the final

// example

for(let i = 0; i < 1; i++) {
    console.log("the console will write this 1 time")
}

for(let i = 0; i < 5; i++) {
    console.log("the console will write this 5 times")
}

// for loops for nested arrays:

// EXAMPLE:

function multiplyAll(arr) { // arr is the parameter, which links to each argument in the array of multiplyAll.

    let product = 1; // start off at 1 since we are multiplying everything together.
  
    for (let i = 0; i < arr.length; i++) { // first for loop for the whole array of multiplyAll
      for (let j = 0; j < arr[i].length; j++) { // second for loop for each array inside of multiplyAll array.
        product = product * arr[i][j]; // product/total must equal to the parameter/argument of each for loop, i and j.
      }
    }
  
    return product; // must use return since this is all inside of a function.
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); // consoles out total of 5040.

// While Loops:
// runs while a specified condition is true and stops once that condition is no longer true.

// EXAMPLE:

const myArray = [];

let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray) // consoles out [5, 4, 3, 2 ,1, 0]

// Do While loops:

// it will first DO one pass of the code inside the loop no matter what, and then continue to run the loop WHILE the specified condition evalutates to true.

// EXAMPLE:

const ourArray = [];
let t = 10; // had to use t as variable, i was already declared in above example.

do {
  ourArray.push(t);
  t++;
} while (t < 5) 

console.log(ourArray) // consoles out [10] because the condition of while t < 5 does not go further than the original variable decleration of t = 10.

//* Functions:

// (refer to example #1 below)
// functions consist of the function keyword (function), a function name (addNumber), parameters (a, b) which are always in parentheses, code to run in curly brackets {}, and an invoke/call (addNumber(3, 5)), which runs the code with the specific parameters/arguments set.

// * anything after return does not get ran, return ends the function.
// * every function must have a return statement, otherwise it logs undefined.

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

// invoking/calling functions
addNumber(3, 5)
buildPhrase("hello", "world")

console.log("The total is " + total);
console.log("The sentence says " + sentence);


// Lookup functions:




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

// .filter: function that filters out arrays for specific parts.

// EXAMPLE:

// * definitly look up on github - javascript-10-superhero-filter-function-practice file for better examples.

// addHero(heroes.filter((hero => hero.powers.canFly)));

// ^ above is basically a template for .filter functions, where heroes is the array, hero is the parameter for each individual hero/person, and .powers.canFly is accessing certain parts in an individuals object (hero) in the main array of heroes.

// .map() methods: an array method that returns a new array and takes a callback as a parameter.
// EXAMPLE:
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let newDaysArray = days.map((day) => {
    return day.toUpperCase();
});
console.log(newDaysArray)

// ^ same thing as:
newDaysArray = days.map(day => day.toUpperCase());
console.log(newDaysArray)


// Arrow Functions: these do the same thing as functions but with less code.

/* Initial function
function addsNumbers(a, b) {
    return a + b;
}

1. Refactor to an arrow function with curly braces
const addsNumbers = (a, b) => {
    return a + b;
}

2. Refactor arrow function WITHOUT curly braces */// addHero(heroes.filter((hero => hero.powers.canFly)));

const addsNumbers = (a, b) => a + b; // with no curly braces, return is implied.

const result = addsNumbers(3, 5)

console.log(`The result is ${result}`) // consoles out the number 8 using template literals



// ************************************************************************************
/* Interpolated string:
is the process of evalutating a string literal containing one more placeholders, yielding the result in which the placeholders are replaced with thier corresponding values.

Example:

const greeting8 = (greeting, personName) => `${greeting} ${personName}`

                                            ^ the $ and {} represent the placeholder that gets replaced with corresponding values.
same thing as hard coding:
const greeting8 = (greeting, personName) => (greeting + " " + personName)

 ************************************************************************************  */

// Using arrow function .map() with a ternary operator:
const weekDays = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'
  ]
  
const bestDaysOfTheWeek = weekDays.map(day => (
    day[0] === 'S' ? day.toUpperCase() : day ) 
);

console.log(bestDaysOfTheWeek) // consoles out SATURDAY & SUNDAY in all caps only.




/* Creating Classes in Javascript:

A class is a the blueprint we write so we can build objects.
We can reuse the same class to create many objects.

class Car {

}

* The class name is always Capitalized.

Classes have fields to encapsulate our data in:

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


// Concurrency uses Promises and async/await.

// Concurrency is using asynchronous logic to run mutliple processes at the same time.

// * Concurrency is not Parallelism

// Concurrency is implemented by software, parallelism is implemented by hardware.

// Concurrency with Promise.all:

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

const containerDiv = document.querySelector('#container'); // Use . for grabbing class names. Use # for grabbing id names.

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

let mainSection = document.createElement('section') // creates section tag in HTML
let h2 = document.createElement('h2')// creates h2 tag in HTML
h1.textContent = 'Coding is Fun!' // adds text to h2 tag content
mainSection.appendChild(h1) // appends h2 tag to section tag
document.body.append(mainSection) // appends section tag to document to actually show it in the browser window.

let header = document.createElement('h1');
header.id = 'header1';
header.textContent = "Warranty Information";
header.innerHTML = "Warranty Information";
document.body.append(header);
// ^ adds h1 Warranty Information

let firstNameLabel = document.createElement('label');
firstNameLabel.id = 'firstName';
firstNameLabel.innerHTML = "First Name";
document.body.append(firstNameLabel);
// ^ adds label First Name

let firstNameInput = document.createElement('input');
firstNameInput.id = 'firstName';
firstNameInput.className = "firstName"
firstNameInput.innerHTML = "First Name";
document.body.append(firstNameInput);
// ^ adds input box for label First Name

// ^ comes from github file:
// javascript-06-dom-practice


// Using addEventListener:

let header1 = document.createElement('h1')
header1.textContent = 'Hello World'
document.body.append(header1)

header1.addEventListener('dblclick', function() {
	alert("I was double-clicked!");
});
// ^ after double clicking on header1 it pops up message saying "I was double-clicked!"


// Event Propagation:

// Event Bubbling - inner to outer
// Event Capturing - outer to inner

//EXAMPLE:

// let div2 = document.querySelector('.div2');
// let div1 = document.querySelector('.div1');

// div1.addEventListener('click', () => {
//     console.log('Div1 is clicked');
// }, true);

// div2.addEventListener('click', () => {
//     console.log('Div2 is clicked');
// });


// preventDefault: *for working with forms.

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // something else
    // validation
    // send the form to the backend
});

// stopPropagation: stops bubbling and/or capturing.

let div2 = document.querySelector('.div2');
let div1 = document.querySelector('.div1');

div1.addEventListener('click', (event) => {
    console.log('Div1 is clicked');
    event.stopPropagation();
}, true);

div2.addEventListener('click', (event) => {
    console.log('Div2 is clicked');
    event.stopPropagation();
}, true);

// ^ only allows console log of "div1 is clicked" even when div2 is clicked as supposed to above example of same thing without stopPropagation.

// Target Element: targets each specific div whether it's nested in other divs or not.

const ul = document.querySelector('ul');

ul.addEventListener('click', (event) => {
    event.target.classList.toggle('strike-through'); // allows to be clicked on to strike through and go back to not striked through, below only allows to strike through, not go back.
    // event.target.classList = "strike-through";
});


/* Regular Expressions (Regex):
 a sequence of characters that shows a search pattern.
 is a way to search through text in a very advanced way.
 used for find and replace, among lots of other things.
 used for password inputs of certain amount of characters, certain digits, special characters, etc.
 used for form validations - phone numbers.

 . matches any single character.
 ? matches 0 or 1 occurrence.
 * matches 0 or more of the preceeding character.
 +/- matches 1 or more or less of the preceeding character.
 /d matches any single digit.
 /D matches any character that is not a digit.
 /w matches any alphanumeric character and underscore.
 /W matches any character that is not a word character.
 /s matches a white space character.
 /S matches a single character other than white space.
 $ matches the end of a string.
 [^A-Z] matches anything that is not an uppercase letter.
   When using the .replace() method the original string is NOT changed.
   
*/


/* jQuery:

 Was created to handle cross-browser compatibility issues.
 Used as a function that makes use of expressions to find out matching elements from a DOM based on the given criteria.
 Has fewer lines of code, more functionality baked into VS code.
 Uses $ a lot to create less lines of code. 
 * Always starts with $.
 jQuery is a subset of Javascript.

 EXAMPLE: look at github file: JS-jQuery-Practice

*/


// Recursion:

// is the concept that a function can be expressed in terms of itself.
// a function that calls itself.

// EXAMPLE 1: of a function with a for loop switched to a recursive function.

// regular function with for loop for a countdown.

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
    console.log('Hooray!')
}
countDown(3)

// now ^ that same function as a recursive function:

function countDownRecursive(n) {
    if (n <= 0) { // 2. is 3 <= 0? No it's not so it skips the below code and logs 3. This is the condition that exits the function immeadiatley also called the guard clause: (n <= 0).
        console.log('Hooray!')
        return
    }
    console.log(n)
    countDownRecursive(n - 1) // 3. than we do this call, 3 - 1 = 2. now is 2 <= 0? like above its a No, so it logs 2. And it loops back to 2 - 1 = 1, is 1 <= 0? No so it logs 1. Now do the loop again, 1 - 1 = 0, now is 0 <= 0? Yes, so that stops the loop and returns with the console.log('Hooray!').
}
countDownRecursive(3) // 1. calls the number 3 inside the function countDownRecursive.
// 4. each call returns itself so it looks like this to the computer:
/*
countDownRecursive(3)
    countDownRecursive(2)
        countDownRecursive(1)
            countDownRecursive(0)
            return
        return
    return
return

*/

// EXAMPLE 2:

function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i
    }
    return total
}

// recursive:

function sumRangeRecursive(n, total = 0) {
    if (n <= 0) { // guard clause: when (n <= 0) we want to exit the loop, which is opposite of above in the for loop: (i > 0).
        return total
    }
    return sumRangeRecursive(n - 1, total + n )
}
sumRangeRecursive(3, 0) // defaults total to 0. You don't really have to pass that in, it's already 0. So now do the return code of (n - 1, total + n), so 3 - 1 = 2, and the total: 0 + 3 = 3.
    sumRangeRecursive(2, 3) // so do it again, is 2 <= 0? No so run the return code: 2 - 1 = 1, and total: 3 + 2 = 5.
        sumRangeRecursive(1, 5) // do it again, is 1 <= 0? No so run the return code: 1 - 1 = 0 and total: 5 + 1 = 6
            sumRangeRecursive(0, 6) // this exits the loop and stops the code because 0 <= 0.
            // so ^ this returns a total of 6 in the console, when 3 is invoked a n. like so:
console.log(sumRangeRecursive(3));



/* Performance:

- How quickly the pages of websites load and display in the browser.
- Why does it matter?
    - It impacts conversion rates.
    - it affects user experience.
    - Affects traffic.
- 0 through 4 seconds is the is the ideal page load time.
- Javascript issues are a factor of performance as well as: Unoptimized images, Excessive HTTP requests, and Poorly written scripts.
- For Javascript issues:
    - Use asynchronous code as a suggested route to avoid any long page load times.
example: 


    - Make the code as small as possible, Audit the code to remove any unnecessary code or change it into smaller pieces of code.
*/


// fetch: 
// is a function that makes HTTP requests.
// is asynchronous, and returns a promise.

// EXAMPLES: below is great example of the pattern.

// async function getReddit() {
//     let response = await fetch('https://www.reddit.com/');
//     let resultObject = await response.json();

//     console.log(resultObject)
// }


async function getExample() {
    const response = await fetch('https://random.dog/woof.json');
    const result = await response.json(); // unpacks it
    const url = result.url;

    const img = document.createElement('img')
    img.src = url
    document.body.append(img);
    
    console.log(typeof result);
    console.log(result);
}
getExample();

// ^ uses json and data to display an image from above url. (works only with certain images, they are random hence the url name.)

//.JSON: stored on server NOT local
// Javascript Object Notation
// {
//     "numOfLegs": 4,
//     "name": "Suzy" // can only use "" NOT '' for JSON objects!
// }

// fetch sends HTTP requests

/* Four properties of HTTP requests:
    1. URL
    2. Method
    3. Header
    4. Body

- POST, PATCH, PUT:
- are HTTP requests you can use to send a 'body' with your HTTP requests.

* You can NOT use GET & DELETE to send a 'body' with your HTTP requests.

- POST: to add data
- PATCH: to update data
- GET: retrieves data
- PUT: replaces data
- DELETE: removes data
    
    */
   
   //  * json.stringify - turns object into a string

// * how to start server: (in terminal)

// npm start (npm = NODE PACKET MANAGER)

// * how to kill the server port:

// npx kill-port 9001 // use port number currently using

// * you can NOT use the same port for multiple files.

// www.npmjs.com

// ** npm install bootstrap **
// ** npm install lodash **

// ^ Use for a bunch of code (packages) already built and installed.



async function changeBookName(){
	const response = await fetch('http://localhost:3000/api-docs.html', {
    method: 'PATCH', // get data from the server
    headers: {
    	'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    	title: 'The Shinobi Initiative',
    	})
    })
    
    const result = await response.json();
	console.log(result);
}
// changeBookName(); // cannot call the function right now as the url does not work anymore... Just fill it in with a working api link.

// More examples and practice on github file - JS-Building-a-Shared-Counter-Part-2


// Third party libraries or bootstrapping for javascript:
// other developers have written code to solve the same problems for other developers to use in their code.

// ChartJS

// ^ can be added with a script tag copied from the documentation into your HTML file. Once installed, javascript will use the functions, objects, and classes provided in the library.
// ^ Use just the CDN url and copy it into a script src tag.

// ** Look up EXAMPLE on github file - JS-Stock-Charts **

// ^ shows great examples of pulling stock prices from api and formulating them into certain graphs for comparison.


// Maps:

// mapping libraries/api's:
    // Google maps
    // Mapbox
    // Leaflet (foundation of Mapbox)
//      *(Leaflet can NOT use navigation like google maps does.)
    // Open Layers

// maps are constructed with layers and tiles.
// your map will be useless without tiles.
// reference the map id (#) first and use L.map
// set the center of the map and zoom level.

/* EXAMPLE:

const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});

*/

// factory functions: are an alternative to classes in javascript when using map api's.

// ** EXAMPLE of using Leaflet map api in github file - JS-Building-an-Interactive-Map **

// Encapsulation:
// below is all in one object - expenseList

let expenseList = {
    amounts: [ 100, 200, 350, 500 ],
    expenses: document.querySelector('ul.expenses'),
    
    display: function() {
        this.amounts.forEach((amount) => {
            let expenseItem = document.createElement('li');
            expenseItem.textContent = amount;
            this.expenses.append(expenseItem);
            expenseItem.addEventListener('click', () => {
                // this.clear(); // The this.clear() function gets rid of the whole list when you click on it.)
                expenseList.clear(); // ^ does the same thing, since they both refer to the same object: expenseList.
            });
        });
    },
    
    clear: function() {
        this.expenses.innerHTML = '';
    },
};

let totalExpenses = {
    log: function () {
        let expenses = 0;
        expenseList.amounts.forEach((amount) => {
            expenses += amount;
        });
        console.log(expenses)
    },
};

expenseList.display() // consoles out to browser window, NOT THE CONSOLE, the list of expenses. (linked to ul class="expenses" in HTML file.)
totalExpenses.log(); // consoles out the sum/total of expenses to the console, 1150.



// Ternary:
// is basically an if statement

// EXAMPLE:

function timeOfDay(tod) {

// if (tod > 20) {
//     answer = "late-night snack";
// } else if (tod > 16) {
//     answer = "dinner";
// } else if (tod > 11) {
//     answer = "lunch";
// } else {
//     answer = "breakfast";
// }

// turned into a ternary:

return tod > 20 ? "late-night snack" : tod > 16 ? "dinner" : tod > 11 ? "lunch" : "breakfast";
}

// ^ the colons are kind of like the "if false"/else if conditions.

// what you want to evaluate ? if true than do this : else do this

// More Ternary examples:

let isSunny = true;
let activity = isSunny ? "I am going for a walk" : "I will take another nap";

console.log(activity)



//*** Slack github files and recordings from class: ***
// Destructuring ?
// rest/spread operators ?

// * Spread operator: EXPANDS; adds to an existing array and spreads the array out.

// * Rest operator: Can be used as a parameter (...) to go over all arguments passed in, instead of calling each one solely.



// Profile Lookup functions: (freeCodeCamp)
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for(let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop]
        } else {
        return "No such property"
       }
     }
    } 
    return "No such contact"
  }
  
  console.log(lookUpProfile("Harry", "likes"));


// ********************************************************************************
// ******* Complete map building and using markers for user location and other locations for restaurants, hotels, coffee shops, markets:
// look up github file - JS-Activity-Making-A-Map-Using-API *****************
// *******************************************************************************


// Let's review how JavaScript makes it to the browser to run:

// A user visits a site by clicking a link or typing in the URL bar.
// An HTTP request is sent to a server that resides at the URL.
// The server responds with HTML, CSS, and JavaScript, which the browser parses and runs.



// ************************************************************
//CODEWARS PRACTICE:

// multiples of 3 or 5
// takes any number as parameter and lists all the numbers below it that are divisible by 3 or 5 evenly, than adds them up to equal the sum that would be of all numbers in multiples of 3 & 5 below the number passed in.
function muliplesOf3Or5(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum+=i;
            continue;
        } else {
            continue;
        }
    }
    return sum;
}
console.log(muliplesOf3Or5(12));


// return the opposite integer (negative)
function opposite(number) {
    return number * -1
}
console.log(opposite(17));


// turning number into a string
function numberToString(num) {
    let string = num.toString()
    return string
}
console.log(numberToString(78))


// reversing a string
function solution(str){
    return str.split("").reverse().join("")
}
console.log(solution("hello"))



// Find the largest number in an array:
// [7, 9, 2, 3, 1]
// [1, 2, 3, 4]


// ************************************************
// using Math.max with spread operator
function findTheLargestNumber(array) {
    return Math.max(...array); // spreads the array out to go over each item in the array.
}

console.log(findTheLargestNumber([7, 9, 2, 3, 1]))
// ^ 9
console.log(findTheLargestNumber([1, 2, 3, 4]))
// ^ 4
// ********** ^ BEST EXAMPLE ^*************************


// OR... using a for loop
function largestNumber(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        return max;
    }
}
console.log(largestNumber([7, 9, 2, 3, 1])); // 9
console.log(largestNumber([1, 2, 3, 4,])); // WHY IS IT  NOT 4??
console.log(largestNumber([4, 7, 9, 10, 2, 33])) // NOT WORKING FOR LARGEST NUMBER!!


// OR... .forEach
let array = [1, 2, 3, 4]
let max = 0;
array.forEach(element => {
    if (element > max) {
        max = element;
    }
    return max;
})
console.log(max) // 4


// OR... using .sort
function findLargestNum(array) {
    array.sort((a, b) => a - b)
    return array[array.length - 1]
}
console.log(findLargestNum([7, 9, 2, 3, 1])) // 9
console.log(findLargestNum([33, 55, 22, 55, 56, 77, 99])) // 99
// *********** ^ SECOND BEST EXAMPLE ^ ***************


// * Using .shift() & .pop()
// .shift() removes the firt element (at the zeroeth index) from an array.
// .pop() removes the last element in an array.
let fruitas = ['apple', 'mango', 'orange', 'kiwi'];
let fruitas2 = ['apple', 'mango', 'orange', 'kiwi'];
console.log(fruitas.pop());
console.log(fruitas2.shift());

console.log(fruitas);
console.log(fruitas2);


// String Repeat:
const repeatStr = (num, str) => {
    solution = "";
    while (num > 0) {
        solution += str
        num--;
    }
    return solution
}
console.log(repeatStr(4, "Hi")) // HiHiHiHi

// OR...
const repeatStrs = (num, str) => {
    let text = str;
    for (let i = 0; i < num - 1; i++) {
        text.concat(str);
    }
    return text;
}
console.log(repeatStrs(7, "Hello")) // HelloHelloHelloHelloHelloHelloHello
// NOT WORKING!!

// OR... 
repeatString = (num, str) => str.repeat(num);

console.log(repeatString(9, "Hey")) // HeyHeyHeyHeyHeyHeyHeyHeyHey


// **** Grabbing 1st letter in string and making uppercase:
const justFirstLetterCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(justFirstLetterCapitalize('what is up!'))
// ^ charAt() - grabs letters in a string based on index.


// SUMMATION:
// summation(2)     --->            1 + 2 = 3
// summation(3)     --->        1 + 2 + 3 = 6
// summation(4)     --->   1 + 2 + 3 + 4 = 10
summation = (num) => {
    sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum + " =" + " summation of " + (sum - (sum - num));
}
console.log(summation(10));
// ^ how can we print to the console 1 + 2 + 3 + 4.... = 45 ?????

// OR... same as:
summations = num => num * (num + 1) / 2;
console.log(summations(5))// 15



// Converting booleans to strings "yes" or "no":
boolToWord = (bool) => {
    return bool ? 'Yes' : 'No'
    //  (if bool === true) {
    //     return 'Yes'
    // } else {
    //     return 'No'
    // }
}

console.log(boolToWord(false)); // 'No'
console.log(boolToWord(true)); // 'Yes'

// OR... same as:
boolsToWord = bool => bool ? 'Yes' : 'No';

console.log(boolsToWord(false)); // 'No'
console.log(boolsToWord(true)); // 'Yes'



// Sum of only positive numbers in an array:
positiveSum = (arr) => {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
        sum += arr[i]
        }
    }
    return sum
}
console.log(positiveSum([3, 7, -1, -99, 92])); // 102

  // OR... same as:
positiveSums = (arr) => {
    sum = 0;
    arr.forEach((num) => num > 0 ? sum += num : 0);
    return sum
}
console.log(positiveSums([3, 7, -1, -99, 92])); // 102
console.log(positiveSums([-3, -7, -1, -99, -92])); // 0

// OR... same as:
let possSum = (arr) => arr.reduce((accum, curr) => (curr > 0 ? accum + curr : accum), 0); // accum = 0
console.log(possSum([4, -8, -9, 2])) // 6



// Sum of only negative numbers in array:
negativeSum = (arr) => {
    sum = 0;
    arr.forEach((num) => num < 0 ? sum += num : 0);
    return sum
}
console.log(negativeSum([3, 7, -1, -99, 92])); // -100



// Turn any number into a negative number:
makeNegative = (num) => {
    return num > 0 ? -num : num
}
console.log(makeNegative(7));



// Remove first and last letter in a string:
removeChar = (str) => str.slice(1, -1)
// when using .slice() method, 1 is the first character and -1 is always the last character in strings.
console.log(removeChar('Helsinki'));



// Find the smallest integer in an array:
findSmallestInt = (array) => {
    smallest = array[0];
    for(let i = 0; i < array.length; i++) {
    if (array[i] <= smallest) {
        smallest = array[i]
        }
    }
    return smallest
}
console.log(findSmallestInt([4, 99, 0, -45, 77])) // -45

// OR... same as:
findSmallestInteger = (array) => {
    return Math.min(...array)
}
console.log(findSmallestInteger([4, 99, 0, -45, 77])) // -45



// Square(n) Sum:
squareSums = (numbers) => {
    sum = 0;
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}
console.log(squareSums([3, 3, 3])); // 27

// OR... same as:
squaresSum = numbers => {
    sum = 0;
    numbers.forEach((numbers) => {
        sum += (numbers **2)
    });
    return sum
}
console.log(squaresSum([2, 4, 6])) // 56

// OR... same as:
squareSum = (numbers) => {
    sum = numbers.reduce((acc, curVal) => {
      return acc + curVal ** 2;
    }, 0);
    return sum;
  }
console.log(squareSum([1, 2, 2])); // 9



// Counting Sheep:
countSheeps = (arrayOfSheep) => {
    total = 0;
    arrayOfSheep.forEach((sheep) => {
        sheep === true ? total += sheep : 0
    });
    return total
}
console.log(countSheeps(
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
  )); // 17

// OR... same as:
countSheep = (arrayOfSheeps) => arrayOfSheeps.filter(Boolean).length;

console.log(countSheep(
        [true,  true,  true,  false,
        false,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, false ,
        true,  true,  true,  true ,
        false, false, true,  true]
)); // 15



// // Make a function that can take any non-negative integer as an argument and
// return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// EXAMPLES:
// Input:     42145  --->  Output: 54421
// Input:    145263  --->  Output: 654321
// Input: 123456789  --->  Output: 987654321

descendingOrder = num => Number(num.toString().split('').sort((a, b) => b - a).join(''));    
// .split converts to an array, .join converts to a string, .sort sorts in ascending (a - b) or descending (b - a)
    
// tests
console.log("-----Tests for Descending Order-----");
console.log("--If code is correct, console log shows true--");
console.log(descendingOrder(0) === 0);
console.log(descendingOrder(1) === 1);
console.log(descendingOrder(111) === 111);
console.log(descendingOrder(15) === 51);
console.log(descendingOrder(1021) === 2110);
console.log(descendingOrder(123456789) === 987654321);



// Remove string spaces:
noSpace = str => str.split(' ').join('') // .split() --> splits string into sub-strings and returns an array, .join() --> joins an array of strings using a seperator, or in this case the space was the seperator when using .split() and there are no spaces when using .join()

console.log(noSpace('Hello World whats up yeah'));



/* What is the difference between a variable that is: null, undefined, or undeclared?

 
Null = nothing in memory, doesn't exist. (Falsey)
undefined = not assigned any value.
undeclared = needs to use let or const to declare variable properly.


At the very end of interview, you are asked this common interview question by the employer:
"Do you have any questions for us?"
An answer of:  I have no questions for you, says you haven't done your homework on the company or aren't curious.  Not good.
So, how would you respond to this?  Feel free to reply to this message with your answer


*/

// PRACTICE with .filter looping methods of objects inside arrays:
let Contacts = [
    {
        name: "Jane Doe",
        age: 21,
        social_media: {
            instagram: "jane.doe",
            twitter: "jane_doe"
        }
    },
    {
        name: "John Doe",
        age: 21,
        social_media: {
            instagram: "john.doe",
            twitter: "john_doe"
        }
    },
    {
        name: "Mary Deer",
        age: 21,
        social_media: {
            twitter: "mary_deer"
        }
    },
    {
        name: "Gary Deer",
        age: 21,
        social_media: {
            twitter: "gary_deer"
        }
    }
]

// filter for each contacts name
Contacts.filter(contact => {
    console.log(contact.name)
});

// filter for each contact with NO instagram
const noInstagram = Contacts.filter((contact) => {
    return contact.name ? contact.social_media.hasOwnProperty("instagram") === false : []
});
console.log(noInstagram)

// use Math.random() to choose a contact in the array randomly each time
const randomContact = Contacts[Math.floor(Math.random() * Contacts.length)];
console.log(randomContact)



// Refactoring practice:
let myFunc = (x) => {
    let y = ''
    if (x == 0) {
        y = true;
    } else if (x === 1) {
        y = false;
    } else if (x === 2) {
        y = true;
    } else if (x === 3) {
        y = false;
    } else if (x === 4) {
        y = true;
    } else if (x === 5) {
        y = false;
    }
    return y;
}
console.log(myFunc(3))

// The function above basically is saying even numbers = true, odd numbers = false
// same as:
let myFuncs = x => y = true ? x % 2 === 0 : false;
console.log(myFuncs(70))



// Phone number function:
createPhoneNumber = nums => {
    numbers = nums.join(''); // join all the numbers together first.
    return '(' + numbers.substring(0, 3) + ')' + ' ' + numbers.substring(3, 6) + '-' + numbers.substring(6)
    // ^ use .substring(starting index, ending count)
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([9, 1, 9, 4, 1, 4, 6, 4, 0, 7]));


// function for greeting
let greets = () => 'Hello World!'
console.log(greets());



// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const litres = hrs => Math.floor(hrs * 0.5) // Math.floor() rounds down to nearest integer (whole numbers).

console.log(litres(3));
console.log(litres(6.7));
console.log(litres(11.8));


// Using Math.random() to show a random fraction
const randomFraction = () => Math.random();

console.log(randomFraction());



// Generate random whole numbersternar



// Generate whole numbers within a range
const randomRange = (myMin, myMax) => Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

console.log(randomRange(3, 10));



// Using the parseInt() to turn a string into a number
const convertToInteger = str => parseInt(str);

console.log(convertToInteger("56"));
console.log(convertToInteger("00009384758"));



/* Question of the Day:
What is scope, i.e. global, local, block?

In general terms, the scope will let us know at a given part of code, what are the variables and functions that we can or cannot access.
There are three types of scopes in JS:
Global Scope
Local or Function Scope
Block Scope
Global Scope
Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code
*/
// var globalVariable = "Hello world";
// function sendMessage(){
//  return globalVariable; // can access globalVariable since it's written in global space
// }
// function sendMessage2(){
//  return sendMessage(); // Can access sendMessage function since it's written in global space
// }
// sendMessage2(); // Returns “Hello world”
// //Function Scope
// //Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function, can be accessed from within the function and not outside of it.
// function awesomeFunction(){
//  var a = 2;
//  var multiplyBy2 = function(){
//   console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
//  }
// }
// console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
// multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope
// //Block Scope
// //Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope.
// //Block scope tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.
// {
//  let x = 45;
// }
// console.log(x); // Gives reference error since x cannot be accessed outside of the block
// for(let i=0; i<2; i++){
//  // do something
// }
// console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block


// Vowel Count
function getVowelCount(str) {
    let vowelsCount = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for(let i =0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            vowelsCount ++
        }
    }
    return vowelsCount;
}
console.log(getVowelCount("bear"))

// OR same as...
function getVowelCounts(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    const arr = str.split('')

    return arr.filter((letter) => {
        return vowels.includes(letter)
    }).length
}
console.log(getVowelCounts('hello'))

// OR same as...
function getVowelsCount(str) {
    let vowelsCount = 0;
    let arr = str.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    
    for (let i of arr) {
    if (vowels.includes(i)) {
    vowelsCount++;
        }
    }
    
    return vowelsCount;
} 
console.log(getVowelsCount("heeeellllooo"));

// or this........

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let array = str.split('')
    array.forEach(letter => {
        if (vowels.includes(letter)) {
            vowelsCount ++;
        }
    });
    return vowelsCount;
}
console.log(getCount('squeeze me'));




// Return century for the year
let century = year => Math.floor((year - 1)/100) + 1 + "th";

console.log(century(1998));
console.log(century(1698));
console.log(century(1501));
console.log(century(2022));

// OR same as ...
let centuries = year => Math.ceil(year/100) + "th";

console.log(centuries(1698));
console.log(centuries(1501));
console.log(centuries(2022));
console.log(centuries(1998));

// Math.ciel() = rounds up (to the ceiling!) 
// Math.floor() = rounds down (to the floor!)



// Turn any string into a whole integer (number):
let stringToNumber = str => parseInt(str);

console.log(stringToNumber('4734'))



/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

*/

const basicOp = (operation, value1, value2) => {
    let sum = 0;
    if (operation === '+') {
        sum = value1 + value2
    } else if (operation === '-') {
        sum = value1 - value2
    } else if (operation === '*') {
        sum = value1 * value2
    } else if (operation === '/') {
        sum = value1 / value2
    }
    return sum
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));

// or this ...

const basicOps = (operation, value1, value2) => {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

console.log(basicOps('+', 4, 7));
console.log(basicOps('-', 15, 18));
console.log(basicOps('*', 5, 5));
console.log(basicOps('/', 49, 7));

// or this ...
const basicsOp = (o, a, b) => {
    return eval(a+o+b); // using the eval method
}

console.log(basicsOp('+', 4, 7));
console.log(basicsOp('-', 15, 18));
console.log(basicsOp('*', 5, 5));
console.log(basicsOp('/', 49, 7));


/* Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.
*/

const squareOrSquareRoot = (array) => {
    let newArray = array.map(number => {
        if (Math.sqrt(number) % 1) {
            return number * number
        } else {
            return Math.sqrt(number)
        }
    });
    return newArray;    
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// or this ...
const squareOrSquareRoots = array => array.map(number => {
    return Math.sqrt(number) % 1 ? number * number  : Math.sqrt(number)
});

// ^ ternary: return (if this happends) ? return this : return that

// Math.sqrt() takes the square root of any number passed in.

console.log(squareOrSquareRoots([4, 3, 9, 7, 2, 1]));


/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

const sameCase = (a, b) => {
   return /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1
}

console.log(sameCase('a', 'g'));
console.log(sameCase('A', 'C'));
console.log(sameCase('b', 'G'));
console.log(sameCase('B', 'g'));
console.log(sameCase('0', '?'));


/* linux ---> 
    sudo apt update (must be entered first!)
    sudo apt upgrade (these two commands update the packages and respositories associated to linux)
    sudo apt full-upgrade (same as above but also removes packages already installed as to not just install ontop of it)
    sudo apt install "program name" (installs a program)

    sudo apt search "program name" (searches for programs)

    sudo apt remove "program name" (uninstall program)
    sudo apt purge

    sudo apt autoremove (cleans up unnecessary packages, *use once a week to have plenty of free space)

    apt show "package name" (shows all details)

    use && symbol to do two commands at once

    install multiple packages by just spacing them out after sudo apt install --

    apt list (shows list of packages ready to be upgraded)

*/


// Given a varying number of integer arguments, return the digits that are not present in any of them.

const unusedDigits = (...array) => { // spread operator to spread out the numbers individually
    let digits = array.join(); // join them again as a string
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(number => !digits.includes(number)).join('') // return numbers not included in return array.
}    
        
console.log(unusedDigits([12, 34, 56, 78]));
console.log(unusedDigits([2015, 8, 26]));


// square every digit
const squareDigits = (num) => {
    return Number(num.toString().split('').map(number => number * number).join(''));
}
console.log(squareDigits(9119));

// or refactor to this...
const squareDigit = num => Number(num.toString().split('').map(number => number * number).join(''));

console.log(squareDigit(9119));





