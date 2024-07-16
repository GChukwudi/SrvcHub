import React, { useState } from "react";
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    };

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;