const userInput = require('./userInput');

function operatorIsValid(operator) {
    return ['+', '-', '*', '/'].includes(operator)
}

function getOperator() {
  let operator;
  do {
    operator = userInput.userStringInput("Please enter the operator: ");
  } while (!operatorIsValid(operator) && (console.log(`The  operator '${operator}' is not supported`) || true))
  return operator;
}

function getNumberArray(operator) {
  const iterations = userInput.userNumberInput("How many numbers do you want to " + operator + " together?");
  let numbers = [iterations];
  for (let i = 0; i < iterations; i++) {
    numbers[i] = userInput.userNumberInput("Please enter number " + (i + 1) + ": ");
  }
  return numbers;
}

// function calculateAnswer(operator, numbers) {
//   let answer = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (operator == "+") {
//       answer += numbers[i];
//     } else if (operator == "-") {
//       answer -= numbers[i];
//     } else if (operator == "*") {
//       answer *= numbers[i];
//     } else if (operator == "/") {
//       answer /= numbers[i];
//     }
//   }
//   return answer;
// }

function calculateAnswer(operator, numbers) {
    if (operator === '+') {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    } else if (operator === '-') {
        return numbers.slice(1).reduce((acc, curr) => acc - curr, numbers[0]);
    } else if (operator === '*') {
        return numbers.reduce((acc, curr) => acc * curr, 1);
    } else if (operator === '/') {
        return numbers.slice(1).filter(x => x !== 0).reduce((acc, curr) => acc / curr, numbers[0]);
    } else {
        throw new Error(`The operator '${operator}' is not supported`);
    }
}

exports.performOneArithmeticCalculation = function() {
  const operator = getOperator();
  const numbers = getNumberArray(operator);
  try {
    const answer = calculateAnswer(operator, numbers);
    console.log("The answer is " + answer);
} catch (e) {
    console.log(`\n${e.message}`);
    }
}
