function generatePassword(length) {
    // String containing all possible characters
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    // Loop to pick characters one by one
    for (let i = 0; i < length; i++) {
        // Generate a random index based on charset length
        let randomIndex = Math.floor(Math.random() * charset.length);

        // Add the character at that index to password string
        password += charset.charAt(randomIndex);
    }

    return password;
}

//Execution
console.log("Password: " + generatePassword(8));