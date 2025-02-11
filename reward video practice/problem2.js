// Problem 2:
// Given an array of products, each with a category, separate them into two arrays : one for electronics and one for clothing. Store the result in an object.

// input:
// const products = [
//     {name: "Shirt", category: "Clothing"},
//     {name: "Laptop", category: "Electronics"},
//     {name: "T-Shirt", category: "Clothing"},
//     {name: "Headphones", category: "Electronics"},
//     {name: "Jeans", category: "Clothing"},
// ];

// output:
// {
//     electronics: ["Laptop", "Headphones"],
//     clothing: ["T-Shirt", "Jeans"]
// }


const products = [
    {name: "Shirt", category: "Clothing"},
    {name: "Laptop", category: "Electronics"},
    {name: "T-Shirt", category: "Clothing"},
    {name: "Headphones", category: "Electronics"},
    {name: "Jeans", category: "Clothing"},
];

for(let i = 0; i < products.length; i++) {
    const singleProduct = products[i];
    console.log(singleProduct);
    
}
