const readline = require('readline-sync');

console.log("Welcome to the Calculator!");

console.log('\nPlease enter an operator: ');
const operator = readline.prompt();

console.log("How many numbers do you want to " + operator + " together?");

var amountOfNumbersString = readline.prompt();
var amountOfNumbers = +amountOfNumbersString;

var numbers = [amountOfNumbers];
var i;
for (i = 0; i < amountOfNumbers; i++) {
  console.log("Enter number " + (i + 1) + ":");
  var numberEntered = readline.prompt();
  numbers[i] = +numberEntered;
}

var answer = numbers[0];
for (i = 1; i <amountOfNumbers; i++) {
  if (operator == "+") {
    answer = answer + numbers[i];
  } else if (operator == "-") {
    answer = answer - numbers[i];
  } else if (operator == "*") {
    answer = answer * numbers[i];
  } else if (operator == "/") {
    answer = answer / numbers[i];
  }
}


console.log("\nThe answer is " + answer);
