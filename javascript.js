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
const decimal = document.querySelector(".decimal");
const percentage = document.querySelector(".percentage");
displayArea.textContent = 0;

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
        if (operator !== "") {
            num2 = operate(num1, operator, num2);
            displayArea.innerText = num2;
            num1 = "";
            operator = e.target.innerText;
            return operator;
        } else {
            operator = e.target.innerText;
            num2 = num1;
            num1 = "";
            return operator;
        }
    }); 
});

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        num1 += e.target.innerText;
        displayArea.innerText = num1;
    });
});

equal.addEventListener("click", (e) => {
    if (e.target.innerText = "=") {
        let result = operate(num1, operator, num2);
        displayArea.innerText = result;
    }
});

clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    displayArea.innerText = 0;
});

decimal.addEventListener("click", () => {
   
})