const categoriesRef = document.querySelectorAll("li.item");

console.log(`В списке ${categoriesRef.length} категории.\n\n`);

categoriesRef.forEach((elem) => {
  const category = elem.querySelector("h2").textContent;
  const itemsCount = elem.querySelectorAll("li").length;

  console.log(`Категория: ${category}`);
  console.log(`Количество элементов: : ${itemsCount}\n\n`);
});
