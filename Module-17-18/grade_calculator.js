const studentScore = 59;

if (studentScore > 100) {
    console.log("Your Score is Not Valid");
} else if (studentScore >= 90 && studentScore <= 100) {
    console.log("You got A");
} else if (studentScore >= 80 && studentScore <= 89) {
    console.log("You got B");
} else if (studentScore >= 70 && studentScore <= 79) {
    console.log("You got C");
} else if (studentScore >= 60 && studentScore <= 69) {
    console.log("You got D");
} else {
    console.log("You are Filed, Please Try Next Time");
}

