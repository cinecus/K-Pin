// function return null
const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

function sayHello2(name) {
    console.log(`Hello ${name}`);
}

// function return a value
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

// function as an argument
const logAnswer = (a, b, fn) => {
    const result = fn(a, b);
    console.log(`The result of ${a} ${fn.name} ${b} is ${result}`);
}

module.exports = { sayHello, add, subtract, logAnswer };