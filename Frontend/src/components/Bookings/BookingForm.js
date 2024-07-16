import React, { useState } from "react";
import './BookingForm.css';

function BookingForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, time }),
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div className="booking-form">
            <h2>Book an appointment</h2>
            <form onSubmit={handleSubmit}>
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
                <button type="submit">Book</button>
            </form>
        </div>
    );
}

export default BookingForm;