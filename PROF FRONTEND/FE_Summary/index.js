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


///////////////////////
// a и b - числа
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 5)); // 7
console.log(sum(1, 0)); // 1


// arr - массив ; pow - степень в которую надо возвести
function copy(arr, pow) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** pow);
    }
    return newArr;
}
console.log(copy([1, 2, 3], 2)); // [1, 4, 9]  pow - степень
console.log(copy([1, 2, 3], 3)); // [1, 8, 27]


///////////////////////

// arr - массив; callback - функция с одним параметром = элементу массива
// функция  forEach  последовательно перебирает все элементы массива с 0 по последний и вызывает функцию callback для каждого отдельного элемента массива

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         callback(item);
//     }
// }

// forEach([1, 2, 3, 4, 5], function (item) {
//     console.log("Hello my dear item", item);
// });




// функия forEach последовательно перебирает все элементы массива с 0 по последний и вызывает функцию callback для каждого отдельного элемента массива, ЕСЛИ функция condition для этого элемента вернула true

// function forEach(arr, callback, condition) {
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (condition(item) == true) {
//             callback(item);
//         }
//     }
// }

// forEach([1, 2, 3, 4, 5, 6], function (item) {console.log("Hello my dear item", item)}, function (item) { return item > 2;});

