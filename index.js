const readline = require('readline-sync');

function welcomeMessage() {
  console.log("Welcome to the Calculator!");
}

function userStringInput(prompt) {
  console.log("\n" + prompt);
  return readline.prompt();
}

function userNumberInput(prompt) {
  let response;
  do {
    response = +userStringInput(prompt)
  } while (isNaN(response));
  return response;
}

function getOperator() {
  return userStringInput("Please enter the operator: ");
}

function getNumberArray(operator) {
  const iterations = userNumberInput("How many numbers do you want to " + operator + " together?");
  let numbers = [iterations];
  for (let i = 0; i < iterations; i++) {
    numbers[i] = userNumberInput("Please enter number " + (i + 1) + ": ");
  }
  return numbers;
}

function calculateAnswer(operator, numbers) {
  let answer = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (operator == "+") {
      answer += numbers[i];
    } else if (operator == "-") {
      answer -= numbers[i];
    } else if (operator == "*") {
      answer *= numbers[i];
    } else if (operator == "/") {
      answer /= numbers[i];
    }
  }
  return answer;
}

function performOneCalculation() {
  const operator = getOperator();
  const numbers = getNumberArray(operator);
  const answer = calculateAnswer(operator, numbers);
  console.log("The answer is " + answer);
}

welcomeMessage();
while (true) {
  performOneCalculation();
}
