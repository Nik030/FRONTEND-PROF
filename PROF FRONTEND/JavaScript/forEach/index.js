function forEach(arr, callback){
for (let i = 0; i < arr.length; i++) {
    callback(i)  
}
}  // функция для каждого элемента вызывает колбэк

const array = [1, 2, 3];



function printNumber() {
    console.log(1);
}
console.log(printNumber());