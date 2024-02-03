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

// limpar ultimo botao apertado
const btnC = document.querySelector("#btn-c");

// botao % e virgula e mudar sinal
const btnPercent = document.querySelector("#percent");
const btnVirgula = document.querySelector("#btn-virgula");
const btnChangeSignal = document.querySelector("#btn-changeSignal");

const calculationResult = document.querySelector(".calculation-result");
const btnEqual = document.querySelector("#btn-equal");

let numberOne;
let numberTwo;
let operator;

const arr = [];
let holder;
let resultado;

function add(numberOne, numberTwo) {
  let resultadoOperacao = numberOne + numberTwo;
  return (resultadoOperacao = Number(resultadoOperacao.toFixed(7)));
}

function subtract(numberOne, numberTwo) {
  let resultadoOperacao = numberOne - numberTwo;
  return (resultadoOperacao = Number(resultadoOperacao.toFixed(7)));
}

function multiply(numberOne, numberTwo) {
  let resultadoOperacao = numberOne * numberTwo;
  return (resultadoOperacao = Number(resultadoOperacao.toFixed(7)));
}

function divide(numberOne, numberTwo) {
  let resultadoOperacao;
  if (numberTwo != 0) {
    resultadoOperacao = numberOne / numberTwo;
    return (resultadoOperacao = Number(resultadoOperacao.toFixed(7)));
  } else {
    return "Erro";
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

// Evento dos botoes numericos

btn9.addEventListener("click", () => {
  let buttonValue = Number(btn9.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn8.addEventListener("click", () => {
  let buttonValue = Number(btn8.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn7.addEventListener("click", () => {
  let buttonValue = Number(btn7.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn6.addEventListener("click", () => {
  let buttonValue = Number(btn6.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn5.addEventListener("click", () => {
  let buttonValue = Number(btn5.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn4.addEventListener("click", () => {
  let buttonValue = Number(btn4.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn3.addEventListener("click", () => {
  let buttonValue = Number(btn3.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn2.addEventListener("click", () => {
  let buttonValue = Number(btn2.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn1.addEventListener("click", () => {
  let buttonValue = Number(btn1.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btn0.addEventListener("click", () => {
  let buttonValue = Number(btn0.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btnVirgula.addEventListener("click", () => {
  let buttonValue = btnVirgula.value;
  if (!arr.includes(buttonValue)) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
});

btnChangeSignal.addEventListener("click", () => {
  let buttonValue = "-";
  if (!arr.includes(buttonValue)) {
    arr.unshift(buttonValue);
    calculationsTracker.textContent = arr.join("");
  } else {
    arr.shift();
    calculationsTracker.textContent = arr.join("");
  }
});

btnPercent.addEventListener("click", () => {
  let valorArray = Number(arr.join(""));
  console.log(valorArray);
  let calcularPercent = 100;
  arr.splice(0, arr.length);
  arr.push(operate(valorArray, calcularPercent, "/"));
  calculationResult.textContent = arr;
});

// Evento para os botoes de operaçoes + - * / e =

btnMinus.addEventListener("click", () => {
  let numberOneStringify;

  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberTwo = holder;
    numberOne = operate(numberOne, numberTwo, operator);

    numberOneStringify = numberOne.toString().slice(0, 19);
    numberOne = Number(numberOneStringify);

    calculationResult.textContent = numberOne;
    operator = btnMinus.value;
    holder = numberTwo;
    arr.splice(0, arr.length);
  } else {
    numberOne = Number(arr.join(""));
    arr.splice(0, arr.length);
    operator = btnMinus.value;
  }
});

btnPlus.addEventListener("click", () => {
  let numberOneStringify;

  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberTwo = holder;
    numberOne = operate(numberOne, numberTwo, operator);

    numberOneStringify = numberOne.toString().slice(0, 19);
    numberOne = Number(numberOneStringify);

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
  let numberOneStringify;

  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberTwo = holder;
    numberOne = operate(numberOne, numberTwo, operator);

    numberOneStringify = numberOne.toString().slice(0, 19);
    numberOne = Number(numberOneStringify);

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
  let numberOneStringify;

  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberTwo = holder;
    numberOne = operate(numberOne, numberTwo, operator);

    numberOneStringify = numberOne.toString().slice(0, 19);
    numberOne = Number(numberOneStringify);

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
  let resultadoStringify;

  if (arr.length === 0) {
    calculationResult.textContent = resultado;
  } else {
    numberTwo = Number(arr.join(""));

    holder = 0;
    arr.splice(0, arr.length);

    resultado = operate(numberOne, numberTwo, operator);

    resultadoStringify = resultado.toString().slice(0, 19);
    resultado = Number(resultadoStringify);

    calculationResult.textContent = resultado;

    operator = "";
  }
});

// Botao para limpar tudo
btnCE.addEventListener("click", () => {
  return location.reload();
});

// Limpar ultimo elemento apertado
btnC.addEventListener("click", () => {
  arr.pop();
  calculationsTracker.textContent = arr.join("");
});
