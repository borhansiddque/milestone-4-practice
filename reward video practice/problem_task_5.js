const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 14];  
let uniqueNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (!uniqueNumbers.includes(element)) {
        uniqueNumbers.push(element);
    }
}

console.log(uniqueNumbers);



