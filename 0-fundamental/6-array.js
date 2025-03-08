//array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//array methods
console.log(numbers.length);


//array push
numbers.push(6);
console.log(numbers);

//array pop
numbers.pop();
console.log(numbers);

//array shift
numbers.shift();
console.log(numbers);

//array unshift
numbers.unshift(0);
console.log(numbers);

//array slice
console.log(numbers.slice(2, 4));

//array map
const newNumbers = numbers.map(number => number * 2);
console.log(newNumbers);

//array filter
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

//array reduce
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);

//array find
const foundNumber = numbers.find(number => number === 3);
console.log(foundNumber);

//array findIndex
const foundIndex = numbers.findIndex(number => number === 3);
console.log(foundIndex);

//array sort
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

//array reverse
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);

//array to string
const numbersString = numbers.join(',');
console.log(numbersString);

//string to array
const numbersArray = numbersString.split(',');
console.log(numbersArray);

//array forEach
numbers.forEach(number => console.log(number));



