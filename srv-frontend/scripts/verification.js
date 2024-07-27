document.getElementById('verificationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    // const email = document.getElementById('email').value;
    const verificationCode = document.getElementById('verificationCode').value;
    // const form = document.getElementById('verificationForm');
    // const formData = new FormData(form);

    // // create ajax request
    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', 'http://localhost:8000/auth/verify');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // xhr.onload = function () {
    //     if (xhr.status === 200 || 201){
    //         const response = xhr.responseText;
    //         message = JSON.parse(response).message;
    //         alert(message);
    //     }
    // }

    // xhr.send(new URLSearchParams(formData));
    // console.log('verificationCode:', verificationCode);
    try {
        const response = await fetch('http://localhost:8000/auth/verify', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ verificationCode })
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