const button = document.querySelector("input[type='button']");
const newToDoInput = document.querySelector("input[type='text']");
const list = document.querySelector("#list");


const createToDo = (text) => {
  const newToDoContainer = document.createElement("label");
  const newToDoValue = document.createElement("input");
  const paragraph = document.createElement("p");

  newToDoValue.setAttribute("type", "checkbox");
  paragraph.innerText = text;
  newToDoContainer.append(newToDoValue, paragraph);
  return newToDoContainer;
};

list.append(createToDo("Some text 1"));
list.append(createToDo("Some text 2"));
list.append(createToDo("Some text 3"));

const handleAdd = event => {
  console.log(newToDoInput.value); // выводим listener  в отдельную переменную
  newToDoInput.value = "";
};

button.addEventListener("click", handleAdd); // вешаем обработчик события на кнопку
