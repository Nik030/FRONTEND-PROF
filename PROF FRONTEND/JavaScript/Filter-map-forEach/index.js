// 28.02



function forEach(arr, callback) {
  for (let i = 0; i < arr.lenght; i++) {
    callback(arr[i], i, arr);
  }
}

// фунция мэп преопразовывает исходный массив в новый массив применея колбэк к каждому элементу из исходного набора данных
function map(arr, callback) {
  let newArr = [];
  forEach(arr, function (el, i, arr) {
    const newEl = callback(el, i, arr);
    newArr.push(newEl);
  });
  return newArr;
}

// фунция фильтр создает массив, переберает его и вкладывает в него те элементы, которые прошли проверку вложенной вторым аргументом функцией
function filter(arr, callback) {
  let newArr = [];
  // forEach(arr, function(el, i, arr) {
  //     const isFilterPassed = callback(el, i, arr);
  //     if (isFilterPassed) newArr.push(el);
  // });
  forEach(arr, (el, i, arr) => {
    if (callback(el, i, arr)) newArr.push(el);
  });

  // или так через тернарный оператор
  forEach(arr, (el, i, arr) =>
    callback(el, i, arr) ? newArr.push(el) : console.log(el)
  );

  return newArr;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultArray = filter(array, (el) => el % 2 === 0);
console.log(resultArray);
// 2, 4, 6, 8
// почему-то не работает







// function reduce
function reduce(arr, callback, initial) {
  let accumulator = arr[0];
  if (initial !== undefined) {  // !== не равно
    accumulator = initial;
  }
  for (let i = 1; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reduceResult = reduce(array, (prev, current) => prev + current);

console.log(reduceResult); //55




// !10
console.log(
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((accumulator, current) => accumulator * current)
);
//3628800



const objectsArray = [
  {
    name: 'piotr',
    age: 18,
    gender: false
  },
  {},
  {}
];

objectsArray
.filter(el => el.gender)
.filter(el => el.age >= 21)
.map(el => ({
  name: el.name,
  isAdult: true,
  money: el.money
}))
.reduce((accumulator, current) => accumulator + current.money, 0);



// функция сорт отсортирует и перезапишет текущий массив
[].sort((a, b) => {
  return a - b;
});



// сделайте функцию которая считает цифры фибоначи не используя рекурсию