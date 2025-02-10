// Count how many times a string has the letter

const sentence = "Count how many times a string has the letter a";

const countA = sentence.split("a").length - 1;
console.log("The letter 'a' appears", countA, "times.");