document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Here you would typically send an AJAX request to the server to check if the username already exists
        // For demonstration purposes, let's assume the username check is successful
        // You should replace this with actual server-side logic
        const usernameExists = false; // Assume username does not exist

        if (usernameExists) {
            alert("Username already exists. Please choose a different username.");
            return;
        }

        // Registration successful
        alert("Registration Successful!");
        // Redirect to login page
        window.location.href = "login.html";
    });
});
