
//1
console.log(sum(1, 2, 5));
function sum(a, b, c) {
    return a + b + c;
}

//2
const fn = function (a) {
    return a ** 2;
}
console.log(fn(4));

const anotherFn = fn;

console.log(anotherFn(9));

//3
function doFiveTimes(callback) {
    // callback = console.log
    for (let i = 0; i < 5; i++) {
        callback(i);
    }
}
doFiveTimes(console.log);


