// просмотреть все элементы массива через цикл
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) { 
    const container = document.createElement('div'); // создали элемент и присвоили ее к переменной
    const wrapper = document.querySelector('body');
    wrapper.append(container);
    container.innerText = arr[i];
    container.style.color = "green";
    container.addEventListener('click', function(){ // отслеживаем событие
        container.style.color = "red";
        console.log(arr[i]);
    })

    console.log(arr[i]);
}