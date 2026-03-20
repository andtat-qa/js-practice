function delayedLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Execution
Promise.resolve(console.log("Process started..."))
    .then(() => delayedLog("Hello, world!", 2000));