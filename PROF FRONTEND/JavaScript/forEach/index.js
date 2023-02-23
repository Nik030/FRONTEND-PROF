function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}  // функция для каждого элемента вызывает колбэк

const arr1 = [1, 2, 3];

forEach(arr1, function (element) {
    console.log(element);
}) // 1, 2, 3

forEach(arr1, function (element) {
    console.log(element + 1);
}) // 2, 3, 4

////////////////////

function abrakadabracb1(el, index, arr1) {
    console.log(el, index, arr1);
}

forEach(arr1, abrakadabracb1);



const arr2 = ["a", "b", "c", "d", "e"];
forEach(arr2, function (element) {
    console.log(element);
});




// function printNumber() {
//     console.log(1);
// }
// console.log(printNumber());


// function sum(x, y) {
//     return x + y;
//   }
//   console.log(sum);





/// сумма чисел от 1 до 10
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
forEach(array, function (element) {
    result += element;  // +=  ===  result + element
})
console.log(result);


/// факториал от 10
let result2 = 1;
forEach(array, function (element) {
    result2 *= element;
})
console.log(result2);


/// добавляем в массив числа, умноженные на 10
let result3 = [];
forEach(array, function (element) {
    result3.push(element * 10);
})
console.log(result3);



function map(arr, callback) {
    let newArr = [];
    forEach(arr, function(element){
        newArr.push(callback(element));
    });
    return newArr;
}


// метод  map
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = map(array2, function(element){
    return element * 10;
});
console.log(newArray);



/*
function filter(arr, callback) {}

const array = [1,2,3,4,5,6,7,8,9,10];

const resultArray = filter(array, function (el) {
  return el % 2 === 0;
});
console.log(resultArray);
*/


// [2,4,6,8,10]
/*
const arr = []; --- создание массива
arr.push('fgeg') --- добавление в массив
arr[3] --- доступ к 4 элементу массива
arr[3] = 'rbvt' --- поменяли 4 элемент массива
arr.length --- длина массива
*/




// исправитть мэп чтобы он принимал 3 аргумента
