var calculation = [];
var num_1 = "";
var num_2 = "";
op = "";

// function to replace display in html with button that is clicked

function pushNumber(event) {
  document.getElementById("display").textContent = event.target.value;
  calculation.push(event.target.value);
}

// selects each button clicked and uses function above to put them in place of
// display in html
document.querySelectorAll(".num").forEach(element => {
  element.addEventListener('click', pushNumber);
});

// function to replace display in html with button that is clicked
function pushOperator(event) {
  document.getElementById("display").textContent = event.target.value;
  calculation.push(event.target.value);
}
// selects each operator clicked and uses function above to put them in place of
// display in html
document.querySelectorAll(".op").forEach(element => {
  element.addEventListener('click', pushOperator);
});

document.querySelectorAll(".eq").forEach(element => {
  element.addEventListener('click', calculate);
});
// function to replace display in html with button that is clicked
function calculate() {
  var operators = ["+", "-", "/", "*"];
  var result;
  // var operators
  for (var i = 0; i < calculation.length; i++) {
    if (operators.indexOf(calculation[i]) === -1 && op.length > 0) {
      num_2 += calculation[i];
    } else if (operators.indexOf(calculation[i]) !== -1) {
      op = calculation[i];
    } else {
      num_1 += calculation[i];
    }
    // document.getElementById("display").textContent = number
  }

  if (op === "+") {
    result = Number(num_1) + Number(num_2);
  };
  if (op === "-") {
    result = Number(num_1) - Number(num_2);
  };
  if (op === "*") {
    result = Number(num_1) * Number(num_2);
  };
  if (op === "/") {
    result = Number(num_1) / Number(num_2);
  };

  console.log(result);
  document.getElementById("display").textContent = result;
}

// selects equal clicked and uses function above to put them in place of
// display in html