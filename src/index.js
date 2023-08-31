/**
 * This quiz is to test your knowledge of Teranary Operator.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Declare a variable isSunny with a value of true. Use a ternary operator to set a variable activity to "Go to the beach" if isSunny is true and "Stay indoors" otherwise.
 */
const isSunny = true;
let activity = isSunny ? "go to the beach" : "stay home";
console.log(activity);
/**
 * Question 2
 * Given a variable age = 20, use a ternary operator to determine if the age is greater than 18. If so, set a variable status to "Adult", otherwise set it to "Minor".
 */
let age = 20;
let status = age > 18 ? "Aduld" : "Minor";
console.log(status);
/**
 * Question 3
 * Using a ternary operator, check if the length of the array [1, 2, 3, 4] is even. If true, set a variable isEvenLength to true, otherwise set it to false.
 */
const arrayLength = [1, 2, 3, 4];
let isEvenLength = arrayLength % 2 === 3 ? true : false;
console.log(isEvenLength);
/**
 * Question 4
 * Given a variable score = 45, use a ternary operator to set a variable result to "Pass" if score is greater than or equal to 50 and "Fail" otherwise.
 */
let score = 45;
let result = score >= 50 ? "Pass" : "fail";
console.log(result);
/**
 * Question 5
 * Use a ternary operator to determine whether the number 15 is even or odd. Set a variable parity to the result.
 */
let number = 15;
let parity = number % 2 === 0 ? "even" : "Odd";
console.log(parity);
/**
 * Question 6
 * Given a variable temperature = 22, use a ternary operator to set a variable outfit to "Wear a jacket" if temperature is below 20 and "T-shirt is fine" otherwise.
 */
let temperature = 22;
let outfit = temperature < 20 ? "Wear a Jackect" : "T-shrit is fine";
console.log(outfit);
/**
 * Question 7
 * Using a ternary operator, determine if the first element of the array ["apple", "banana", "cherry"] is "apple". If true, set a variable isApple to true, otherwise set it to false.
 */
const fruits = ["apple", "banana", "cherry"];
let isApple = fruits[0] === "apple" ? true : false;
console.log(isApple);
/**
 * Question 8
 * Given a variable height = 180, use a ternary operator to set a variable basketball to "You're tall enough to play" if height is greater than 175 and "Might be a bit short" otherwise.
 */
let height = 180;
let basquetball =
  height > 175 ? "you are tall enought to play" : "may be a little bit short";
console.log(basquetball);
/**
 * Question 9
 * Given a variable day = "Sunday", use a ternary operator to set a variable workday to "Weekend" if day is either "Saturday" or "Sunday" and "Workday" otherwise.
 */
const day = "sunday";
let workday = day === "Saturday" || day === "sunday" ? "weekend" : "workday";
console.log(workday);
/**
 * Question 10
 * Use a ternary operator to determine if the string "hello" is of length 5. If true, set a variable isLengthFive to true, otherwise set it to false.
 */
let str = "hello";
let isLengthFive = str.length === 5 ? true : false;
console.log(isLengthFive);
