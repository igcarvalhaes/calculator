const calculationsTracker = document.querySelector(".calculations-tracker");
const btn7 = document.querySelector("#btn-7");
const btnx = document.querySelector("#btn-x");

const calculationResult = document.querySelector(".calculation-result");
const btnEqual = document.querySelector("#btn-equal");

let numberOne = 0;
let numberTwo = 0;
let operator;

let arr = [];
let holder = 0;

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

btn7.addEventListener("click", () => {
  let teste = Number(btn7.value);
  arr.push(teste);
  calculationsTracker.textContent = arr.join("");
});

btnx.addEventListener("click", () => {
  holder = Number(arr.join(""));
  arr.splice(0, arr.length);
  operator = "*";
});

btnEqual.addEventListener("click", () => {
  numberTwo = holder;
  numberOne = Number(arr.join(""));
  holder = 0;
  arr = [];
  let resultado = operate(numberOne, numberTwo, operator);
  calculationResult.textContent = resultado;
  operator = "";
});
