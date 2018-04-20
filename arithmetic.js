const userInput = require('./userInput');

function getOperator() {
  return userInput.userStringInput("Please enter the operator: ");
}

function getNumberArray(operator) {
  const iterations = userInput.userNumberInput("How many numbers do you want to " + operator + " together?");
  let numbers = [iterations];
  for (let i = 0; i < iterations; i++) {
    numbers[i] = userInput.userNumberInput("Please enter number " + (i + 1) + ": ");
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

exports.performOneArithmeticCalculation = function() {
  const operator = getOperator();
  const numbers = getNumberArray(operator);
  const answer = calculateAnswer(operator, numbers);
  console.log("The answer is " + answer);
}
