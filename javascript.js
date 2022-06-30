// javascript

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}

const operator = document.querySelectorAll(".operator")
function operate(num1, operator, num2) {
    if (operator = "add") {
        console.log(add());
    } else if (operator = "subtract") {
        return subtract();
    } else if (operator = "multiply") {
        return multiply();
    } else if (operator = "divide") {
        return divide();
    }
}


