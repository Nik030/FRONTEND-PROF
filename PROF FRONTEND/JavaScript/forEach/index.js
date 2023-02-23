function forEach(arr, callback){}  // функция для каждого элемента вызывает колбэк

const array = [1, 2, 3];

forEach(array, function (element) {
    console.log(element);
})