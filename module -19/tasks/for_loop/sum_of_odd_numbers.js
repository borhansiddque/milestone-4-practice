/***
    Subtask-1:
    Display sum of all the odd numbers from 91 to 129.

*/

// let sum = 0;

// for (let i = 91; i <= 129; i += 2) {
//     console.log(i);
//     sum += i;
//     console.log("Sum Value: ", sum);
// }

// console.log("Total Sum: ", sum);



/***
    Subtask-2:

    Display sum of all the even numbers from 51 to 85.
*/

let sum = 0;

for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum += i;
        console.log("Sum Even number: ", sum);
    }
}

console.log("Total sum: ", sum);