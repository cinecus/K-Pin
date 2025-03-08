const name = "John"; // string
const age = 20; // number
const isStudent = true; // boolean
const balance = 1000.5; // number
const fruits = ["apple", "banana", "cherry"]; // array

const person = {
    name: "John",
    age: 20,
    isStudent: true,
    balance: 1000.5,
    fruits: ["apple", "banana", "cherry"]
} // object

const setOfFruits = new Set(["apple", "banana", "cherry"]); // set

const mapOfFruits = new Map([
    ["apple", 1],
    ["banana", 2],
    ["cherry", 3]
]); // map

const date = new Date(); // date

const regex = /apple/i; // regex

const error = new Error("This is an error"); // error

const calculateTotal = (price, quantity) => {
    return price * quantity;
} // function

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 1000);
}); // promise

// undefined
let undefinedVar;

// null 
const nullVar = null;

// symbol
const symbolVar = Symbol('mySymbol');

// bigint
const bigIntVar = BigInt(9007199254740991);

// NaN (Not a Number)
const notANumber = NaN;

// Infinity
const infinityNum = Infinity;



module.exports = { name, age, isStudent, balance, fruits, person, calculateTotal, promise, undefinedVar, nullVar, symbolVar, bigIntVar, notANumber, infinityNum };


