const billValueInput = document.querySelector("#bill-value-input");
const peopleInput = document.querySelector("#people-num");
const boxes = document.querySelectorAll(".box");
const calculateBtn = document.querySelector(".calculate-btn");
const tipAmountValue = document.querySelector(".tip-amount-value");
const totalAmountValue = document.querySelector(".total-amount-value");
const resetBtn = document.querySelector(".reset-btn");

let tipBoxValue;

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    tipBoxValue = e.target.value;
  });
});

const calculatingBillAndTipPercentage = () => {
  let numBillValue = Number(billValueInput.value);
  let numPeopleValue = Number(peopleInput.value);

  const tipAmountAndTotalBillAmountTipAmount = () => {
    // getting the exact tip amount
    let tipAmountOfBillValue = numBillValue * tipBoxValue;
    tipAmountValue.innerHTML = tipAmountOfBillValue.toFixed(2);
    console.log(tipAmountOfBillValue, "bill value * tip value");

    // getting the total of base bill amount and exact tip amount
    let totalBillAmountTipAmout = numBillValue + tipAmountOfBillValue;
    totalAmountValue.innerHTML = totalBillAmountTipAmout.toFixed(2);
    console.log(totalBillAmountTipAmout, "base bill + tip amount");
  };

  const tipAmountAndTotalBillAmountTipAmountTipPerPerson = () => {
    // getting the exact tip amount
    let tipAmountOfBillValue = numBillValue * tipBoxValue;
    console.log(tipAmountOfBillValue, "bill value * tip value");

    // getting the total of base bill amount and exact tip amount
    let totalBillAmountTipAmout = numBillValue + tipAmountOfBillValue;
    console.log(totalBillAmountTipAmout, "base bill + tip amount");

    // getting tip per person value
    let tipPerPerson = tipAmountOfBillValue / numPeopleValue;
    tipAmountValue.innerHTML = tipPerPerson.toFixed(2);
    console.log(tipPerPerson, "tip per person");

    // getting total amount per person
    let totalAmountPerPerson = totalBillAmountTipAmout / numPeopleValue;
    totalAmountValue.innerHTML = totalAmountPerPerson.toFixed(2);
    console.log(totalAmountPerPerson, "total amount per person");
  };

  if (peopleInput.value === "") {
    tipAmountAndTotalBillAmountTipAmount();
  } else {
    tipAmountAndTotalBillAmountTipAmountTipPerPerson();
  }
};

resetBtn.addEventListener("click", () => {
  billValueInput.value = "";
  peopleInput.value = "";
  tipAmountValue.textContent = "0.00";
  totalAmountValue.textContent = "0.00";
});

calculateBtn.addEventListener("click", () => {
  calculatingBillAndTipPercentage();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    calculatingBillAndTipPercentage();
  }
});
