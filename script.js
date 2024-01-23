"use strict";

let hasDriversLiscence = false;
const passTest = true;

if (passTest) hasDriversLiscence = true;
if (hasDriversLiscence) console.log("I can drive: D");

//functions

function Sania() {
  console.log("You Are Mine");
}
// calling/ running/ invoking function
Sania();
Sania();
Sania();

function fruitProcessor(apples, bananas) {
  console.log(apples, bananas);
  const juice = `juice with ${apples} apples and ${bananas} bananas.`;
  return juice;
}

const juice = fruitProcessor(2, 5);
console.log(juice);

// function declaration

function calcAge1(birthyear) {
  const age = 2025 - birthyear;
  return age;
}
const age1 = calcAge1(1991);
console.log(age1);

// function expression , anonyms function
const calcAge2 = function (birthyear) {
  return 2025 - birthyear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

// arrow function =>

const calcAge3 = (birthyear) => 2025 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yUntilRetirement = (birthyear, firstName) => {
  const age = 2025 - birthyear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yUntilRetirement(1991, "jonas"));
console.log(yUntilRetirement(1998, "Bob"));

// function calling other function

function cutFruitPieces(fruits) {
  return fruits * 4;
}
function fruitProcessor(apples, bananas) {
  const applePieces = cutFruitPieces(apples);
  const bananasPieces = cutFruitPieces(bananas);

  const juice = `juice with ${applePieces} piece Of Apples and ${bananasPieces} piece of bananas.`;
  return juice;
}

console.log(fruitProcessor(2, 5));

//   Arrays

const friend1 = "Micheal";
const friend2 = "Steward";
const friend3 = "Henry";
const friend4 = "Peter";

const friends = ["Micheal", "Steward", "Henry", "Peter"];
console.log(friends);

// another method

const y = new Array(1993, 1997, 2003, 2010, 2015, 1019);
console.log(y);

// arrays are zero based means the 1st element will be the 0 element and so on.

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

// actual number of elements that is in the array// length is not zero based

console.log(friends.length);
console.log(friends[friends.length - 1]);
// we can also replace the element in array

friends[3] = "Jonas";
console.log(friends);

// an array can hold different values at the same time

const firstName = "maryam";
const maryam = [firstName, "noman", 2023 - 1996, "webDeveloper", friends];
console.log(maryam);
console.log(maryam.length);

// exercise
const calcage = function (birthyear) {
  return 2037 - birthyear;
};

const years = [1990, 1999, 1980, 2000, 2001, 2012];
const ageA = calcage(years[0]);
const ageB = calcage(years[1]);
const ageC = calcage(years[3]);
const ageD = calcage(years[years.length - 1]);

console.log(ageA, ageB, ageC, ageD);

// array methods (operations)

// push method (add an element at the end of array)

const friends = ["Micheal", "Steward", "Henry", "Peter"];
friends.push("jay");
console.log(friends);

// unshift method(add an element at the start of an array)

friends.unshift("john");
console.log(friends);

// pop method(remove last element at the end of array)

friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

// shift method(remove first element from an array)

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steward"));

// includes method(conditional method give true or false result follow a strict equality)

friends.includes("steward");
friends.includes("bob");
console.log(friends.includes("Steward"));
console.log(friends.includes("bob"));
friends.push(23);
console.log(friends.includes(23));
console.log(friends.includes("23"));
// if statment

if (friends.includes("Steward")) {
  console.log("you have a friend called Steward");
}

// objects(one of the most commonly used data structure allow us to store the key value pairs.
//it is a collection of named values.)

// for arrays

const maryamArray = [
  "Maryam",
  "Arshad",
  2024 - 1996,
  "webdeveloper",
  ["Aiza", "Faiza", "Abiha"],
];

// for objects

const maryamNew = {
  firstName: "Maryam",
  lastName: "Arshad",
  age: 2024 - 1996,
  Job: "webDeveloper",
  friends: ["Aiza", "Faiza", "Abiha"],
};
// Dot(.) Vs Bracket notation

console.log(maryamNew);
console.log(maryamNew.lastName);
console.log(maryamNew["lastName"]);

// storing the repeating part

const nameKey = "Name";
console.log(maryam["first" + nameKey]);
console.log(maryam["last" + nameKey]);

//console.log(maryam.'first' + nameKey);

const interestedIn = prompt(
  "what do you want to know about maryam? Choose between firstName , lastName , age , job, and friends"
);

console.log(interestedIn);
console.log(maryam[interestedIn]);

if (maryam[interestedIn]) {
  console.log(maryam[interestedIn]);
} else {
  console.log(
    "wrong request! choose between firstName , lastName, age, job, and friends"
  );
}

// how to use both notations to add new property to an object

maryam.location = "lahore";
maryam["googleAccount"] = "maryamarshad248@gmail.com";
console.log(maryam);

// challange
// maryam has 3 friends and his best friend is called Aiza.

console.log(`${maryam.firstName} has ${maryam.friends.length}friends, and his 
best friend is called ${maryam.friends[0]}`);

// object methods.

const maryam = {
  firstName: "Maryam",
  lastName: "Arshad",
  birthyear: 1996,
  Job: "webDeveloper",
  friends: ["Aiza", "Faiza", "Abiha"],
  hasDriversLiscence: true,

  //calcage: function(birthyear) {
  // return 2024-birthyear;
  //}
  calcAge: function () {
    console.log(this);
    return 2024 - this.birthyear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}- years old ${this.Job}, 
  and she has ${this.hasDriversLiscence ? "a" : "no"} driver's liscence.`;
  },
};
// log into the console using both bracket and dot notation

console.log(maryam.calcAge());
//console.log(maryam['calcage'](1996));

// "maryam is a 27 years old web developer, and she has a driver's liscence"

console.log(maryam.getSummary());

// Iteration the For loop
// the most fundamental part of javascript programming is loop . one of the control structure is For loop.

//console.log('Lifting weights repitition 1');
//console.log('Lifting weights repitition 2');
//console.log('Lifting weights repitition 3');
//console.log('Lifting weights repitition 4');
//console.log('Lifting weights repitition 5');
//console.log('Lifting weights repitition 6');
//console.log('Lifting weights repitition 7');
//console.log('Lifting weights repitition 8');
//console.log('Lifting weights repitition 9');
//console.log('Lifting weights repitition 10');

// loop ststement has three parts: initial value of the counter , logical condition , increase the counter by 1
// for loop keep running until the condition is true.

for (let rep = 1; rep <= 10; rep++) {
  // console.log('Lifting weights repitition 1');
  console.log(`Lifting weight repitition ${rep}`);
}

//looping arrays , breaking and continuing
// looping arrays
const maryam = [
  "Maryam",
  "Arshad",
  2024 - 1996,
  "webdeveloper",
  ["Noman", "Faiza", "Abiha"],
  "true",
];

const types = [];
//console.log(maryam[0]);
//console.log(maryam[1]);
//console.log(maryam[2]);
//console.log(maryam[3]);
//console.log(maryam[4]);

//for(let i = 0; i<5; i++ ) {
//console.log(maryam[i]);
//}

for (let i = 0; i < maryam.length; i++) {
  // reading from maryam array
  console.log(maryam[i], typeof maryam[i]);
  // filling types array
  // types[i] = typeof maryam[i];
  types.push(typeof maryam[i]);
}

console.log(types);

// example
const yearsNew = [1996, 1992, 2005, 2012, 2019, 2020];
const ages = [];

for (let i = 0; i < yearsNew.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);
// continue and break statement
// continue exit the current itertion of the loop and continue the next one

console.log("--only string--");
for (let i = 0; i < maryam.length; i++) {
  if (typeof maryam[i] !== "string") continue;
  console.log(maryam[i], typeof maryam[i]);
}

// break completely terminate the whole loop

console.log("--break with number--");
for (let i = 0; i < maryam.length; i++) {
  if (typeof maryam[i] === "number") break;
  console.log(maryam[i], typeof maryam[i]);
}

// looping backward

const maryam = [
  "Maryam",
  "Arshad",
  2024 - 1996,
  "webdeveloper",
  ["Aiza", "Faiza", "Abiha"],
  "true",
];

for (let i = maryam.length - 1; i >= 0; i--) {
  console.log(i, maryam[i]);
}

//loop in loop

for (let exercise = 1; exercise < 6; exercise++) {
  console.log(`____ starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise ${exercise}:Lifting weight repitition ${rep}`);
  }
}

// while loop

let rep = 1;
while (rep <= 10) {
  // console.log(`while: Lifting weight repitition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}
