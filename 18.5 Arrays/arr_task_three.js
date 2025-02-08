/** 
 * 3. Checking Array Membership with ‘includes’
        Instructions:
        3.1 Create an array of books containing different book.
        3.2 Use the includes method to check if the array contains a javascript book.
        3.3 Print a message to the console indicating whether the element is present in the array or not.
*/

// 3.1
let books = ["JavaScript Book", "Python Book", "HTML Book", "CSS Book"];

// 3.2
let jsBook = books.includes("JavaScript Book");
console.log(jsBook);

// 3.3
console.log("In the books array the Javascript book is present - " + jsBook + " - There is the js book from books array - " + books[0]);
