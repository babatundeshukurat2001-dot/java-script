let prompt = require("prompt-sync")();
let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    let correctUser = "opeyemi";
    let correctPass = "2345";

    if (username == correctUser && password == correctPass) {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }

