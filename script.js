const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const ulElement = document.getElementById("list-item");
const counterEl = document.getElementById("counter");

let counter = 0;

function incrementCounter() {
  counter++;
  counterEl.innerText = counter;
  // create an element
  const li = document.createElement("li");
  li.setAttribute("data-counter", counter);
  if (counter % 2 === 0) {
    li.style.backgroundColor = "red";
    li.style.padding = "20px";
    li.style.border = "solid 1px";
    li.style.margin = "5px";
  } else {
    li.setAttribute("class", "yellow");
    li.style.padding = "20px";
    li.style.border = "solid 1px";
    li.style.margin = "5px";
  }
  li.innerHTML = "<b> Something </b>" + counter;
  console.log(li);
  // append child elememnt
  ulElement.appendChild(li);
}

function decrementCounter() {
  const li = ulElement.querySelector('[data-counter="' + counter + '"]');

  const number = parseInt(li.getAttribute("data-counter"), 10);
  console.log(number);

  li.remove();

  counter--;
  counterEl.innerText = counter;
}
function resetCounter() {
  counter = 0;
  counterEl.innerText = counter;
}

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
resetBtn.addEventListener("click", resetCounter);
