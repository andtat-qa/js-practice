const calculator = {
    lastResult: null,
    operationsCount: 0,

    // Updates the state after each calculation
    _update(result) {
        this.lastResult = result;
        this.operationsCount++;
        return result;
    },

    add(a, b) {
        return this._update(a + b);
    },

    subtract(a, b) {
        return this._update(a - b);
    },

    multiply(a, b) {
        return this._update(a * b);
    },

    divide(a, b) {
        // Check for division by zero
        if (b === 0) {
            this.operationsCount++;
            this.lastResult = "Error: Division by zero!";
            return this.lastResult;
        }
        return this._update(a / b);
    },

    // Resets the calculator to its initial state
    reset() {
        this.lastResult = null;
        this.operationsCount = 0;
    }
};

// Testing the calculator
console.log("Add:", calculator.add(5, 2)); // 7
console.log("Divide:", calculator.divide(10, 2)); // 5
console.log("Current Count:", calculator.operationsCount); // 2
console.log("Last Result:", calculator.lastResult); // 5