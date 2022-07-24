// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

// loop through digits store first index as currentSum, then add to next index in list. Once loop is at end of digits list return currentSum

const getSum = (digits) => {
  let isNegative = false;
  if (digits < 0) {
    digits = Math.abs(digits);
    isNegative = true;
  }
  let sum = 0;
  let numbers = digits.toString();
  let firstDigit = Number(numbers[0]);
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  if (isNegative) {
    sum = sum - 2 * firstDigit;
    return sum;
  } else {
    return total;
  }
};
console.log(getSum(-316));
