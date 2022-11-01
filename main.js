console.log('Hello World from the main.js file.');

// Basics of JavaScript
/* 
    Multiline Comments in JS

    -- Variable Declaration in JS --
    Primitive Data Types: String, Number, Boolean, Undefined, Null
    Objects: Object, Array, Function

*/

// Variable Declaration
// var myName;
// console.log(myName);
// console.log() is equivalent to python's print() function

// String Declaration
var myName = 'Eunice';

console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``, the tick marks (``) have a special behavior to change the string
// Tick marks + ${varName} is equi to f"{}" in python
console.log("My name is ${myName}");
console.log('My name is ${myName');
console.log(`My name is ${myName}`);

// if making new line, don't need semi colon but good practice to do so. camelCase is standard

// Integer
var myAge = 100;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;

console.log(pi);
console.log(typeof pi);

// Boolean. lowercase for true and false
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

// Undefined
var something;
console.log(something);
console.log(typeof something);

// Null
var someNull = null;
console.log(someNull);
console.log(typeof someNull);
// returns object. bug in the code. null is not an object, absence of value. but it is defined and must be assigned.
// objects are the only mutable values

// Object
var myObject = {
    a: 123,
    test: 'Hello World'
}
console.log(myObject);
console.log(typeof myObject);

// Array - special type of object
var myArr = ['Eunice', 'Chicago', 'Coding Temple', 10];
console.log(myArr);
console.log(typeof myArr);

// Function
function abc(){};
console.log(abc);
console.log(typeof abc);

// Accessing Properties from an Object
var person = {
    first: 'Eunice',
    last: 'Kim',
    languages: ['Python', 'JavaScript']
};

console.log(person);

// Bracket Notation
console.log(`My first name is ${person['first']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);
console.log(person.languages);
// When accessing properties in an array (aka the index), use bracket notation
console.log(`My favorite language is ${person.languages[0]}`)

// Arrays have a 'length' property
var myNewArr = ['abc', '123', 'hello world'];
console.log(myNewArr, myNewArr.length);

// console.clear()

// var vs let vs const
// let - allows us to declare a variable similar as var *let is block-scoped, var is global-scoped*
let myCity = 'Chicago';
let test;
console.log(myCity);

// majority of time probably using 'let'

// {} shows block of code. this is all defined within
if (true) {
    var myState = 'Illinois';
    let myCity = 'Champaign';
    let color = 'Blue';
    console.log(myCity, myState, color);
}

console.log(myCity, myState);
// this returns undefined bc it was defined in the block 

// const - similar to let (block-scoped) - 2 differences: 1. Needs a value when declared. 2. Cannot be reassigned
const newVariable = 'something';
console.log(newVariable)

// newVariable = 'something else'; //Uncaught TypeERror: assignment to constant variable

const myBirthday = true;
let ageOfPerson = 30;

if (myBirthday){
    const myFavColor = 'Orange';
    ageOfPerson = ageOfPerson + 1; // OK bc ageOfPerson declared with let
    console.log(ageOfPerson);
    // myBirthday = false // Error bc myBirthday declared with const. can't be reassigned.
    console.log(myFavColor);
}

// console.log(myFavColor) --> error, myfavcolor not defined

const cities = ['Chicago', 'New York', 'Boston', 'Los Angeles']
console.log(cities);
cities[1] = 'San Fancisco';
console.log(cities);
// cities = ['Austin', 'Portland'];
// console.log(cities);

const newPerson = {
    first: 'Abe',
    last: 'Lincoln'
}
console.log(newPerson);

newPerson.first = 'Abraham'
console.log(newPerson)

//It's easy to get confused what pairs of { .. } mean, since JS overloads the curly brackets to mean any of the following, depending on the context used:
/*
delimit values, like object literals
define object destructuring patterns (more on this later)
delimit interpolated string expressions, like `some ${ getNumber() } thing`
define blocks, like on if and for loops
define function bodies
Though it can sometimes be challenging as you read code, look for whether a { .. } curly brace pair is used in the program where a value/expression is valid to appear; if so, it's an object literal, otherwise it's one of the other overloaded uses. */

console.clear()

// basic math operations
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum += 1 or sum = sum + 1
console.log(sum);
// subtraction
let diff = 10 - 5;
console.log(diff);
diff -= 3; // diff = diff - 3
console.log(diff);
diff--; // diff -= 1 or diff = diff - 1
console.log(diff);
// mult
let prod = 4*5;
prod *= 5;
// division
let quotient = 40/5;
quotient /= 2; 
// floor division
let floor = Math.floor(10/3);
console.log(floor)
// exponents
let square = 5 ** 2;
console.log(square);
square **= 2; // square = square ** 2;
console.log(square);
// modulo
let remainder = 19 % 4;
console.log(remainder)
remainder %= 2; // remainder = remainder % 2;
console.log(remainder)

/////

let myString = 'My age is ';
let myCoolAge = 45;

let addedString = myString + myCoolAge;
console.log(addedString);
console.log(typeof addedString);

let quizOne = square + '4';
// undefined, 629, 6254, 625+4
console.log(quizOne);

let abcd = square + Number('4');
console.log(abcd)

let quizTwo = square - '4';
// undefined, 621, 6254, 625-4
console.log(quizTwo);
console.log(typeof quizTwo)
// 621?? wtffffff type number???
// if you try and subtract two strings, it will return NaN (not a number)

// JavaScript comparisons
console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
// returns all true lmao. == will check for equality while allowing for type conversion
console.log(5 === '5');
// returns false. checks for equality but doesn't allow type conversion
console.log(1 == true); // true
console.log('10' < 5); // false
console.log('100' > '9'); // false. both values are already strings, no conversion needed, compares alphabetically

// when JS compares objects, it looks for REFERENCE only!!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
console.log(arr1 == arr2);
console.log(arr1 === arr2);
// both false

let animals = ['cat', 'dog', 'pig'];
let newAnimals = animals;

console.log(animals === newAnimals); // true
console.log("===")
console.log(animals === ['cat', 'dog', 'pig']); // false
console.log(newAnimals === ['cat', 'dog', 'pig']); // false

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)
console.log("===")
console.log(5 != '5'); // false
console.log(5 !== '5'); // true


// Control Flow

// if (condition expression){code to execute if true};

let newNumber = 70;
console.log('Begin');

if (newNumber > 65){
    console.log('Senior');
} else if (newNumber > 25){
    console.log('Adult');
} else {
    console.log('Child');
}
console.log('End');

// ternary operator - (condition) ? value if true : value if false
// python - value = value_if_true if condition else value_if_false

let ageGroup = (newNumber > 18) ? 'Adult' : 'Child';
console.log(ageGroup);

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 25) ? 'Adult' : 'Child';
console.log(ageGroup2);

// && - and
// || - or
console.log("===")
newNumber = 17;
if (newNumber > 18 && newNumber < 40){
    console.log('Young Adult');
};

if (newNumber < 18 || newNumber > 65){
    console.log('You get a discount');
};

// JavaScript Loops
// for, for...in, for...of, while, do while

// Standard For Loop
// for (counter; expression/condition; incrementation/decrementation for counter){code to execute each loop}

console.log('Loop has started');
for(let i = 0; i <= 20; i++){
    console.log(i);
};
console.log('Loop has ended');

let colors = ['red', 'orange', 'yellow', 'green']
for (let i = 0; i < colors.length; i++){
    console.log(i, colors[i])
}

// for.. in -- used to loop over properties of an object
let teams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};
// for (let variable in obj) {code to execute for each property in object}
for (let t in teams) {
    console.log(t); // prints mlb, nba, nfl, nhl
    console.log(teams[t]); // prints the values
}

// for...of  -- used to loop over the elements in an Array
let planets = ['Mercury', 'Mars', 'Earth', 'Saturn', 'Uranus', 'Jupiter', 'Neptune', 'Venus'];
// for (let variable of array) {code to execute for each element in array}
for (let p of planets){
    console.log(p);
};

// while loop- loop while a condition is true
// while (condition){code to execute while condition is true}
let num1 = 10;
while(num1 < 100){
    console.log(num1)
    num1+=10
}

// do while loop = DO the first portion AT LEAST ONCE
// if the while condition is still true, continue to while loop
// do {code to execute} while (condition);

let x = 100;
console.log('Do While')
do {
    x *= 2;
    console.log(x)
} while (x < 10);

console.log('While')
while (x < 100){
    x *= 2
    console.log(x)
}

// do {
//     var firstName = prompt('What is your name?')
// } while (firstName !== 'Brian');

console.warn('Hello World')
console.error('Hello World')

