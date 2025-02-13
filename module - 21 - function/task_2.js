// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function multiplyOrDivide(num) {
    if(num % 2 === 0) {
        const result = num / 2;
        return result;
    } else {
        const result = num * 2;
        return result;
    }
}

const result = multiplyOrDivide(8);
console.log(result);
