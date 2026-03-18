// Generate a random number from 1 to 7
let dayNumber = Math.floor(Math.random() * 7) + 1;

// Check the day number and print the day name
switch (dayNumber) {
    case 1:
        console.log("(Day " + dayNumber + ")\nMonday");
        break;
    case 2:
        console.log("(Day " + dayNumber + ")\nTuesday");
        break;
    case 3:
        console.log("(Day " + dayNumber + ")\nWednesday");
        break;
    case 4:
        console.log("(Day " + dayNumber + ")\nThursday");
        break;
    case 5:
        console.log("(Day " + dayNumber + ")\nFriday");
        break;
    case 6:
        console.log("(Day " + dayNumber + ")\nSaturday");
        break;
    case 7:
        console.log("(Day " + dayNumber + ")\nSunday");
        break;
    default:
        console.log("(Day " + dayNumber + ")\nIncorrect value");
}