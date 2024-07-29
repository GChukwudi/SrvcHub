document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            try {
                const response = await fetch(`https://srvchub-api.onrender.com/auth/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });
                const result = await response.json();
                if (response.ok) {
                    alert('Signup successful! Please check your email for a verification code');
                    window.location.href = 'verify.html';
                } else {
                    if (result.message === 'User already exists') {
                        alert('User already exists');
                    } else {
                        alert('An error occurred. Please try again later');
                    }
                }
            } catch (error) {
                console.error('Error signing up:', error);
            }
        });
    }
}
);