const myScore = 80;
const friendScore = 39;

if (myScore >= 80) {
    if (friendScore >= 80) {
        console.log("Go for a Lunch");
    } else if (friendScore < 80 && friendScore >= 60) {
        console.log("Good luck for next time");
    } else if (friendScore < 60 && friendScore >= 40) {
        console.log("keep your friend's message unseen");
    } else  {
        console.log("Block your friend");
    }
} else {
    console.log("Go to home and sleep and act sad");
}