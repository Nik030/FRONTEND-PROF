const button = document.querySelector("input[type='button']");
const newToDoInput = document.querySelector("input[type='text']");
const list = document.querySelector("#list");


const createToDo = () => {
  const newToDoContainer = document.createElement("label");
  const newToDoValue = document.createElement("input");
  const paragraph = document.createElement("p");

  newToDoValue.setAttribute("type", "checkbox");
  paragraph.innerText = "Some text";
  newToDoContainer.append(newToDoValue, paragraph);
  return newToDoContainer;
};

list.append(createToDo());

const handleAdd = (event) => {
  console.log(newToDoInput.value); // выводим listener  в отдельную переменную
  newToDoInput.value = "";
};

button.addEventListener("click", handleAdd); // вешаем обработчик события на кнопку
