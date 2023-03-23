// 07.03

console.log(localStorage.getItem("todo"));

const button = document.querySelector("input[type='button']");
const newToDoInput = document.querySelector("input[type='text']");
const list = document.querySelector("#list");
const array = localStorage.getItem("todo") ? localStorage.getItem("todo").split(",") : [] // state


const createToDo = (text) => {
  const newToDoContainer = document.createElement("label");
  const newToDoValue = document.createElement("input");
  const paragraph = document.createElement("p");

  newToDoValue.setAttribute("type", "checkbox");
  paragraph.innerText = text;
  newToDoContainer.append(newToDoValue, paragraph);
  return newToDoContainer;
};

const handleAdd = event => {
  list.append(createToDo(newToDoInput.value));
  array.push(newToDoInput.value);
  localStorage.setItem("todo",array.join(",")) // записываем массив в строку (сериализация)
  newToDoInput.value = "";
};

// array.map(createToDo).forEach(el => list.append(el))
list.append(...array.map(createToDo))

button.addEventListener("click", handleAdd); // вешаем обработчик события на кнопку

 