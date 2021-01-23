let counterValue = 0;

const decrementButtonRef = document.querySelector("[data-action=decrement]");
const incrementButtonRef = document.querySelector("[data-action=increment]");
const counterValueRef = document.querySelector("#value");

function increment() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

decrementButtonRef.addEventListener("click", decrement);
incrementButtonRef.addEventListener("click", increment);
