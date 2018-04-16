const readline = require('readline-sync');

console.log("Welcome to the Calculator!");

console.log('\nPlease enter your first number: ');
const argumentOne = readline.prompt();
const numberOne = +argumentOne;

console.log('\nPlease enter an operator: ');
const operator = readline.prompt();

console.log('\nPlease enter your second number: ');
const argumentTwo = readline.prompt();
const numberTwo = +argumentTwo;

var answer;

// if (operator == "+") {
//   answer = numberOne + numberTwo;
// } else if (operator == "-") {
//   answer = numberOne - numberTwo;
// } else if (operator == "*") {
//   answer = numberOne * numberTwo;
// } else if (operator == "/") {
//   answer = numberOne / numberTwo;
// }

switch (operator) {
  case "+":
    answer = numberOne + numberTwo;
    break;
  case "-":
    answer = numberOne - numberTwo;
    break;
  case "*":
    answer = numberOne * numberTwo;
    break;
  case "/":
    answer = numberOne / numberTwo;
    break;
}

console.log("\nThe answer is " + answer);
