/*
var name = 'Dan',
    greeting = 'Hello there ',
    punctuation = '!';

var faveGame = 'basketball',
    faveFood = 'grilled chicken',
    faveDrink = 'hot cool-aide';


test();
console.log(greeting + name + punctuation);

function test() {
  console.log(greeting + name + punctuation);
}
best();
function best() {
  console.log(greeting + 'my name is ' + name + ' and I am a fan of ' + faveGame + ' and I love ' + faveFood + ' with a ' + faveDrink +  punctuation);
}

Math Object Methods
Math.random();
Math.round();
Math.floor();
Math.ceil();
Math.min();
Math.max();

var num = 5.632, num1 = 15, num2 = -10;
//Math.random();
Math.round(num);
Math.ceil(num);
Math.floor(num);
Math.min(num, num1, num2);
Math.max(num, num1, num2);
Math.max(num, num1, num2, 23);

// Working with Dates
var date = new Date();
//date;
// result: Date Fri Dec 11 2020 10:39:10 GMT+0800 (Singapore Standard Time)

date.getMonth();
// result: 11

date.getDay();
// result: 5

date.getTime();
// result: 1607654751600

//get the time between to date objects
var date2 = new Date();
date2.getTime() - date.getTime();
// result: 109553
(date2.getTime() - date.getTime()) / 1000 / 60;


//Template String Literals (ES6)
var name = "Dan";
var greeting = 'Hello ' + name + '!';
console.log(greeting);

var name = "Dan";
var greeting = `Hello ${name}!`;
console.log(greeting);

//PRE EXERCISE FILES

var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(); 
// print date in format day/month/year
month++;

console.log(day + '/' + month + '/' + year + ' // print date in format day/month/year' );
console.log(`${month}/${day}/${year} // print date in format month/day/year`);

// Exercise 2
//Print a random number from 1 - 10 to the console.
// My Solution:
// Math.round(Math.random() *10)

// Video Solution
var num = Math.random(),
    finalNum = num * 10;

console.log(Math.round(finalNum));


// Exercise 3
// Find out how many hours have passed since 1/1/2000.

// var dadDOB = new Date(48, 3, 23),
//     currentDate = new Date(),
//     milliseconds, seconds, minutes, hours;

var myDOB = new Date(75, 5, 27),
    currentDate = new Date(),
    milliseconds, seconds, minutes, hours, days, months, year;

// milliseconds = currentDate.getTime() - dadDOB.getTime();
milliseconds = currentDate.getTime() - myDOB.getTime();
seconds = milliseconds / 1000;
minutes = seconds / 60;
hours = minutes / 60;

days = hours / 24;
months = days / 31;
year = months / 12;

// Print it to the console. Don't display any past decimal point
// Dad's Time Existence 
// console.log(`My dad is ${Math.round(hours)} hours old`);
// console.log(`My dad is ${Math.round(days)} days old`);
// console.log(`My dad is ${Math.round(months)} months old`);
// console.log(`My dad is ${Math.round(year)} years old`);

// Dad's Age when I was Born
// var dadsAgeWhenIWasBorn = myDOB.getYear() - dadDOB.getYear();
// console.log(`My dad was ${dadsAgeWhenIWasBorn} years old when I was born`);

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

// My Age Now
console.log(`I am ${thousands_separators(Math.round(hours))} hours old`);
console.log(`I am ${thousands_separators(Math.round(days))} days old`);
console.log(`I am ${Math.round(months)} months old`);
console.log(`I am ${Math.round(year)} years old`);
*/
