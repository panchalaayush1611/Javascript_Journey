const count = document.querySelector(".count");
const subBtn = document.querySelector(".sub-btn");
const addBtn = document.querySelector(".add-btn");
const numberField = document.querySelector(".numberField");
const resetBtn = document.querySelector(".reset-btn");

subBtn.addEventListener("click", function (sub) {
  const strToInt = parseInt(count.innerText);
  const numberFieldValue = parseInt(numberField.value);
  count.innerText = strToInt - numberFieldValue;
});

addBtn.addEventListener("click", function (add) {
  const strToInt = parseInt(count.innerText);
  const numberFieldValue = parseInt(numberField.value);
  count.innerText = strToInt + numberFieldValue;
});

resetBtn.addEventListener("click", function (BtnReset) {
  count.innerText = 0;
});
