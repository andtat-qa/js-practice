// Test Data
const availableGoods = 10;
const orderedGoods = Math.floor(Math.random() * 16); // Range 0-15

//Check Order
function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don't have enough goods.";
    } else {
        return "Your order is accepted";
    }
}

//Execution
console.log("(Available: " + availableGoods + ", Ordered: " + orderedGoods + ")");
console.log("Status: " + checkOrder(availableGoods, orderedGoods));