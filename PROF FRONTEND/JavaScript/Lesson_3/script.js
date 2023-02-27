const arr = [12, 4, -3, -43, 12, -4, 3];
// вывести только положительные числа

arr.forEach(function (item) {
    if (item > 0) {
        console.log(item);
    }    
})


// только четные числа
arr.forEach(function (item) {
    if (item % 2 === 0) {
        console.log(item);
    }    
})


// используя forEach вывести в консоль наименования товаров
const products = [
    {id: 1, title: 'велосипед', price: 12000, discount: 15},
    {id: 2, title: 'ролики', price: 700, discount: 25},
    {id: 3, title: 'самокат', price: 500, discount: 0},
    {id: 4, title: 'лыжи', price: 1300, discount: 5},
    {id: 5, title: 'сноуборд', price: 2000, discount: 0},
    {id: 6, title: 'коньки', price: 1700, discount: 10}
]
products.forEach(function (products) {
   console.log(products.title);  
})