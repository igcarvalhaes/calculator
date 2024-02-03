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
    return "XDXDXD";
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

// Adiciona os botoes no array e tb no visor da tela da calculadora
function addBotaoNaCalculadora(btn) {
  let buttonValue = Number(btn.value);
  if (arr.length <= 8) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
}

// funcao para calcular de acordo com o operador
function addOperador(btn) {
  let numberOneStringify;

  if (numberOne !== undefined) {
    holder = Number(arr.join(""));
    numberTwo = holder;
    numberOne = operate(numberOne, numberTwo, operator);

    numberOneStringify = numberOne.toString().slice(0, 19);
    numberOne = Number(numberOneStringify);

    calculationResult.textContent = numberOne;
    operator = btn.value;
    holder = numberTwo;
    arr.splice(0, arr.length);
  } else {
    numberOne = Number(arr.join(""));
    arr.splice(0, arr.length);
    operator = btn.value;
  }
}

function equal() {
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
}

function clearLastElement() {
  arr.pop();
  calculationsTracker.textContent = arr.join("");
}

function clearAllElements() {
  return location.reload();
}

function addVirgula() {
  let buttonValue = btnVirgula.value;
  if (!arr.includes(buttonValue)) {
    arr.push(buttonValue);
    calculationsTracker.textContent = arr.join("");
  }
}

function changeSignal() {
  let buttonValue = "-";
  if (!arr.includes(buttonValue)) {
    arr.unshift(buttonValue);
    calculationsTracker.textContent = arr.join("");
  } else {
    arr.shift();
    calculationsTracker.textContent = arr.join("");
  }
}

function percent() {
  let valorArray = Number(arr.join(""));
  console.log(valorArray);
  let calcularPercent = 100;
  arr.splice(0, arr.length);
  arr.push(operate(valorArray, calcularPercent, "/"));
  calculationResult.textContent = arr;
}

// Evento dos botoes numericos
btn9.addEventListener("click", () => addBotaoNaCalculadora(btn9));

btn8.addEventListener("click", () => addBotaoNaCalculadora(btn8));

btn7.addEventListener("click", () => addBotaoNaCalculadora(btn7));

btn6.addEventListener("click", () => addBotaoNaCalculadora(btn6));

btn5.addEventListener("click", () => addBotaoNaCalculadora(btn5));

btn4.addEventListener("click", () => addBotaoNaCalculadora(btn4));

btn3.addEventListener("click", () => addBotaoNaCalculadora(btn3));

btn2.addEventListener("click", () => addBotaoNaCalculadora(btn2));

btn1.addEventListener("click", () => addBotaoNaCalculadora(btn1));

btn0.addEventListener("click", () => addBotaoNaCalculadora(btn0));

btnVirgula.addEventListener("click", () => addVirgula());

btnChangeSignal.addEventListener("click", () => changeSignal());

btnPercent.addEventListener("click", () => percent());

// Evento para os botoes de operaçoes + - * / e =
btnMinus.addEventListener("click", () => addOperador(btnMinus));

btnPlus.addEventListener("click", () => addOperador(btnPlus));

btnx.addEventListener("click", () => addOperador(btnx));

btnDivide.addEventListener("click", () => addOperador(btnDivide));

btnEqual.addEventListener("click", () => equal());

// Botao para limpar tudo
btnCE.addEventListener("click", () => clearAllElements());

// Limpar ultimo elemento apertado
btnC.addEventListener("click", () => clearLastElement());

// Eventos de teclado
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Numpad9":
      addBotaoNaCalculadora(btn9);
      break;
    case "Numpad8":
      addBotaoNaCalculadora(btn8);
      break;
    case "Numpad7":
      addBotaoNaCalculadora(btn7);
      break;
    case "Numpad6":
      addBotaoNaCalculadora(btn6);
      break;
    case "Numpad5":
      addBotaoNaCalculadora(btn5);
      break;
    case "Numpad4":
      addBotaoNaCalculadora(btn4);
      break;
    case "Numpad3":
      addBotaoNaCalculadora(btn3);
      break;
    case "Numpad2":
      addBotaoNaCalculadora(btn2);
      break;
    case "Numpad1":
      addBotaoNaCalculadora(btn1);
      break;
    case "Numpad0":
      addBotaoNaCalculadora(btn0);
    case "NumpadAdd":
      addOperador(btnPlus);
      break;
    case "NumpadSubtrackt":
      addOperador(btnMinus);
      break;
    case "NumpadMultiply":
      addOperador(btnx);
      break;
    case "NumpadDivide":
      addOperador(btnDivide);
      break;
    case "Enter":
      equal();
      break;
    case "Backspace":
      clearLastElement();
      break;
    case "NumpadDecimal": // tecla delete
      clearAllElements();
      break;
    case "Comma":
      addVirgula();
      break;
    default:
      "error";
  }
});
