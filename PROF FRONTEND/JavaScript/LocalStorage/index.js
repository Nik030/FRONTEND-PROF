



const button = document.querySelector("input[type='button']");
const newToDoInput = document.querySelector("input[type='text']");

const handleAdd = event => console.log(newToDoInput.value) // выводим listener  в отдельную переменную

button.addEventListener("click", handleAdd) // вешаем обработчик события на кнопку

