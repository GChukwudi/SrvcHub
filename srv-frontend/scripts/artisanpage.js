const { error } = require("console")

const resultContainer = document.getElementById('profileDetails')
const bookingform = document.getElementById('bookingForm')
const dateInput = document.getElementById('date')
const calendarEl = document.getElementById('calendar')


document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const artisanId = urlParams.get('id');
    
    if (artisanId) {
        const url = `http://localhost:8000/artisan/${artisanId}`;
        try {
            const response = await fetch(url);
            const artisan = await response.json();

            if (artisan) {
                resultContainer.innerHTML = "";
                const div = document.createElement("div");
                div.className = "result-artisan";
                div.id = artisan.id;
                div.innerHTML = `
                    <img src="${artisan.image}" alt="${artisan.name}">
                    <h2>${artisan.name}</h2>
                    <p>${artisan.category}</p>
                    <p>${artisan.location}</p>
                    <p>${artisan.contact}</p>
                    <p>${artisan.bio}</p>
                `;

                resultContainer.append(div);
            }
        } catch (error) {
            console.error('Error fetching artisan profile:', error);
            alert('Failed to fetch artisan profile');
        }
    }

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function(info) {
            dateInput.value = info.dateStr;
            bookingform.style.display = 'block';
        }
    });

    calendar.render();

    bookingform.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(bookingform);
        const booking = {
            artisanId,
            date: formData.get('date'),
            time: formData.get('time'),
            location: formData.get('location')
        };
        try {
            const url = `http://localhost:8000/booking/create`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingDetails)
            });
            if (response.ok){
                alert('Booking created successfully');
                bookingform.style.display = 'none';
            } else {
                alert(`Failed to create booking: ${error}`);
            }
        } catch (error) {
            console.error('Error creating booking:', error);
            alert('Failed to create booking');
        }
    });

});