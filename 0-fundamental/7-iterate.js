//looping is a process of iterating over a collection of data

let products = [
    { name: 'laptop', price: 1000 },
    { name: 'mouse', price: 100 },
    { name: 'keyboard', price: 200 },
    { name: 'monitor', price: 300 },
] //array of objects

//for loop
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}


//for of loop
for (let product of products) {
    console.log(product);
}

//forEach loop
products.forEach(product => {
    console.log(product);
})


//for in loop
for (let index in products) {
    console.log(index, products[index]);
}

//map loop
const productNames = products.map(product => product.name);
console.log(productNames);


//filter loop
const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts);


//reduce loop
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);    


//find loop
const foundProduct = products.find(product => product.name === 'mouse');
console.log(foundProduct);


//findIndex loop
const foundProductIndex = products.findIndex(product => product.name === 'mouse');
console.log(foundProductIndex);


//sort loop
const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log(sortedProducts);



























