// написать процесс который при отправке формы считывает данные из формы и выводит в консоль
const products = [];

const addForm = document.querySelector(".addForm");

addForm.addEventListener("submit", (event) => {
  event.preventDefault(); // отменяем отправку формы
  const title = event.target.title;
  const price = event.target.price;

  const newProduct = { // создаем объект
    title: title.value,
    price: price.value,
  };
  products.push(newProduct); 
  localStorage.setItem('product', JSON.stringify(products));// записываем массив в local storage под ключем 'products'
  event.target.reset(); // чтобы форма обновлялась
  console.log(products);
});