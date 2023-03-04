// // 24.02
// // 1-й способ задания функции
// function sum(a, b, c) { // объявляем функцию именем sum
//     return a + b + c;
// }
// console.log(sum(1, 2, 5));


// // 3-й
// function sum(a, b, c = 4) { 
//     return a + b + c;
// }
// console.log(sum(1, 2));


// // 2-й
// const fn = function (a) {
//     return a ** 2;
// }
// console.log(fn(4));


// //
// const anotherFn = fn;
// console.log(anotherFn(9)); // 9^2 = 81



// //
// function doFiveTimes(callback) {
//     // callback = console.log
//     for (let i = 0; i < 5; i++) {
//         callback(i);        
//     }
// }
// doFiveTimes(console.log);



// ///////////// map
// function forEach(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }

// function map(arr, callback) {  // callback hell ;)
//     const newArr = [];
//     forEach(arr, function(el){  // el = arr[i]
//         newArr.push(callback(el));
//     });
//     return newArr;
// }

// const arr = map([1,2,3,4], function (value) {
//     return value ** 2;
// })

// console.log(arr);



/// ЗАДАЧКИ 

// function forEach(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }

// function combineMap(arr, callback1, callback2) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(callback2(callback1(arr[i])))
//     }
//     return newArr;
// }
// function square(value) {
//     return value * value;
// }

// function addOne(value) {
//     return value + 1;
// }

// const arr = combineMap([1, 2, 3], square, addOne); // [2, 5, 10]

// console.log(arr);


//////////////

// function transform(n) {
//     return n * (n - 1);
// }

// // применяет callback ко всем нечётным елементам массива
// function transformOdd(arr, callback) {

// }

// // применяет callback ко всем чётным елементам массива
// function transformEven(arr, callback) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             result.push(callback(arr[i]))
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;

// }

// const arr = transformEven([1,2,3,4,5], transform); //[0, 2, 6, 4, 20]

// console.log(arr);




function sum(a, b) {
    return a + b;
}

console.log(sum(2, 5)); // 7
console.log(sum(1, 0)); // 1
console.log(sum([1, 2, 3], "123" ));
