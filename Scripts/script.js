const button = document.querySelectorAll("button");
const result = document.getElementById("result");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    const buttonValue = button[i].textContent;
    if (buttonValue === "AC") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "DE") {
      DeFunction()
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  result.value = "";
}

const DeFunction = () => {
  const numbers = result.value.toString().split("");
  numbers.pop();
  result.value = numbers.join("");
}

function calculateResult() {
  const expression = result.value.replace("x", "*").replace("÷", "/"); // Replace "x" with "*" and "÷" with "/"
  result.value = eval(expression);
}

function appendValue(buttonValue) {
  if (buttonValue === "*") {
    buttonValue = "x"; // Replace "*" with "x"
  } else if (buttonValue === "/") {
    buttonValue = "÷"; // Replace "/" with "÷"
  }
  result.value = result.value + buttonValue;
}
document.getElementById('display').setAttribute('data-upper-input', upperInput);
document.getElementById('display').value = lowerInput;