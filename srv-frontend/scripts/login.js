document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    try {
        const response = await fetch('https://srvchub-api.onrender.com/auth/signin', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (response.ok) {
            localStorage.setItem('token', result.token);
            window.location.href = 'home.html';
        } else {
            if (result.message === 'User not found') {
                alert('User not found');
            } else if (result.message === 'Invalid password') {
                alert('Invalid password');
            } else {
                alert('An error occurred');
            }

            console.error('Error logging in:', result.message);
        }
    }catch (error) {
        console.error('Error logging in:', error);
    }
});
