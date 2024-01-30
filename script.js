let numberOne = 0;
let numberTwo = 0;
let operator;

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function operate(numberOne, numberTwo, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(numberOne, numberTwo);
      break;
    case "-":
      result = subtract(numberOne, numberTwo);
      break;
    case "*":
      result = multiply(numberOne, numberTwo);
      break;
    case "/":
      result = divide(numberOne, numberTwo);
      break;
  }
  return result;
}
