// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.

function odd_even(num) {
    if(num % 2 === 0) {
        console.log(num);
        return "Even";
    } else {
        console.log(num);
        return "Odd";
    }
}

console.log(odd_even(5)); // Odd
console.log(odd_even(10)); // Even
console.log(odd_even(15)); // Odd