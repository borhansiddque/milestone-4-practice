// Problem 1:
// Given an array of product names, remove duplicates while preserving the original order. Use a loop to achieve this without defining a function.
// Example input:
// ["Laptop","Monitor", "Phone", "Mobile", "Laptop", "Tablet", "Phone", "Mobile", "Monitor"];

// Example output:
// ["Laptop","Monitor", "Phone", "Mobile","Tablet"]


const products = ["Laptop","Monitor", "Phone", "Mobile", "Laptop", "Tablet", "Phone", "Mobile", "Monitor"];
let uniqueProducts = [];
for(let i = 0; i < products.length; i++) {
    const element = products[i];
    if (!uniqueProducts.includes(element)) { 
        uniqueProducts.push(element);
    }
}
console.log(uniqueProducts);

// এখানে uniqueProducts.includes(element) মানে হলো যদি uniqueProducts এর ভিতর element item টা থাকে uniqueProducts.push(element);
// কিন্তু
// !uniqueProducts.includes(element) মানে হলো uniqueProducts এর ভিতর element item টা না থাকে তাহলে uniqueProducts.push(element);




const fruitItems = ["Apple","Water Melon", "Coconut", "Banana", "Papaya", "Apple", "Coconut", "Water Melon"];

const favFruits = [];

for(let i = 0; i < fruitItems.length; i++) {
    const fruit = fruitItems[i];
    if(!favFruits.includes(fruit)) {
        favFruits.push(fruit);
    }
}

console.log(favFruits);
