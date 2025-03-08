// object
/*
    - object is a collection of properties
    - properties are key-value pairs
    - keys are strings
    - values can be any data type
*/
const person = {
    name: 'John',
    age: 20,
    city: 'New York'
}

console.log(person);

// object methods
console.log(person.name);
console.log(person.age);
console.log(person.city);

// add a new property
person.job = 'Developer';
person['gender'] = 'Male';
console.log(person);

// change a property value
person.age = 21;
console.log(person);

// delete a property
delete person.job;
console.log(person);

// check if a property exists
console.log(!!person.job);

// object to array
const personArray = Object.entries(person);
console.log(personArray);

// array to object
const personObject = Object.fromEntries(personArray);
console.log(personObject);

// object to array of keys
const personArray2 = Object.keys(person);
console.log(personArray2);

// object to array of values
const personArray3 = Object.values(person);
console.log(personArray3);




