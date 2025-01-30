// Handle form submission and basic validations
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    // Username validation
    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        isValid = false;
    }

    // Email validation
    if (email.trim() === "" || !email.includes("@")) {
        document.getElementById("emailError").innerText = "Valid email is required";
        isValid = false;
    }

    // Password and Confirm Password validation will be handled in 30-01-2025-TASK.js

    // If form is valid, show success and reset
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();  // Reset the form fields
    }
});