// 24.02
// 1-й способ задания функции
function sum(a, b, c) { // объявляем функцию именем sum
    return a + b + c;
}
console.log(sum(1, 2, 5));



// 2-й
const fn = function (a) {
    return a ** 2;
}
console.log(fn(4));


// 3-й
function sum(a, b, c = 4) { 
    return a + b + c;
}
console.log(sum(1, 2));
