//model
const state = {
    entities : [], // используем если много обьектов данных
    entity : {}, // используем если один обьект данных
    viewModel : {}, // хаписываем свойства которые мы сами внутри нашего кода контролируем
}


//view
const render = (localState, root) => {
    root.replaceChildren(); 
    // вычисляем, что мы рисуем, записываем в переменную elements 
    root.append(...elements);
}

//controller
const getActions = (localStorage, root) => ({
    start : ()=>{
        render(localState, root);
    },
})
const actions = getActions(state, root);

actions.start();

