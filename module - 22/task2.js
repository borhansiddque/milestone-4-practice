/**
    You are given an array of numbers. Count how many times the a number is repeated in the array.

    sample-input: numbers = [5,6,11,12,98, 5]

    find: 5

    output: 2


    sample-input:

    numbers = [5,6,11,12,98, 5]

    find: 25

    output: 0
*/

function countNumber(numbers, find) {
    let count = 0;
    for(let sum of numbers) {
        if(sum === find) {
            count++;
        }
    }
}

// Example Usage:
let numbers1 = [5, 6, 11, 12, 98, 5, 5];
let receivedOutput = countNumber(numbers1, 5);
console.log(receivedOutput); // 3
