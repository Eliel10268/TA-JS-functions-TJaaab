// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// // - Write a Function Decleration
// function convertToString(n) {
//   return String(n);
// }

// // - Write a Function Expression
// let convertToString = function (n) {
//   return String(n);
// };

// // - Write an Arrow Function without curly brackets (if possible)
// let convertToString = (n) => String(n);

// // - Write an Arrow Function with curly brackets
// let convertToString = (n) => {
//   return String(n);
// };

// // - Execute the function
// convertToString(21);

// // - Execute the function and store the return value in a variable.
// let returnValue = convertToString(23);
// typeof returnValue;

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
let number;
function addOne(number) {
  return number + 1;
}

// - Write a Function Expression

addOne = function (number) {
  return number + 1;
};

// - Write an Arrow Function without curly brackets(if possible)

addOne = (number) => Int(number + 1);
// - Write an Arrow Function with curly brackets
addOne = (number) => {
  return number + 1;
};
// - Execute the function

addOne(number);
// - Execute the function and store the return value in a variable.

let returnValue = addOne(number);
// - What is the typeof returnValue
typeof returnValue; //undefined
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
let numbr;

function substractOne(numbr) {
  return numbr - 1;
}
// - Write a Function Expression

substractOne = function (numbr) {
  return numbr - 1;
};
// - Write an Arrow Function without curly brackets(if possible)
substractOne = (numbr) => Int(number - 1);
// - Write an Arrow Function with curly brackets
substractOne = (numbr) => {
  return numbr - 1;
};
// - Execute the function
substractOne(63);
// - Execute the function and store the return value in a variable.
let retrnValue = substractOne(numbr);
// - What is the typeof returnValue
typeof retrnValue; //undefined
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

let num1, num2, add;

function sum(num1, num2) {
  add = num1 + num2;
  return add;
}

// - Write a Function Expression

sum = function (num1, num2) {
  add = num1 + num2;
  return add;
};

// - Write an Arrow Function without curly brackets(if possible)
sum = (num1, num2) => num1 + num2;
// - Write an Arrow Function with curly brackets
sum = (num1, num2) => {
  add = num1 + num2;
  return add;
};
// - Execute the function
sum(num1, num2);
// - Execute the function and store the return value in a variable
let returnedValue = sum(num1, num2);
// - What is the typeof returnValue
typeof returnedValue; //undefined
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
let squared, numero;
function square(numero) {
  squared = numero * numero;
  return squared;
}
// - Write a Function Expression

square = function (numero) {
  squared = numero * numero;
  return squared;
};

// - Write an Arrow Function without curly brackets(if possible)

square = (numero) => numero * numero;

// - Write an Arrow Function with curly brackets
square = (numero) => {
  squared = numero * numero;
  return squared;
};
// - Execute the function

square(numero);
// - Execute the function and store the return value in a variable
rturnValue = square(numero);
// - What is the typeof returnValue
typeof rturnValue; //number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
let x, y;

function isGreater(x, y) {
  if (x > y) return true;

  return false;
}
// - Write a Function Expression
isGreater = function (x, y) {
  if (x > y) return true;

  return false;
};
// - Write an Arrow Function without curly brackets(if possible)
isGreater = (x, y) => {
  if (x > y) true;

  false;
};
// - Write an Arrow Function with curly brackets
isGreater = (x, y) => {
  if (x > y) return true;

  return false;
};
// - Execute the function
isGreater(x, y);
// - Execute the function and store the return value in a variable

let rtnedValue = isGreater(x, y);
// - What is the typeof returnValue
typeof rtnedValue; //undefined

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

let nomber;
function oddOrEven(nomber) {
  if (nomber % 2 === 0) {
    return "Number is even";
  }
  return "Number is odd";
}
// - Write a Function Declaration
oddOrEven = function (nomber) {
  if (nomber % 2 === 0) {
    return "Number is even";
  }
  return "Number is odd";
};

// - Write an anonymous Function Expression
oddOrEvenAnon = function (nomber) {
  if (nomber % 2 === 0) {
    return "Number is even";
  }
  return "Number is odd";
};

// - Write an named Function Expression
oddOrEvenNamed = function oddOrEven(nomber) {
  if (nomber % 2 === 0) {
    return "Number is even";
  }
  return "Number is odd";
};

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
oddOrEvenArrow1 = (nomber) =>
  nomber % 2 === 0 ? "Number is even" : "Number is odd";
// - Write an Arrow Function with curly brackets
const oddOrEvenArrow2 = (nomber) => {
  if (nomber % 2 === 0) {
    return "Number is even";
  }
  return "Number is odd";
};
// - Execute the function
oddOrEven(nomber);
// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
