// JavaScript Loop Exercises - Super Easy Version

// 1️⃣ Print "Hello!" 3 Times
for (let i = 0; i < 3; i++) {
  console.log("Hello!");
}


// 2️⃣ Print Numbers 1 to 5
// 2️⃣ Print Numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 3️⃣ Print Even Numbers from 2 to 10
// Step 1: Use a for loop to iterate through numbers.
// 3️⃣ Print Even Numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// 4️⃣ Countdown from 5 to 1
// Step 1: Use a while loop.
// Step 2: Initialize count at 5.
// 4️⃣ Countdown from 5 to 1
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
// Step 1: Use a for loop.
// 5️⃣ Sum of Numbers 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);
// 6️⃣ Keep Asking Until Correct Answer
// 6️⃣ Keep Asking Until Correct Answer
let answer;
do {
  answer = prompt("What is 2 + 2?");
// 7️⃣ Multiplication Table of 2
for (let i = 1; i <= 5; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}
// 8️⃣ Reverse a Short Word
let word = "cat";
let reversedWord = word.split("").reverse().join("");
console.log(reversedWord);
// 9️⃣ Find the Factorial of 3
let factorial = 1;
for (let i = 3; i > 0; i--) {
  factorial *= i;
// 🔟 Roll a Dice Until You Get a 3
let dice;
do {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
} while (dice !== 3);
// 8️⃣ Reverse a Short Word
// Reverse the word "cat".


// 9️⃣ Find the Factorial of 3
// Calculate the factorial of 3 (3! = 3 × 2 × 1 = 6).


// 🔟 Roll a Dice Until You Get a 3
// Use a loop to keep rolling a dice (random number between 1-6) until you get a 3.

