// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Example of form submission handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Add your login logic here

            alert(`Login attempted with email: ${email}`);
        });
    }
});
