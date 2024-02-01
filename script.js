const calculationsTracker = document.querySelector(".calculations-tracker");

// botoes digitos
const btn9 = document.querySelector("#btn-9");
const btn8 = document.querySelector("#btn-8");
const btn7 = document.querySelector("#btn-7");
const btn6 = document.querySelector("#btn-6");
const btn5 = document.querySelector("#btn-5");
const btn4 = document.querySelector("#btn-4");
const btn3 = document.querySelector("#btn-3");
const btn2 = document.querySelector("#btn-2");
const btn1 = document.querySelector("#btn-1");
const btn0 = document.querySelector("#btn-0");

// botoes das operacoes
const btnx = document.querySelector("#btn-x");
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const btnDivide = document.querySelector("#btn-divide");

// botoes para limpar a tela
const btnCE = document.querySelector("#btn-ce");

const calculationResult = document.querySelector(".calculation-result");
const btnEqual = document.querySelector("#btn-equal");

let numberOne;
let numberTwo;
let operator;

const arr = [];
let holder;
let resultado;

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
  if (numberTwo != 0) {
    return numberOne / numberTwo;
  } else {
    return "Erro!";
  }
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

// Numeric Button Events

btn9.addEventListener("click", () => {
  let buttonValue = Number(btn9.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn8.addEventListener("click", () => {
  let buttonValue = Number(btn8.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn7.addEventListener("click", () => {
  let buttonValue = Number(btn7.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn6.addEventListener("click", () => {
  let buttonValue = Number(btn6.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn5.addEventListener("click", () => {
  let buttonValue = Number(btn5.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn4.addEventListener("click", () => {
  let buttonValue = Number(btn4.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn3.addEventListener("click", () => {
  let buttonValue = Number(btn3.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn2.addEventListener("click", () => {
  let buttonValue = Number(btn2.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn1.addEventListener("click", () => {
  let buttonValue = Number(btn1.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

btn0.addEventListener("click", () => {
  let buttonValue = Number(btn0.value);
  arr.push(buttonValue);
  calculationsTracker.textContent = arr.join("");
});

// Operation Button Events

btnMinus.addEventListener("click", () => {
  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberOne = operate(numberOne, holder, operator);
    calculationResult.textContent = numberOne;
    operator = btnMinus.value;
    holder = 0;
    arr.splice(0, arr.length);
  } else {
    numberOne = Number(arr.join(""));
    arr.splice(0, arr.length);
    operator = btnMinus.value;
  }
});

btnPlus.addEventListener("click", () => {
  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberOne = operate(numberOne, holder, operator);
    calculationResult.textContent = numberOne;
    operator = btnPlus.value;
    holder = 0;
    arr.splice(0, arr.length);
  } else {
    numberOne = Number(arr.join(""));
    arr.splice(0, arr.length);
    operator = btnPlus.value;
  }
});

btnx.addEventListener("click", () => {
  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberOne = operate(numberOne, holder, operator);
    calculationResult.textContent = numberOne;
    operator = btnx.value;
    holder = 0;
    arr.splice(0, arr.length);
  } else {
    numberOne = Number(arr.join(""));
    arr.splice(0, arr.length);
    operator = btnx.value;
  }
});

btnDivide.addEventListener("click", () => {
  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberOne = operate(numberOne, holder, operator);
    calculationResult.textContent = numberOne;
    operator = btnDivide.value;
    holder = 0;
    arr.splice(0, arr.length);
  } else {
    numberOne = Number(arr.join(""));
    arr.splice(0, arr.length);
    operator = btnDivide.value;
  }
});

btnEqual.addEventListener("click", () => {
  numberTwo = Number(arr.join(""));

  holder = 0;
  arr.splice(0, arr.length);

  resultado = operate(numberOne, numberTwo, operator);
  calculationResult.textContent = resultado;

  operator = "";
});

// Clear Button

btnCE.addEventListener("click", () => {
  return location.reload();
});
