const getInput = document.querySelector(".form__input");
const getButton = document.querySelector(".form__btn");
const getMainList = document.querySelector(".js--todos-wrapper");
const getLists = document.querySelectorAll(`.todo-item`)


function addItem(inputValue, isChecked = false) {
    let createEl = document.createElement("li");
    createEl.classList.add(`todo-item`)
    let createSpan = document.createElement("span");
    let createRadio = document.createElement("input")
    let createDeleteButton = document.createElement("button")
    createDeleteButton.textContent = "Видалити"
    createDeleteButton.classList.add(`todo-item__delete`)
    createRadio.setAttribute("type", "checkbox");
    createRadio.checked = isChecked;
    createEl.appendChild(createRadio);
    createEl.appendChild(createSpan);
    createEl.appendChild(createDeleteButton)
    getMainList.appendChild(createEl)
    createSpan.textContent = inputValue;
    createSpan.classList.add(`todo-item__description`)
    createDeleteButton.addEventListener(`click`, function (event) {
        getMainList.removeChild(createEl);
        saveToLocalStorage()
    });
    createRadio.addEventListener(`click`, function (e) {
        createSpan.classList.toggle(`todo-item--checked`);
        createDeleteButton.classList.toggle(`todo-item--checked`)
        saveToLocalStorage()
    });
}

function saveToLocalStorage() {
    const lists = document.querySelectorAll(`.todo-item`);
    const array = [];
    lists.forEach(item => {
        const span = item.querySelector(`.todo-item__description`).textContent;
        const input = item.querySelector(`input[type="checkbox"]`).checked;
        array.push({name: span, isChecked: input})
    })
    localStorage.setItem("todos", JSON.stringify(array));
}
window.addEventListener(`load`,loadFromLocalStorage);

function loadFromLocalStorage() {
    getMainList.innerHTML = '';
    const getArray = localStorage.getItem(`todos`);
    if(getArray){
        const arrayParse = JSON.parse(getArray);
        arrayParse.forEach(item =>{
            addItem(item.name, item.isChecked)
        })
    }
}

getButton.addEventListener(`click`, function (event) {
    let inputValue = getInput.value.trim();
    if (inputValue) {
        addItem(inputValue);
        getInput.value = "";
    }

})


/*
 const todosFromLS = localStorage.getItem('todos');
    localStorage.setItem(
        'users',
        todosFromLS
            ? JSON.stringify([...JSON.parse(todosFromLS), { name: inputValue || 'Unknown user', uuid: uuid, isChecked: false }])
            : JSON.stringify([{name: inputValue || 'Unknown user', uuid: uuid, isChecked: false }])
    );
getButton.addEventListener("click", function (event) {
    let inputValue = getInput.value.trim();
    if (inputValue) {
        let createEl = document.createElement("li");
        createEl.classList.add(`todo-item`)
        let createSpan = document.createElement("span");
        let createRadio = document.createElement("input")
        let createDeleteButton = document.createElement("button")
        createDeleteButton.textContent = "Видалити"
        createDeleteButton.classList.add(`todo-item__delete`)
        createRadio.setAttribute("type", "checkbox");
        createEl.appendChild(createRadio);
        createEl.appendChild(createSpan);
        createEl.appendChild(createDeleteButton)
        getMainList.appendChild(createEl)
        createSpan.textContent = inputValue;
        createSpan.classList.add(`todo-item__description`)
        getInput.value = "";
        createDeleteButton.addEventListener(`click`, function (event) {
            getMainList.removeChild(createEl);
        })
        createRadio.addEventListener(`click`, function (e) {
            createSpan.classList.toggle(`todo-item--checked`);
            createDeleteButton.classList.toggle(`todo-item--checked`)
        })
    }
})

 */