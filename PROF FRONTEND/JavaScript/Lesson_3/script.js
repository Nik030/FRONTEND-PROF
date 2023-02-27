const arr = [12, 4, -3, -43, 12, -4, 3];
// вывести только положительные числа

arr.forEach(function (item) {
    if (item > 0) {
        console.log(item);
    }    
})
