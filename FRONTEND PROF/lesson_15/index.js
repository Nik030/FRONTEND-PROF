// 30.03
// callback
function printHello(userName) {
    console.log(`Hello ${userName}`);
}

function printBye(text) {
    console.log(`By ${text}`);
}

function getNameOfUser(callback) {
    const name = prompt("Write your name")
    callback(name)
}

getNameOfUser(printHello)
getNameOfUser(printBye)




// forEach
function forEach(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index])
    }
}

const arrayOfNumbers = [5, 35, 36, 39, 45, 48, 49]

function print(value) {
    console.log(value);
}
function pow(value) {
    console.log(value ** 2);
}

forEach(arrayOfNumbers, print)
forEach(arrayOfNumbers, pow)





// addeventlistener
const pElem = document.querySelector("p")
function clicked() {
    console.log(`Clicked`);
}
pElem.addEventListener("click", clicked)