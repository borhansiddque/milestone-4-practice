// =============== Push() & Pop() =================
let foodItems = ["Potato", "Tomato", "Apple", "Banana", "Orange"];
// console.log(foodItems);

// foodItems.push("Litchi");
// console.log(foodItems);

// foodItems.push("Mango", "WaterMelon");
// console.log(foodItems);

// foodItems.pop();
// console.log(foodItems);

// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("Deleted Item", deletedItem);


// =============== toString =================
// let num = [10, 20, 30, 40, 50, 60, 70];

// console.log(num);
// console.log(num.toString());


// =============== Concat =================
let marvelHeroes = ["Thor", "SpiderMan", "IronMan"];
let dcHeroes = ["SuperMan", "BatMan"];
let bangladeshiHeroes = ["Hero Alom", "Sakib Khan", "Opu Bhai"];

// let allHeroes =  marvelHeroes.concat(dcHeroes, bangladeshiHeroes);
// let allHeroes = dcHeroes.concat(bangladeshiHeroes, marvelHeroes);

// console.log(allHeroes);


// =============== shift() & unshift() =================
// foodItems.unshift("Grape", "Pineapple");
// console.log(foodItems);

// foodItems.shift();
// console.log(foodItems);


// =============== slice() & splice() =================
// --------------- slice()
// let banglaFavHero =  bangladeshiHeroes.slice(0, 1);
// let banglaFavHero =  bangladeshiHeroes.slice(1);
// console.log(banglaFavHero);

// --------------- splice() (Change original array)
let arr = [60, 70, 80, 90, 100];

// let arrChange = arr.splice(2, 2, 75, 85, 95); // (index value where to delete start, how many item delete, add new items)
// console.log(arr);

// Add Element
// arr.splice(2, 0, 75);
// arr.splice(4, 0, 85);

// Remove Element 
// arr.splice(0, 1);
// console.log(arr);

// Replace Element
arr.splice(0, 1, 65);
console.log(arr);



