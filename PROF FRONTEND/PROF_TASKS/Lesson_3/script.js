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

// вывести наименования товаров у которых скидка равна 0
products.forEach(function (products) {
    if(products.discount === 0) {
        console.log(products.title);
    }  
 })



function sum(a, b) {
    console.log(a + b);
}
function sub(a, b) {
    console.log(a - b);
}
function multiply(a, b) {
    console.log(a * b);
}
function calculation(func) {
    func(12, 4);
}

calculation(sum);
calculation(sub);
calculation(multiply);






// function handler() {
//     console.log('привет');
// }
// setInterval(handler,100); // вызывается каждые 100 милисекунд

// // либо
// setInterval(function() {
//     console.log('привет');
// }, 100)




// используя метод map сформировать массив который состоит из цен продуктов

const result = products.map(function (product) {
    return product.price
})
console.log(result);


// используя метод map сформировать массив из объектов со свойствами title, price
const result2 = products.map(function (item) {
    const newProduct = {
        title: item.title,
        price: item.price
    }
    return newProduct
})
console.log(result2);