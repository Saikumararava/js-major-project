document.addEventListener('DOMContentLoaded', function () {
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');

    // Toggle between login and signup forms
    signupLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginBox.classList.remove('active');
        signupBox.classList.add('active');
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        signupBox.classList.remove('active');
        loginBox.classList.add('active');
    });

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (e) {
        //stop the default action of an event from occurring
        e.preventDefault(); 

        //user input
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Checking if user exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // Redirect to the index shopping page
            window.location.href = 'index.html';
        } else {
            //gives alret 
            alert('Invalid username or password');
        }
    });

    // Handle signup form submission
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting to server

        // Get user input
        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser  = users.find(user => user.username === username);

        if (existingUser ) {
            alert('Username already exists. Please choose another one.');
        } else {
            // Save new user to local storage
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            // Redirect to the index shopping page after signup
            window.location.href = 'index.html';
        }
    });
});