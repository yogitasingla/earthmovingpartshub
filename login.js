document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Hardcoded correct username and password
    const correctUsername = 'admin';
    const correctPassword = 'password123';
    
    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Get the error message element
    const errorMessage = document.getElementById('errorMessage');
    
    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to new page
        window.location.href = 'index1.html';
    } else {
        // Display error message
        errorMessage.textContent = 'Incorrect username or password. Please try again.';
    }
});
