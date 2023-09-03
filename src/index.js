/**
 * Question 1
 * Given a variable color with a value "red", use a switch statement to set a variable feeling to "passionate" for "red", "calm" for "blue", and "neutral" for other colors.
 */
let color = "red";
let feeling;

switch (color) {
  case "red":
    feeling = "passionate";
    break;
  case "blue":
    feeling = "calm";
    break;
  default:
    feeling = "neutral";
}

console.log(feeling);

/**
 * Question 2
 * Using a switch statement, check the value of the variable day (e.g., "Monday"). Return "Working day" for weekdays and "Weekend" for Saturday and Sunday.
 */
let day = "Monday";
let dayType;

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    dayType = "Working day";
    break;
  case "Saturday":
  case "Sunday":
    dayType = "Weekend";
    break;
  default:
    dayType = "Invalid day";
}

console.log(dayType);

/**
 * Question 3
 * Given a variable score of 85, set a grade: "A" for 90 and above, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.
 */
let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(grade);

/**
 * Question 4
 * Use a switch statement to determine if the variable fruit is a "berry". Set "berry" for strawberries, blueberries, and raspberries. "Not a berry" for other fruits.
 */
let fruit = "strawberries";
let fruitType;

switch (fruit) {
  case "strawberries":
  case "blueberries":
  case "raspberries":
    fruitType = "berry";
    break;
  default:
    fruitType = "Not a berry";
}

console.log(fruitType);

/**
 * Question 5
 * Check the value of the variable month (e.g., "January") and return which quarter of the year it belongs to.
 */
let month = "January";
let quarter;

switch (month) {
  case "January":
  case "February":
  case "March":
    quarter = "Q1";
    break;
  case "April":
  case "May":
  case "June":
    quarter = "Q2";
    break;
  case "July":
  case "August":
  case "September":
    quarter = "Q3";
    break;
  case "October":
  case "November":
  case "December":
    quarter = "Q4";
    break;
  default:
    quarter = "Invalid month";
}

console.log(quarter);

/**
 * Question 6
 * Use a switch statement to determine if a number is "small", "medium", or "large". Consider numbers 1-3 as "small", 4-6 as "medium", and 7-9 as "large".
 */
let number = 5;
let size;

switch (true) {
  case number >= 1 && number <= 3:
    size = "small";
    break;
  case number >= 4 && number <= 6:
    size = "medium";
    break;
  case number >= 7 && number <= 9:
    size = "large";
    break;
  default:
    size = "Invalid number";
}

console.log(size);

/**
 * Question 7
 * Determine the type of the variable pet (e.g., "dog"). Return "Canine" for a dog, "Feline" for a cat, and "Unknown" for other pets.
 */
let pet = "dog";
let petType;

switch (pet) {
  case "dog":
    petType = "Canine";
    break;
  case "cat":
    petType = "Feline";
    break;
  default:
    petType = "Unknown";
}

console.log(petType);

/**
 * Question 8
 * Given a variable transportMode with a value like "car", return "Fast" for "plane", "Medium" for "car", and "Slow" for "bicycle".
 */
let transportMode = "car";
let speed;

switch (transportMode) {
  case "plane":
    speed = "Fast";
    break;
  case "car":
    speed = "Medium";
    break;
  case "bicycle":
    speed = "Slow";
    break;
  default:
    speed = "Unknown";
}

console.log(speed);

/**
 * Question 9
 * For a variable direction with values like "N", determine the full direction name. "N" for "North", "S" for "South", etc.
 */
let direction = "N";
let fullDirection;

switch (direction) {
  case "N":
    fullDirection = "North";
    break;
  case "S":
    fullDirection = "South";
    break;
  case "E":
    fullDirection = "East";
    break;
  case "W":
    fullDirection = "West";
    break;
  default:
    fullDirection = "Unknown direction";
}

console.log(fullDirection);

/**
 * Question 10
 * Determine the type of drink based on the variable drink. "Water" for "H2O", "Coffee" for "C8H10N4O2", and "Unknown" for other values.
 */
let drink = "H2O";
let drinkType;

switch (drink) {
  case "H2O":
    drinkType = "Water";
    break;
  case "C8H10N4O2":
    drinkType = "Coffee";
    break;
  default:
    drinkType = "Unknown";
}

console.log(drinkType);
