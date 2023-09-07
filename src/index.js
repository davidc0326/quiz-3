/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log("Question #1: Sum of numbers from 1 to 10 is " + sum);

/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */

let numbersString = "";
let j = 5;

while (j <= 15) {
  numbersString += j;
  if (j < 15) {
    numbersString += ",";
  }
  j++;
}

console.log("Question 2: String of numbers from 5 to 15 is " + numbersString);

// /**
//  * Question 3
//  * Print all even numbers between 10 and 30 using a while loop.
//  */

// Inicializamos una cadena vacía para almacenar los números pares
let evenNumbersString = "";

// Inicializamos la variable con el primer número par en el rango
let evenNumber2 = 10;

// Usamos un bucle while para recorrer los números pares entre 10 y 30
while (evenNumber2 <= 30) {
  // Verificamos si el número actual es par
  if (evenNumber2 % 2 === 0) {
    // Agregamos el número par a la cadena con una coma y un espacio
    evenNumbersString += evenNumber2;

    // Verificamos si este no es el último número par para agregar una coma
    if (evenNumber2 < 30 - 1) {
      evenNumbersString += ", ";
    }
  }

  // Incrementamos el número en 2 para pasar al siguiente número par
  evenNumber2 += 2;
}

// Imprimimos la cadena que contiene los números pares
console.log("question #3:", evenNumbersString);
/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */

let powerOfTwo = 1;
let exponent = 0;

while (powerOfTwo <= 1000) {
  powerOfTwo = Math.pow(2, exponent);
  exponent++;
}

console.log(
  "Question 4: Smallest power of 2 greater than 1000 is 2^" + (exponent - 1)
);

/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */

let originalString = "HelloWorld";
let reversedString = "";
let k = originalString.length - 1;

while (k >= 0) {
  reversedString += originalString[k];
  k--;
}

console.log("Question 5: Reversed string is " + reversedString);

/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */

let inputString = "banana";
let letterToCount = "a";
let count = 0;
let l = 0;

while (l < inputString.length) {
  if (inputString[l] === letterToCount) {
    count++;
  }
  l++;
}

console.log(
  "Question 6: Count of '" + letterToCount + "' in 'banana' is " + count
);

/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 */

let num = 5;
let factorial = 1;
let m = 1;

while (m <= num) {
  factorial *= m;
  m++;
}

console.log("Question 7: Factorial of 5 is " + factorial);

/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */

let n = 100;

console.log("Question 8: Numbers from 100 to 80 in descending order:");

while (n >= 80) {
  console.log(n);
  n--;
}

/**
 * Question 9
 * Using a while loop, find the greatest common divisor (GCD) of two numbers, 56 and 98.
 */

let number1 = 56;
let number2 = 98;

while (number1 !== number2) {
  if (number1 > number2) {
    number1 -= number2;
  } else {
    number2 -= number1;
  }
}

console.log("Question 9: GCD of 56 and 98 is " + number1);

/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using a while loop.
 */

let oddSum = 0;
let p = 1;

while (p <= 50) {
  if (p % 2 !== 0) {
    oddSum += p;
  }
  p++;
}

console.log("Question 10: Sum of odd numbers between 1 and 50 is " + oddSum);
