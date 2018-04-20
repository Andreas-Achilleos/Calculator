const readline = require('readline-sync');

function userStringInput(prompt) {
  console.log(`\n${prompt}`);
  return readline.prompt();
}

exports.userStringInput = userStringInput;

exports.userNumberInput = function(prompt) {
  let response;
  do {
    response = +userStringInput(prompt)
  } while (isNaN(response));
  return response;
}
