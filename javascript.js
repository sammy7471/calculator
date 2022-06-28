// javascript

function add(numbers) {
    const sum = numbers.reduce((total, item) => {
        return total + item;
    },0);
    return sum;
}

function subtract(numbers) {
    const sub = numbers.reduce((total, item) => {
        return total - item;
    });
    return sub;
}

function multiply(numbers) {
    const mult = numbers.reduce((total, item) => {
        return total * item;
    },1);
    return mult;
}

function divide(numbers) {
    const divide = numbers.reduce((total, item) => {
        return total / item;
    });
    return divide;
}

function operate() {
}