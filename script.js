const billValueInput = document.querySelector("#bill-value-input");
const billValueInputValue = billValueInput.value;

const boxes = document.querySelectorAll(".box");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const peopleInput = document.querySelector("#people-num");
const peopleInputValue = peopleInput.value;
const calculateBtn = document.querySelector(".calculate-btn");
const tipAmountValue = document.querySelector(".tip-amount-value");
const totalAmountValue = document.querySelector(".total-amount-value");
const resetBtn = document.querySelector(".reset-btn");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // console.log(billValueInput.value * e.target.value);
    totalAmountValue.innerHTML = Math.round(
      billValueInput.value * e.target.value
    );
    tipAmountValue.innerHTML = Math.round(
      billValueInput.value * e.target.value
    );
  });
});
