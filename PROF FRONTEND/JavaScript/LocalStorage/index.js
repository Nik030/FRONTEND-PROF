




const button = document.querySelector("input[type='button']");
const newToDoInput = document.querySelector("input[type='text']");
const list = document.querySelector("#list")
const newToDoContainer = document.createElement("label");
const newToDoValue = document.createElement("input");
const paragraph = document.createElement("p");


newToDoValue.setAttribute("type", "checkbox");
paragraph.innerText = "Some text";
newToDoContainer.append(newToDoValue, paragraph);
list.append(newToDoContainer);

const handleAdd = event => {
 console.log(newToDoInput.value) // выводим listener  в отдельную переменную
 newToDoInput.value = ""
}
button.addEventListener("click", handleAdd) // вешаем обработчик события на кнопку

