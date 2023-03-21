//model

const state = {
    entities: [], //используем, если много обьектов данных
    entity: {}, // используем, если один обьект данных
    viewModel: {}, //записываем свойства, котрые мы сами внутри нащшего кода контролируем
}

//view

const calculateElements = (localState) => {
    //вычисляем, что мы отрисовываем исходя из нашего состояния
    return [];
};

const render = (localState, root) => {
    const elements = calculateElements(localState);  // вычисляем, что мы рисуем, записываем в переменную elements
    root.replaceChildren();
    root.append(...elements);
}

//controller

const getActions = (localState, root) => ({
    start: () => {
        render(localState, root);
    },
})

const root = document.querySelector('#root');
const actions = getActions(state, root);
actions.start();



entities: [
    "https://fastly.picsum.photos/id/282/200/300.jpg?hmac=CVnHWoW4uSir_3zYiJzNPVs8XMSyf968WjkWvPlwu3g",
    "https://fastly.picsum.photos/id/663/200/300.jpg?hmac=OYPBwsRmaygvAiTN0M4ZNNWBZqgbTGuH2aXkJ4FLX_M",
    "https://fastly.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0",
    "https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE",
    "https://fastly.picsum.photos/id/841/200/300.jpg?hmac=G9hBg_h2jvXDwBgnqCm8LO9PXRrPRWbz1xgdUrMf1Y8",
  ]