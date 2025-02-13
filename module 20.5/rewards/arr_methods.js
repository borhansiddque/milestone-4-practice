let numbers = [2, 3, 4, 5, 6, 7, 8];
// numbers.push(4); // changing the original array
// numbers.unshift(0); // changing the original array
// numbers.pop(); // changing the original array
// numbers.shift(); // changing the original array
// numbers.splice(1, 3, 10); // which index to start, how many to remove, what to add -- changing the original array
// const sliceNumber = numbers.slice(0, 3); // which index to start, which index before end -- not changing the original array
// console.log(sliceNumber);
// console.log(numbers);



let words = ["Hello", "World", "I", "am", "learning", "JavaScript"];
let sentence = words.join(" "); // not changing the original array
// console.log(words);
// console.log(typeof sentence);
// console.log(sentence);



// let numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// console.log(numbers2.indexOf(80));



// let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
// console.log(fruits.includes("Mango")); // true
// console.log(fruits.includes("Grapes")); // false -- not find in the array



// let str = "Hello JavaScript";
// let strToArr = Array.from(str);
// console.log(strToArr);



let fruits2 = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
let helloText = "Hello JavaScript";
console.log(typeof fruits2);
console.log(Array.isArray(fruits2)); // true
console.log(Array.isArray(helloText)); // false




let sentence2 = "I am learning JavaScript";
let words2 = sentence2.split(" "); // not changing the original array
console.log(sentence2);
console.log(words2);
