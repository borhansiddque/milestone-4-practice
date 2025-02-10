// Use Loop
const text = "Banana Apple Avocado";
let countA = 0;

for (let char of text) {
  if (char.toLowerCase() === "a") {
    countA++;
  }
}

console.log("The letter 'a' or 'A' appears", countA, "times.");