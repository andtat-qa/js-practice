// Create an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Count using reduce
const totalSum = numbers.reduce((acc, num) => acc + num, 0);

// Output
console.log("Total Sum: " + totalSum);