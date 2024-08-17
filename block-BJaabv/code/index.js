// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppyAge, conversion = 7) {
  // Calculate dog age based on the conversion rate
  const dogAge = puppyAge * conversion;
  return dogAge;
}

// Example usage
const puppyAge = 3;
const calculatedDogYears = calculateDogAge(puppyAge);

console.log(`Your dog is ${calculatedDogYears} years old in dog years.`);

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, moviesPerWeek) {
  // Your code goes here
  const MAX_AGE = 100; //Defining maximum Age
  const WEEKS_PER_MONTH = 4; // suppose 4 weeks per month
  const MONTHS_PER_YEAR = 12; // number of months per year

  const yearsLeft = MAX_AGE - age; //number of years left to live

  const weeksLeft = yearsLeft * MONTHS_PER_YEAR * WEEKS_PER_MONTH;

  const totalMovies = weeksLeft * moviesPerWeek;

  return totalMovies;
}

const currentAge = 31;
const weeklyMovies = 2;

const moviesToWatch = calculateMoviesToWatch(currentAge, weeklyMovies);

console.log(
  `You will watch approximately ${moviesToWatch} movies for the rest of your life.`
);
/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;

  // Your code goes here
  return ` ${celsius} °C is ${fahrenheit.toFixed(1)} °F `;
}

console.log(celsiusToFahrenheit(25));

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit) {
  // Your code goes here

  let celsius = ((fahrenheit - 32) * 5) / 9;

  return `${fahrenheit.toFixed(1)}°F is ${celsius.toFixed(1)}°C`;
}
console.log(fahrenheitToCelsius(77));

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n, x) {
  // Your code goes here
  if (n < 0) return "The number below 1 is not allowed";
  let power = n ** x;
  return power;
}
console.log(pow(-31, 2));

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

let result;
function sumOrProductOfN(n, operation) {
  // Your code goes here
  if (operation === "sum") {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  } else if (operation === "product") {
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  } else {
    return "Not a valid Input";
  }
}

result = sumOrProductOfN(4, "sum"); // 10
result = sumOrProductOfN(4, "product"); // 24
result = sumOrProductOfN(4, "hello"); // alert "Not a valid Input"
console.log(result); // Output will be "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  // Your code goes here
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// Example Usage:
let n = 5;
let results = sumOfN(n);
console.log(results); // Output will be 15

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

Your code goes here
function sumOfMultiples(n) {
  let sum = 0; // Initialize sum to 0
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Example Usage:
let numa = 20; // Declare the variable to store the value of n
let result = sumOfMultiples(numa);
console.log(result); // Output will be 71 (5 + 7 + 10 + 14 + 15 + 20 = 71)

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a, b) {
  return a < b ? a : b;
}

// Example Usage:
let num1 = 0;
let num2 = -10;
let result = min(num1, num2);
console.log(result); // Output will be 10

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(value) {
  // Your code goes here
  return typeof value;
}

// Example Usage:
console.log(typeCheck(42)); // Output: "number"
console.log(typeCheck("Hello World")); // Output: "string"
console.log(typeCheck({})); // Output: "object"
console.log(typeCheck(true)); // Output: "boolean"
console.log(typeCheck(null)); // Output: "object"
console.log(typeCheck(undefined)); // Output: "undefined"
console.log(typeCheck(function () {})); // Output: "function"
