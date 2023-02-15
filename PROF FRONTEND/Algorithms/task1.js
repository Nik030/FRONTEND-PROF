// линейное сравнение
const arr = [10, 20, 30, 40, 50];
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, 60));

function linearSearch2(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return true;
    }
  }
  return false;
}
console.log(linearSearch2(arr, 50));



// сумма 3 чисел
function sum() {
    let sum = 0
    for (let i = 0; i < 3; i++) {
        sum += +prompt("Введите 3 числа")
    }
    console.log(sum);
}
sum();

/*
START

READ sum()
FOR i = 0 to read i
PRINT SUM

END
*/