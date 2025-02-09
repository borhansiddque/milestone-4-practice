/***
    Subtask-1:
    Display sum of all the odd numbers from 91 to 129.

*/

// let oddNumStart = 91;
// let sum = 0;

// while (oddNumStart <= 129) {
//     console.log(oddNumStart);
//     sum += oddNumStart;
//     console.log("Sum: ", sum);
//     oddNumStart += 2;
    
// }

// console.log("Total Odd Numbers Sum: ", sum);



/***
    Subtask-2:
    Display sum of all the even numbers from 51 to 85.
*/

let evenNumber = 206;
let sum = 0;

while (evenNumber <= 311) {
    if (evenNumber % 2 === 0) {
        console.log("EvenNumber: ", evenNumber);
        sum += evenNumber;
        console.log("Sum: ", sum);
    }
    evenNumber++;
}

console.log("206 to 311 all even numbers sum: ", sum);
