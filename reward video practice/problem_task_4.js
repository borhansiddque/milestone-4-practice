var friends = ["rahim", "karim", "abdddddddddddadul", "sadsd", "heroAlom"];
let bigFriend = friends[0]; 

for(let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element.length > bigFriend.length) {
        bigFriend = element;
    }
}

console.log(bigFriend);
