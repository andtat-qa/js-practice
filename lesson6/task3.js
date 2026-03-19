// Function with another function
function createCounter() {
  let count = 0; // Private variable

  return function() {
    count += 1;
    return count;
  };
}

// Initialize counter
const counter = createCounter();

//Output
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3