const button = document.querySelector("input[type='button']");
const newToDoInput = document.querySelector("input[type='text']");

button.addEventListener("click", event => console.log(newToDoInput.value)) // вешаем обработчик события на кнопку