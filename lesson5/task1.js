// Test Variables
let width = 5;
let height = 10;

// Function Declaration
function getAreaDeclaration(w, h) {
    return w * h;
}

// Function Expression
const getAreaExpression = function(w, h) {
    return w * h;
};

//Arrow Function
const getAreaArrow = (w, h) => w * h;

//Execution
console.log("(Function Declaration)\nArea: " + getAreaDeclaration(width, height));
console.log("(Function Expression)\nArea: " + getAreaExpression(width, height));
console.log("(Arrow Function)\nArea: " + getAreaArrow(width, height));