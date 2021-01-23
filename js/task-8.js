const boxesRef = document.querySelector("div#boxes");
const boxesCountRef = document.querySelector("#controls > input");
const renderButtonRef = document.querySelector("[data-action=render]");
const destroyButtonRef = document.querySelector("[data-action=destroy]");
let boxesRefArray = [];

const width = 30;
const height = 30;

function randomColor() {
  return "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
}

function destroyBoxes() {
  boxesArray = [];
  boxesRef.innerHTML = "";
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = width + i * 10 + "px";
    box.style.height = height + i * 10 + "px";
    box.style.backgroundColor = randomColor();
    boxesArray.push(box);
  }
  boxesRef.append(...boxesRefArray);
}

const renderHandler = () => {
  destroyBoxes();
  createBoxes(boxesCountRef.value);
};

renderButtonRef.addEventListener("click", renderHandler);
destroyButtonRef.addEventListener("click", destroyBoxes);
