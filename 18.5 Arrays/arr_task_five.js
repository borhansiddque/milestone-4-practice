/** 
 * 5. Combining Arrays
        Instructions:
        5.1 Create two arrays of your choice.
        5.2 Use the concat method to combine the two arrays into a new array.
        5.3 Print both the original arrays and the combined array using console.log().
*/

let marvelHeroes = ["Iron Man", "Hulk", "Thor", "SpiderMan"];
let dcHeroes = ["Superman", "Batman", "AquaMan", "Flash"];

let allHeroes = marvelHeroes.concat(dcHeroes);

console.log("Marvel Heroes - " + marvelHeroes);
console.log("DC Heroes - " + dcHeroes);
console.log("There is All Marvel and DC Heroes - " + allHeroes);
