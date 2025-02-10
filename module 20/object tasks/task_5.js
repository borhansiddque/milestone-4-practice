// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Dhaka City',
    isStudent: true
};

for(const prop in myObject) {
    console.log(prop, ":", myObject[prop], "|", "type: ", typeof myObject[prop]);
}


console.log("Another One:");


const user = {
    name: "Monir khan",
    age: 30,
    profession: "Programmer",
    salary: 10000,
    haveCar: true,
}

for(let key in user) {
    console.log(key, ":", user[key], "|", "Type: ", typeof user[key]);
}
