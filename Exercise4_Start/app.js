/*
// Working with Conditionals Part 1 - If Else Statements

var userName;
userName = 'Dan';

if (userName === undefined) {
  console.log('User is not defined');
} else {
  console.log('Username: ' + userName )
}

var num = 5;
var mod = num % 2;

if(mod === 0 ) {
  console.log(num + ' is an even number.');
} else {
  console.log(num + ' in is an odd number. ');
}

// Working with Conditionals Part 2 - Using Comparison Operators

var age = 18,
    canVote;

if (age >= 18) {
  console.log("You are old enough to vote!");
  canVote = true;
} else {
  console.log("You are not old enough to vote.")
  canVote = false;
}

var age = 18;
var canVote = false;

if (age >= 18) {
  canVote = true
}

if (canVote) {
  console.log("You can vote.");
} else {
  console.log("You can't vote.");
}


// && Comparison Operator
var userName;
// userName = 'Dan';

if (userName !== undefined && userName !== null) {
  console.log('Username: ' + userName )
} else {
  console.log('User is not defined.');
}

// OR - || Comparison Operator
var userName;
userName = 'Dan';

if (userName === undefined || userName === null) {
  console.log('User is not defined.');
} else {
  console.log('Username: ' + userName )
}

var age = 18;
var canVote = false;

if (age >= 18) {
  canVote = true
}

if (!canVote) {
  console.log("You are not old enough to vote!");
}

// 32 - Truthy and Falsey

var userName;
userName = 'Dan';

if (userName) {
  console.log('Username: ' + userName )
} else {
  console.log('User is not defined.');
}

// Falsey Values - false, 0, -0, empty string "" or '', null, undefiend



// 33 - String Conditionals

// accessing a method is through the dot (.) notation 
// .toLowerCase() converts the value to lowerCase
// .trim() - removes all white spaces before and after
var answer = ' blue ';

if (answer.toUpperCase().trim() === 'BLUE') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

// indexOf - find in the strings/values the occurrence of the string we define in our indexOf()  
var answer = 'The sky is blue';

if (answer.toUpperCase().indexOf('BLUE') > -1) {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

console.log(answer.toUpperCase().indexOf('BLUE'));

// This will result to -1 because ot can't find red's index in the answer string values.
console.log(answer.toUpperCase().indexOf('RED'));

// extracting some values from a string using slice()
var str = 'abcdefghijk';

console.log(str.slice(0,4));


// substr() - will give you the length of the string base on starting and ending values we set inside the substr()
var answer = 'The sky is blue';
var str = 'abcdefghijk';

console.log(str.substr(4,4));

var pos = answer.toUpperCase().indexOf('BLUE');

console.log(answer.slice(pos, (pos + 4)));
console.log(answer.substr(pos, (pos, 4)));

// review of Methods of the String Object Wrapper
// toLowerCase()
// toUpperCase()
// trim()
// indexOf(str)
// lastIndexOf(str)
// slice(start, [end])
// substr(start, [length])
// substring(from, [to])

// else if Statements
// Use the date object and print out the day of the week

var date = new Date(),
    day = date.getDay();

if (day === 0) {
  console.log("Today is Sunday.");
} else if(day === 1) {
  console.log('Today is Monday.');
} else if(day === 2) {
  console.log('Today is Tuesday.');
} else if(day === 3) {
  console.log('Today is Wednesday.');
} else if(day === 4) {
  console.log('Today is Thursday.');
} else if(day === 5) {
  console.log('Today is Friday.');
} else if(day === 6) {
  console.log('Today is Saturday.');
} 

// 35 - Using Switch Statement

// Switch Conditional
var date = new Date(),
    day = date.getDay();

switch (day) {
  case 0: 
    console.log('Today is Sunday.');
    break;
  case 1: 
    console.log('Today is Monday.');
    break;
  case 2: 
    console.log('Today is Tuesday.');
    break;
  case 3: 
    console.log('Today is Wednesday.');
    break;
  case 4: 
    console.log('Today is Thursday.');
    break;
  case 5: 
    console.log('Today is Friday.');
    break;
  case 6: 
    console.log('Today is Saturday.');
    break;
  }

// Conditional Shorthand: The Ternary Operator
//Conditional Ternary Operator

// condition ? expression1 : expression2;
var age = 18;

var message = (age >= 18) ? 'You are able to vote' : 'You are not able to vote.';

console.log(message);
*/

//Write conditionals to sort three numbers 6, -5, 2. largest to smallest. Output the results to the console.

let num1 = 6;
    num2 = 5;
    num3 = 2;

    
    if(num1 > num2 && num1 > num3) {
      if (num2 > num3) {
        console.log(num1 + ' ' + num2 + ' ' + num3);
      } else {
        console.log(num1, num3, num2);
      } 
    } else if (num2 > num1 && num2 > num3) {
      if (num1 > num3) {
        console.log(num2 + ' ' + num1 + ' ' + num3);
      } else {
        console.log(num2, num3, num1);
      } 
    } else if (num3 > num1 && num3 > num2) {
      if (num2 > num1) {
        console.log(num3 + ' ' + num2 + ' ' + num1);
      } else {
        console.log(num3, num1, num2);
      } 
    }

let sortNum = [num1, num2, num3];

let hiToLowest = sortNum.sort((a, b) => b - a); 
console.log(hiToLowest);
let lowToHi = sortNum.sort((a, b) => a - b); 
console.log(lowToHi);