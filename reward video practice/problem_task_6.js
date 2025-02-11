var numbers = [1, 3, 4, 5, 6, 10, 7, 8, 100, 50, 110];
let biggestNumber = numbers[0];


for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > biggestNumber) {
        biggestNumber = element;
    }
}

console.log(biggestNumber);

