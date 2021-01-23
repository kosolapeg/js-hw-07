const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const nameInputHandler = (e) => {
  outputRef.textContent = e.target.value || "незнакомец";
};

inputRef.addEventListener("input", nameInputHandler);
