// Create an array
const numbers = [10, -5, 0, 7, -22, 0, 17, -3, 8, 3];

//Counters for each category
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

//Use a loop to go through the array and start counting
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

//Result
console.log("Positive Numbers: " + positiveCount);
console.log("Negative Numbers: " + negativeCount);
console.log("0 Numbers: " + zeroCount);