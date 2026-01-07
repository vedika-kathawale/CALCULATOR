const display = document.getElementById('display');

function appendNumber(num) {
  if (display.value === "0") display.value = "";
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (!isNaN(lastChar) || lastChar === ')') {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch {
    display.value = "Error";
  }
}
