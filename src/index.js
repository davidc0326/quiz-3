// Question 1: Loop through the array and print the names of the Apostles
const apostles = ["Peter", "James", "John", "Andrew", "Philip"];
for (const apostle of apostles) {
  console.log("[Question #1]:", apostle);
}

// Question 2: Calculate the sum of the ages of the Patriarchs
const patriarchAges = [930, 912, 905, 895];
let sumOfAges = 0;
for (const age of patriarchAges) {
  sumOfAges += age;
}
console.log("[Question #2]:", sumOfAges);

// Question 3: Print the plagues of Egypt
const plagues = ["Frogs", "Locusts", "Hail"];
for (const plague of plagues) {
  console.log("[Question #3:]", plague);
}

// Question 4: Convert Bible books to uppercase
const books = ["Genesis", "Exodus", "Leviticus"];
for (const book of books) {
  console.log("[Question #4]:", book.toUpperCase());
}

// Question 5: Count the number of times 'apple' appears in the array
const fruitsInEden = ["apple", "pear", "apple", "grape"];
let appleCount = 0;
for (const fruit of fruitsInEden) {
  if (fruit === "apple") {
    appleCount++;
  }
}
console.log("[Question #5]:", appleCount);

// Question 6: Multiply all elements in the array by 2
const davidStones = [1, 2, 3];
const multipliedStones = [];
for (const stone of davidStones) {
  multipliedStones.push(stone * 2);
}
console.log("[Question #6]:", multipliedStones);

// Question 7: Reverse the string
const nameOfGod = "Yahweh";
let reversedName = "";
for (const letter of nameOfGod) {
  reversedName = letter + reversedName;
}
console.log("[Question #7]:", reversedName);

// Question 8: Create a sentence by adding spaces to words
const peaceBeUponYou = ["Peace", "be", "upon", "you"];
let sentence = "";

for (const word of peaceBeUponYou) {
  sentence += word + " ";
}

console.log("[Question #8]:", sentence.trim());

// Question 9: Print out every other element from the array
const daysOfCreation = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6"];
let isFirst = true;

for (const day of daysOfCreation) {
  if (!isFirst) {
    console.log("[Question #9]:", day);
  }
  isFirst = !isFirst;
}

// Question 10: Concatenate all the strings in the array
const attributesOfGod = ["Omnipotent", "Omnipresent", "Omniscient"];
let concatenatedAttributes = "";

for (const attribute of attributesOfGod) {
  concatenatedAttributes += attribute;
}

console.log("[Question #10]:", concatenatedAttributes);

// Question 11: Create a new array with only the numbers greater than 3
const biblicalNumbers = [1, 3, 7, 12];
const greaterThan3 = [];
for (const number of biblicalNumbers) {
  if (number > 3) {
    greaterThan3.push(number);
  }
}
console.log("[Question #11]:", greaterThan3);

// Question 12: Calculate the product of all the elements in the array
const disciplesAges = [30, 25, 40, 50];
let productOfAges = 1;
for (const age of disciplesAges) {
  productOfAges *= age;
}
console.log("[Question #12]:", productOfAges);

// Question 13: Replace 'Goliath' with 'David' in the array
const combatants = ["Goliath", "Soldier1", "Soldier2"];

for (let combatant of combatants) {
  if (combatant === "Goliath") {
    combatant = "David";
  }
  console.log("[Question #13]:", combatant);
}

// Question 14: Print the square of each element in the array
const squaresOfNumbers = [1, 2, 3, 4];
for (const number of squaresOfNumbers) {
  console.log("[Question #14:]", number * number);
}

// Question 15: Count the number of vowels in the string
const theWord = "Bible";
let vowelCount = 0;

for (const letter of theWord) {
  if ("aeiou".includes(letter.toLowerCase())) {
    vowelCount++;
  }
}

console.log("[Question #15]:", vowelCount);

// Question 16: Print the elements that are divisible by 5

const numbersFromBible = [5, 10, 15, 20, 25];

for (const number of numbersFromBible) {
  if (number % 5 === 0) {
    console.log("[Question #16]:", number);
  }
}
// Question 17: Create a new string where the first letter of each word is capitalized
const phrase = "in the beginning";
const words = phrase.split(" ");
let capitalizedPhrase = "";
for (const word of words) {
  capitalizedPhrase += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
capitalizedPhrase = capitalizedPhrase.trim();
console.log("[Question #17:]", capitalizedPhrase);

// Question 18: Create a new array where each element is double the original
const loavesAndFishes = [2, 5];
const doubledElements = [];
for (const element of loavesAndFishes) {
  doubledElements.push(element * 2);
}
console.log("[Question #18]:", doubledElements);

// Question 19: Count the number of elements that are equal to 'manna'
const foodInDesert = ["manna", "quail", "manna", "manna"];
let mannaCount = 0;
for (const food of foodInDesert) {
  if (food === "manna") {
    mannaCount++;
  }
}
console.log("[Question #19]:", mannaCount);

// Question 20: Create a new array by picking every 3rd element from the original array
const theCommandments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const everyThirdElement = [];

let count = 0;

for (const commandment of theCommandments) {
  count++;
  if (count % 3 === 0) {
    everyThirdElement.push(commandment);
  }
}

console.log("[Question #20]:", everyThirdElement);
