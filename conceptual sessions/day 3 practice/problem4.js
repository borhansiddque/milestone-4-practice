
function removeDuplicate(BasicDawatList) {
    let newDawatList = [];
    for(const relative of BasicDawatList) {
       let isUnique = true;
       for(const newDawat of newDawatList) {
            if(relative.name === newDawat.name && relative.member === newDawat.member) {
                isUnique = false;
                break;
            }
        }
        if(isUnique) {
            newDawatList.push(relative);
        }
    }
    return newDawatList;
    
}

const relatives = [
    {name: "Alice", member: 1,},
    {name: "Bob", member: 2,},
    {name: "Charlie", member: 3,},
    {name: "Alice", member: 1,},
    {name: "David", member: 4,},
    {name: "Eve", member: 5,},
    {name: "Bob", member: 2,},
    {name: "Frank", member: 6,},
    {name: "Grace", member: 7,},
    {name: "Alice", member: 1,},
];

const totalRelatives = removeDuplicate(relatives);
console.log(totalRelatives);





// let sumOfRelatives = 0;
// for(const relative of relatives) {
//     sumOfRelatives += relative.member;
// }
// console.log(sumOfRelatives);
