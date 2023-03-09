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
    forEach(arr, function(el, i, arr) {
        const isFilterPassed = callback(el, i, arr);
        if (isFilterPassed) newArr.push(el);
    });
    return newArr;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultArray = filter(array, function (el) {
    return el % 2 === 0;
});
console.log(resultArray);
// 2, 4, 6, 8
// почему-то не работает