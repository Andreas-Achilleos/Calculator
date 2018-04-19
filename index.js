const readline = require('readline-sync');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function welcomeMessage() {
  console.log("Welcome to the Calculator!");
}

function userStringInput(prompt) {
  console.log(`\n${prompt}`);
  return readline.prompt();
}

function userNumberInput(prompt) {
  let response;
  do {
    response = +userStringInput(prompt)
  } while (isNaN(response));
  return response;
}

function getCalculationMode() {
    console.log('\nWhich calculator mode do you want?');
    return userStringInput(`\
 ${ARITHMETIC_MODE}) Arithmetic
 ${VOWEL_COUNTING_MODE}) Vowel counting`);
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

function countVowels(string) {
    let counts = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (let char of string) {
        const upperChar = char.toUpperCase();
        if (counts.hasOwnProperty(upperChar)) {
            counts[upperChar]++;
        }
    }
    return counts;
}

function performOneArithmeticCalculation() {
  const operator = getOperator();
  const numbers = getNumberArray(operator);
  const answer = calculateAnswer(operator, numbers);
  console.log("The answer is " + answer);
}

function performOneVowelCountingCalculation() {
    const string = userStringInput('Please enter a string:');
    const answer = countVowels(string);

    console.log('The vowel counts are:');
    for (let vowel in answer) {
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }
}

welcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
}
