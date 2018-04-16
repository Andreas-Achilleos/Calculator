const readline = require('readline-sync');

console.log("Welcome to the Calculator!");

console.log('\nPlease enter your first number: ');
const argumentOne = readline.prompt();
const numberOne = argumentOne;

console.log('\nPlease enter your second number: ');
const argumentTwo = readline.prompt();
const numberTwo = argumentTwo;

const answer = numberOne * numberTwo;
console.log("\nThe answer is " + answer);
