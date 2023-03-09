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

function filter(arr, callback) {
    let newArr = [];
    forEach(arr, function(el, i, arr) {
        const isFilterPassed = callback(el, i, arr);
        if (isFilterPassed) newArr.push(newEl);
    });
    return newArr;
}