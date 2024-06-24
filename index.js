// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(a, b) {
  return a + b;
}

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(array) {
  if (array.length === 0) {
    return null;
  }
  let maxValue = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue;
}
// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(string) {
  let stringArray = string.split(""); // Convert to an array

  let reversedArray = stringArray.reverse(); // Array Reverse

  let reversedString = reversedArray.join(""); // Again Covert to a string

  return reversedString;
}

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(arrayOfNumbers) {
  let oddNumbers = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 !== 0) {
      oddNumbers.push(arrayOfNumbers[i]);
    }
  }

  return oddNumbers;
}

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(numbersArray) {
  let sum = 0;

  for (let n = 0; n < numbersArray.length; n++) {
    sum = sum + numbersArray[n];
  }
  return sum;
}

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(arrayOfN) {
  let sortedArray = arrayOfN.slice().sort((a, b) => a - b);
  return sortedArray;
}
let unsortedArray = [5, 2, 9, 1, 5, 6];
let sortedArray = sortArray(unsortedArray);
console.log(sortedArray);

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
