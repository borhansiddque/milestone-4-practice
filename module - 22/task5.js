function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// Example usage:
let outputRandomNumber = getRandomNumber(10, 20);
console.log(outputRandomNumber);

// Math.floor rounds the number down to the nearest whole number
// Math.random generates a random number between 0 and 1
// (max - min + 1) is used to ensure that the random number generated is within the specified range
// + min is used to shift the random number to the desired range
