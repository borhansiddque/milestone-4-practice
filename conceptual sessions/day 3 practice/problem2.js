function findHWord(balikas) {
    let hWordIncludesMeye = [];
    for(const balika of balikas) {
        if(balika.includes("h") || balika.includes("H")) {
            hWordIncludesMeye.push(balika);
        }
    }
    return hWordIncludesMeye;
}

const arrayOfBiyerMeye = ["Moni", "Mitu", "Noha", "Nipa", "Halima", "Nusrat", "Humaira", "Mahi"];
const findBiyerMeye = findHWord(arrayOfBiyerMeye);
console.log(findBiyerMeye);
