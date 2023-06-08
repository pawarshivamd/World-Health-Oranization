document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password match
    if (username === "admin@afrg.com" && password === "123456") {
        // Perform successful login action
        window.location.href = "Documents-page.html";
    } else {
        // Display error message
        document.getElementById("error").style.display = "block";
    }
});