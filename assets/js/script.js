document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username or password is empty
    if (username === "" || password === "") {
        // Display error message for empty values
        document.getElementById("error").style.display = "none";
        document.getElementById("emptyError").style.display = "block";
    } else if (username === "admin@afrg.com" && password === "123456") {
        // Perform successful login action
        window.location.href = "Documents-page.html";
    } else {
        // Display error message for invalid credentials
        document.getElementById("emptyError").style.display = "none";
        document.getElementById("error").style.display = "block";
    }
});
