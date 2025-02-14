// Write a function to count the number of vowels in a string.

function vowelsCount(str) {
    let vowelsList = "aeiouAEIOU";
    let count = 0;
    for(let char of str) {
        if(vowelsList.includes(char)) {
            count++
        }
    }
    return count;
}

const str = "Borhan Siddque";
const result = vowelsCount(str);
console.log(result);
