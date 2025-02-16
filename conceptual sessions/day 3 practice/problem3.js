function sendProposal(heroBio, patriBio) {
    if(typeof heroBio === "object" && typeof patriBio === "object" && !Array.isArray(heroBio) && !Array.isArray(patriBio)) {
        if(heroBio.district === patriBio.district) {
            return "Proposal Sent";
        } else {
            return "District didn't match"; 
        }
    } else {
        return "Please provide valid data";
    }
}

const heroBioData = {
    name: "Superman",
    age: 69,
    district: "Dhaka",
    fatherName: "Jor-El",
    email: "superman@gmail.com"
};

const henaBioData = {
    name: "Hena",
    age: 20,
    district: "Dhaka",
    fatherName: "Josim",
    email: "josimermeye@gmail.com"
};

const proposal =  sendProposal(heroBioData, henaBioData);
console.log(proposal);




