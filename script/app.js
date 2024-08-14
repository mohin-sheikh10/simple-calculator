const result = document.getElementById("result");
const addNumberBtn = document.getElementById("addNumberBtn");
addNumberBtn.addEventListener("click", function () {
  const inputNum1 = document.getElementById("num1");
  const num1Value = parseFloat(inputNum1.value);
  const inputNum2 = document.getElementById("num2");
  const num2Value = parseFloat(inputNum2.value);
  const sum = num1Value + num2Value;
  result.innerText = `Result: ${sum}`;
  inputNum1.value = "";
  inputNum2.value = "";
});
