document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    const loginForm = document.getElementById("login-form");

    // Function to handle user login
    function loginUser(username, password) {
        fetch("https://khmer-shoping.onrender.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then((data) => {
            alert("Login successful!");
            console.log("Logged in user:", data);
            // Here you can redirect the user to another page or perform other actions
        })
        .catch((error) => {
            console.error("Error logging in:", error);
            alert("Login failed. Please check your credentials.");
        });
    }

    // Event listener for login form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username && password) {
            loginUser(username, password);
        } else {
            alert("Please enter both username and password");
        }
    });
});
