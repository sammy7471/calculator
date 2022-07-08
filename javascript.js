// javascript

function add(num1, num2) {
    let result = parseFloat(num1) + parseFloat(num2);
    return result;
}

function subtract(num1, num2) {
    let result = parseFloat(num1) - parseFloat(num2);
    return result;
}

function multiply(num1, num2) {
    let result = parseFloat(num1) * parseFloat(num2);
    return result;
}

function divide(num1, num2) {
    let result = parseFloat(num1) / parseFloat(num2);
    return result;
}

const displayArea = document.querySelector("#display");
const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

function operate(num2, operator, num1) {
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
            if (num2 !== 0) {
                result = divide(num1, num2);
            } else {
                result = "error";
            }
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
    op.addEventListener("click", opera); 
});

function opera(e) {
    if (operator !== "") {
        num2 = operate(num1, operator, num2);
        num2 = +parseFloat(num2).toFixed(2);
        updateDisplay(num2);
        num1 = "";
        operator = e.target.innerText;
        return operator;
    } else {
        operator = e.target.innerText;
        num2 = num1;
        num1 = "";
        return operator;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", numb);
});

function numb(e) {
    num1 += e.target.innerText;
    updateDisplay(num1);
}

equal.addEventListener("click", calculate);

function calculate(e) {
    if (e.target.innerText = "=") {
        let result = operate(num1, operator, num2);
        result = +parseFloat(result).toFixed(2);
        updateDisplay(result);
    }
}

clear.addEventListener("click", clearDisplay);

function clearDisplay(e) {
    num1 = "";
    num2 = "";
    operator = "";
    displayArea.innerText = 0;
}

del.addEventListener("click", (e) => {
    if (e.target.innerText = "DEL") {
        num1 = num1.substring(0, num1.length -1);
        updateDisplay(num1);
    }
});

function updateDisplay(displayValue) {
    displayArea.innerText = displayValue;
    return displayArea.innerText;
}

decimal.addEventListener("click", dec);

function dec(e) {
    if (e.target.innerText = ".") {
        if (!num1.includes(".")) {
            updateDisplay(num1 += ".");
        } 
    }
}