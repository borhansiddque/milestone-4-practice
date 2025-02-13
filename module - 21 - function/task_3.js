// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size;
}

const arr = [10, 20, 50, 120];
const size = arr.length;
const result = make_avg(arr, size);
console.log(result); 
