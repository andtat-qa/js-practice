// Main function
function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

// Callback for even numbers
const handleEven = () => console.log("Number is even");

// Callback for odd numbers
const handleOdd = () => console.log("Number is odd");

//Random Number
let number = Math.floor(Math.random() * 10) + 1;
console.log(number);

//Execution
handleNum(number, handleEven, handleOdd);