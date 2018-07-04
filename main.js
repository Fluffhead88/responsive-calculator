var calculation = [];

// function to replace display in html with button that is clicked

function pushNumber() {
  document.getElementById("display").textContent = this.value;
  this.value = calculation;
}

// selects each button clicked and uses function above to put them in place of
// display in html
document.querySelectorAll(".num").forEach(element => {
  element.addEventListener('click', pushNumber);
});

// function to replace display in html with button that is clicked
function pushOperator() {
  document.getElementById("display").textContent = this.value;
  this.value = calculation;
}
console.log(calculation);
// selects each operator clicked and uses function above to put them in place of
// display in html
document.querySelectorAll(".op").forEach(element => {
  element.addEventListener('click', pushOperator);
});

// function to replace display in html with button that is clicked
function calculate() {
  document.getElementById("display").textContent = this.value;
}
// selects equal clicked and uses function above to put them in place of
// display in html
document.querySelectorAll(".eq").forEach(element => {
  element.addEventListener('click', calculate);
});