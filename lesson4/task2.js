// Generate a random hour from 0 to 23
let hour = Math.floor(Math.random() * 24);

// Check time of day and print greeting
if (hour >= 0 && hour <= 5) {
    console.log("(Hour " + hour + ")\nGood night!");
} else if (hour >= 6 && hour <= 11) {
    console.log("(Hour " + hour + ")\nGood morning!");
} else if (hour >= 12 && hour <= 17) {
    console.log("(Hour " + hour + ")\nGood day!");
} else {
    console.log("(Hour " + hour + ")\nGood evening!");
}