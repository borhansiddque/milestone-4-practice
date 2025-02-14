// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function findLongWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const str = "I am learning Programming to become a programmer";
const str2 = "The extraordinary discoveries in quantum physics have revolutionized modern technology.";
// const result = findLongWord(str);
const result2 = findLongWord(str2);
console.log(result2);
