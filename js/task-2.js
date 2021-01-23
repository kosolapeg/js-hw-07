const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsArray = ingredients.reduce((acc, ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return [...acc, li];
}, []);

ingredientsListRef.append(...ingredientsArray);
