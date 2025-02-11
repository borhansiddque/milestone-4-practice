// const userText = " BorhanSiddque19@gmail.Com ";
// const text = "borhansiddque19@gmail.com";

// if (userText.trim().toLowerCase() === text) {
//     console.log("You Can Sign in - Valid email");
// } else {
//     console.log('Please Stay out');
// }


const fruitItems = ["Apple", "Orange", "Banana", "Water Melon", "Papaya", "Avocado", "Coconut"];

for (let food of fruitItems) {
    if (food === "Water Melon") {
        continue;
    } else if (food === "Avocado") {
        break;
    }
    console.log(food);
}