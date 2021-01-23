const user = {
  name: "Mango",
  showName() {
    console.log(this);
    // this будет ссылаться на button если использовать showName как callback
    console.log(`My name is: ${this.name}`);
    // тут undefined так как поля name у button нет
  },
};

/*
 * Представим что у нас есть кнопка с классом js-btn
 * Выберем ее и повесим на нее слушатель клика
 */
const btn = document.querySelector(".js-btn");

user.showName(); //работает
btn.addEventListener("click", user.showName); // не работает
btn.addEventListener("click", user.showName.bind(user)); // работает
