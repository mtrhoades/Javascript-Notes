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

const containerDiv = document.querySelector('#container'); // Use # for grabbing class names. Use . for grabbing id names.

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

