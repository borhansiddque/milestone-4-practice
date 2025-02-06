const ticketFare = 800;
const age = 20;
const ifStudent = false;

if (age <= 10) {
    console.log("Free");
} else if (ifStudent) {
    // 50% Discount
    const discount = ticketFare / 2;
    const ticketPrice = ticketFare - discount;
    console.log("Your Ticket Price is " + ticketPrice);
} else if (age >= 60) {
    // 15% Discount
    const discount = ticketFare * 15 / 100;
    const ticketPrice = ticketFare - discount;
    console.log("Your Ticket Price is " + ticketPrice);
} else {
    console.log(ticketFare);
}