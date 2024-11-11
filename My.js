const getInput = document.querySelector(".form__input");
const getButton = document.querySelector(".form__btn");
const getMainList = document.querySelector(".js--todos-wrapper");
const getLists = document.querySelectorAll(`.todo-item`)


function addItem(inputValue) {
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
    createDeleteButton.addEventListener(`click`, function (event) {
        getMainList.removeChild(createEl);

    });
    createRadio.addEventListener(`click`, function (e) {
        createSpan.classList.toggle(`todo-item--checked`);
        createDeleteButton.classList.toggle(`todo-item--checked`)

    });

}


getButton.addEventListener(`click`, function (event) {
    let inputValue = getInput.value.trim();
    if (inputValue) {
        addItem(inputValue);
        getInput.value = "";
    }

})


/*
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