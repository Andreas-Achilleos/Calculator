const readline = require('readline-sync');

const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function welcomeMessage() {
  console.log("Welcome to the Calculator!");
}

function getCalculationMode() {
    console.log('\nWhich calculator mode do you want?');
    return userInput.userStringInput(`\
 ${ARITHMETIC_MODE}) Arithmetic
 ${VOWEL_COUNTING_MODE}) Vowel counting`);
}

welcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        vowelCounting.performOneVowelCountingCalculation();
    } else {
      console.log(`${calculationMode} is not a valid mode`)
    }
}
