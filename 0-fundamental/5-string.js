const name = 'John';
const age = 20;
const city = 'New York';

const sentence = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;

console.log(sentence);

// string methods
console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// replace
console.log(sentence.replace('New York', 'Los Angeles'));

// includes
console.log(city.includes('York'));


// startsWith
console.log(city.startsWith('New'));

// endsWith
console.log(city.endsWith('York'));

//substring
console.log(city.substring(0, 3));

//string to array
const numbers = '1,2,3,4,5';
const numbersArray = numbers.split(',');
console.log(numbersArray);

//array to string
const numbersString = numbersArray.join(',');
console.log(numbersString);

//string to number
const number = parseInt(numbersString);
console.log(number);

//number to string
const numberString = number.toString();
console.log(numberString);

//string to float
const float = parseFloat(numbersString);
console.log(float);

//float to string
const floatString = float.toString();
console.log(floatString);

//string to boolean
const boolean = Boolean(numbersString);
console.log(boolean);

//boolean to string
const booleanString = boolean.toString();
console.log(booleanString);
