// function to replace display in html with button that is clicked

function myFunction(x) {
  document.getElementById("display").textContent = x.target.value;
}

// selects each button clicked and uses function above to put them in place of
// display in html

document.querySelectorAll(".btn").forEach(element => {
  element.addEventListener('click', myFunction);
})