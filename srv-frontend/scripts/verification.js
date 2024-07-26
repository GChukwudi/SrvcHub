document.getElementById('verificationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const code = document.getElementById('code').value;
    try {
        const response = await fetch('http://localhost:8000/auth/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, code })
        });
        const result = await response.json();
        if (response.ok) {
            alert('Verification successful! Please log in');
            window.location.href = 'login.html';
        } else {
            if (result.message === 'Invalid code') {
                alert('Invalid code');
            } else {
                alert('An error occurred. Please try again later');
            }
        }
    } catch (error) {
        console.error('Error verifying code:', error);
    }
}
);