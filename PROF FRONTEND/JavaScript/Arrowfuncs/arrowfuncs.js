// 2 способа объявления функции:

// 1 - function declaration
X()
function X(arg1, arg2) {
    ////
    return someResult;
}
X()


// 2 - function expression
YY()
const Y = function YY(arg1, arg2) {
    ////
    return someResult;
}
Y == YY; 



// IIF
(function() {
    //////// 
})();





// массив из функций
const arrOfFunctions = [
    function (arg1, arg2) {
        ////
        return someResult;
    },
    function (arg1, arg2) {
        ////
        return someResult;
    },
    function (arg1, arg2) {
        ////
        return someResult;
    }
]
arrOfFunctions[0]() // вызываем первую функцию



const object = {
    func1: (arg1, arg2) => {
        ////
        return someResult;
    },
    func2: function X(arg1, arg2) {
        ////
        return someResult;
    },
    value: 'someString',
    num: 123,
}
object.value
object.func1



function highOrderFunction() { // фунция которая вызывает функцию
    return function() {

    }
}
const innerFunc = highOrderFunction()();
innerFunc()




// стрелочные функции
const arrowFunc = (arg1, arg2) => {
    console.log();
};


const sum = (arg1, arg2) => arg1 + arg2;

const double = arg1 => {
    console.log('some')
    return arg1 * 2;
}




//// фунция map в виде стрелочной функции
function forEach(arr, callback) {
    for (let i = 0; i < arr.lenght; i++) {
      callback(arr[i], i, arr);
    }
  }
  
  
  function map(arr, callback) {
    let newArr = [];
    forEach(arr, (el, i, arr) => newArr.push(callback(el, i, arr)));
    return newArr;
  }