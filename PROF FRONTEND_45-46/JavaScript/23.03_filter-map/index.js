const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultArray = array.filter( (el) => el % 2 === 0);
console.log(resultArray);


const newArr = resultArray.map( (el) => el ** 2)
console.log(newArr);