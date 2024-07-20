import React from "react";
import BookingForm from "../components/Bookings/BookingForm";
import './Bookings.css';

function BookingPage() {
    const [bookings, setBookings] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/api/bookings')
            .then(response => response.json())
            .then(data => setBookings(data));
    }, []);

    return (
        <div className="bookings">
            <h2>Bookings</h2>
            <BookingForm />
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>{booking.date} - {booking.time}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookingPage;