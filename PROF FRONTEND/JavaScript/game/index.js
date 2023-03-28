// model

const store = {
    correctAnswer: Math.floor(1 + Math.random() * 100),
    selectedNumber: null,
    possibleAnswers: [],
}

const generateThreeRandomAnswers = () => {
    for (let i = 0; i < 3; i++) {
        store.possibleAnswers.push(Math.floor(1 + Math.random() * 100));
    }
}
const checkAnswer = () => store.selectedNumber === store.correctAnswer;

const selectNumber = (num) => {
    store.selectedNumber = num ;
}

// View

const draw = () => {
    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = "Я загадал случайное число от 1 до 100.";
  

  const options = document.createElement("div");
  options.classList.add("options");
for (let i = 0; i < 3; i++){
    const option = document.createElement('div');
    option.classList.add('option');
    option.innerHTML = store.possibleAnswers[i];
    options.append(option);
}
 
const corectOption = document.createElement('div');
corectOption.classList.add('option');
corectOption.innerHTML = store.correctAnswer;
options.append(corectOption);

const correctOption = document.createElement("div")
corectOption.className = "option"
correctOption.innerHTML = store.correctAnswer
options.append(corectOption);

container.replaceChildren()
container.append(title, options)
}
draw()




// Controller




