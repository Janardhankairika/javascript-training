// Password Validation: Must contain uppercase, lowercase, number, special character, and be at least 6 characters long
document.getElementById("myForm").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let isValid = true;

    // Password validation
    if (!password.match(/[A-Z]/)) {
        document.getElementById("passwordError").innerText = "Password must contain at least one uppercase letter";
        isValid = false;
    } else if (!password.match(/[a-z]/)) {
        document.getElementById("passwordError").innerText = "Password must contain at least one lowercase letter";
        isValid = false;
    } else if (!password.match(/[0-9]/)) {
        document.getElementById("passwordError").innerText = "Password must contain at least one number";
        isValid = false;
    } else if (!password.match(/[\W_]/)) {
        document.getElementById("passwordError").innerText = "Password must contain at least one special character";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long";
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
});