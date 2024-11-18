"use strict"

class Calculator {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    plus() {
        return this.first + this.second;
    }

    minus() {
        return this.first - this.second;
    }

    multiply() {
        if (this.first === 0 || this.second === 0) {
            return 0
        } else {
            return this.first * this.second;
        }
    }

    divide() {
        if (this.second === 0) {
            console.log("Не можно ділити на 0!")
        } else {
            return this.first / this.second;
        }
    }


}

const result = new Calculator(22, 33);
console.log(result.divide());
console.log(result.minus());
console.log(result.multiply());
console.log(result.plus());


class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    displayInfo() {
        console.log(`${this.name},${this.specialization},${this.rating}`)
    }
}

const firstCoach = new Coach("Anna", "Yoga", 4.5);
firstCoach.displayInfo();

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    withDrawMoney(take) {
        if (this.balance <= 0) {
            console.log("Не мае коштів!")
        } else {
            this.balance -= take;
            return this.balance
        }
    }

    accountDeposit(put) {
        this.balance += put;
        return this.balance;
    }

    getAccountBalance() {
        return this.balance;
    }
}

class Wallet {
    // Конструктор, принимающий начальный баланс
    constructor(initialBalance = 0) {
        this.balance = initialBalance; // Текущий баланс
        this.#transactionHistory = []; // Приватное свойство для хранения истории транзакций
    }

    // Приватное свойство для хранения истории транзакций
    #transactionHistory;

    // Метод для добавления средств
    addFunds(amount) {
        if (amount <= 0) {
            console.log("Сумма пополнения должна быть положительной");
            return;
        }
        this.balance += amount;
        this.#addTransaction("add", amount); // Добавляем запись в историю транзакций
        console.log(`Пополнено: ${amount} | Баланс: ${this.balance}`);
    }

    // Метод для снятия средств
    withdrawFunds(amount) {
        if (amount <= 0) {
            console.log("Сумма снятия должна быть положительной");
            return;
        }
        if (amount > this.balance) {
            console.log("Недостаточно средств");
            return;
        }
        this.balance -= amount;
        this.#addTransaction("withdraw", amount); // Добавляем запись в историю транзакций
        console.log(`Снято: ${amount} | Баланс: ${this.balance}`);
    }

    // Метод для проверки текущего баланса
    checkBalance() {
        return this.balance;
    }

    // Метод для получения истории транзакций
    getTransactionHistory() {
        return this.#transactionHistory;
    }

    // Приватный метод для добавления транзакции в историю
    #addTransaction(type, amount) {
        this.#transactionHistory.push({type, amount});
    }
}

// Пример использования
const myWallet = new Wallet(100); // Создаем кошелёк с балансом 100
myWallet.addFunds(50);            // Пополняем на 50
myWallet.withdrawFunds(30);       // Снимаем 30
myWallet.withdrawFunds(200);      // Пытаемся снять 200 (недостаточно средств)
console.log(`Текущий баланс: ${myWallet.checkBalance()}`); // Текущий баланс
console.log(myWallet.getTransactionHistory());

// [{ type: 'add', amount: 50 }, { type: 'withdraw', amount: 30 }]
class Transport {
    constructor(speed) {
        this.speed = 0;
    }

    start() {
        this.speed = 20;

    }

    stop() {
        this.speed = 0;

    }
}

class Car extends Transport {
    constructor(speed) {
        super(speed);
        this.fuel = 100;
    }

    drive() {
        this.fuel = this.fuel - 10;
        this.speed = this.speed + 20;
    }
}

class Bicycle extends Transport {
    constructor(speed,car) {
        super(speed);
        this.gear = 1;
        this.car = Car

    }

    pedal() {
        this.speed = 5;
    }
}

const car = new Car();
car.drive();
console.log(car.speed);
console.log(car.fuel);
const bicycle = new Bicycle();
bicycle.pedal();
console.log(bicycle.speed);

function addNumber (number){
    let num = number;
    function plus (){
        return ++num;
    }
    return plus
}

let result2 = addNumber(2);
console.log(result2())
let result3 = addNumber(2);
let result4 = addNumber(2);
console.log(result2())
let result5 = addNumber(2);
let resul6 = addNumber(2);
console.log(result2())



/*
function Students(name, surname, birthday, grades) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.grades = grades;
    this.addGrades = function (){

    }
    Object.defineProperty(this, "age", {
        get() {
            const day = new Date().getFullYear();
            return day - this.birthday.getFullYear();
        }
    })
    Object.defineProperty(this, "FullName", {
        get() {
            return `${this.name} ${this.surname}`
        }
    })

}

 */

/*
function Student(name, birthday, grades) {
    this.name = name;
    this.birthday = birthday;
    this.grades = grades
    this.attendance = new Array(25).fill(undefined)

    Object.defineProperty(this, "age", {
        get() {
            const date = new Date().getFullYear();
            return date - this.birthday.getFullYear();
        }
    });
    Object.defineProperty(this, "grade", {
        get() {
            const total = this.grades.reduce((prev, current) => prev + current, 0);
            return total / this.grades.length;
        }
    });
    this.present = function () {
        let lackMarks = this.attendance.indexOf(undefined);
        if (lackMarks !== -1) {
            this.attendance[lackMarks] = true;
        } else {
            console.log("Limit exceeded")
        }
    }
    this.absent = function () {
        let lackMarks = this.attendance.indexOf(undefined);
        if (lackMarks !== -1) {
            this.attendance[lackMarks] = false;
        } else {
            console.log("Limit exceeded")
        }
    }
    const averageGrades = this.grades.reduce((prev, current) => prev + current, 0) / this.grades.length;
    this.summary = function () {
        const array = this.attendance.filter((item) => item === true).length;
        const average = array / this.attendance.length
        if (averageGrades > 90 && average > 0.9) {
            console.log("Молодец!")
        } else if (averageGrades > 90 && average < 0.9) {
            console.log("Молодец, но можно лучше!")
        } else if (averageGrades < 90 && average < 0.9) {
            console.log("Редиска!")
        }
    }
}

const firstStudent = new Student("Danylo", new Date(2000, 10, 18), [90, 95, 90, 92, 95]);
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.summary();
console.log(firstStudent.age)
console.log(firstStudent.attendance);
console.log(firstStudent)
const secondStudent = new Student("Vasya", new Date(2000, 9, 20), [90, 95, 90, 92, 95, 55, 99, 100, 85]);
secondStudent.absent();
secondStudent.present();
secondStudent.present();
secondStudent.absent();
firstStudent.summary();
console.log(firstStudent.attendance);

 */

/*
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

 */


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