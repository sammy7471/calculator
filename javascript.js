// javascript

function add(num1, num2) {
    let result = parseInt(num1) + parseInt(num2);
    return result;
}

function subtract(num1, num2) {
    let result = parseInt(num1) - parseInt(num2);
    return result;
}

function multiply(num1, num2) {
    let result = parseInt(num1) * parseInt(num2);
    return result;
}

function divide(num1, num2) {
    let result = parseInt(num1) / parseInt(num2);
    return result;
}

const displayArea = document.querySelector("#display");
const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const deletes = document.querySelector(".delete");
const clear = document.querySelector(".clear");

function operate(num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;    
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;    
        default:
            break;
    }
    return result;
}

let num1 = "";
let num2 = "";
let operator = "";
operators.forEach((op) => {
    op.addEventListener("click", (e) => {
        operator = e.target.innerText;
        displayArea.innerText = num1;
        return operator;
    });
});

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (operator === "") {
            num1 += e.target.innerText;
            displayArea.innerText = num1;
        } else {
            num2 += e.target.innerText;
            displayArea.innerText = num2;
        }
    });
});

equal.addEventListener("click", (e) => {
    if (e.target.innerText = "=") {
        displayArea.innerText = num2;
        let result = operate(num1, operator, num2);
        displayArea.innerText = result;
    }
})