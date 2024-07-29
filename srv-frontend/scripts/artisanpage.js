// const { error } = require("console")

const resultContainer = document.getElementById('profileDetails')
const bookingform = document.getElementById('bookingForm')
const dateInput = document.getElementById('date')
const calendarEl = document.getElementById('calendar')
const resultCraft = document.getElementById('artisanCrafts')
const overlay = document.getElementById('overlay')


document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const artisanId = urlParams.get('id');

    // const userId = localStorage.getItem('userId');
    
    if (artisanId) {
        const url = `https://srvchub-api.onrender.com/artisan/${artisanId}`;
        try {
            const response = await fetch(url);
            const artisan = await response.json();

            if (artisan) {
                resultContainer.innerHTML = "";
                const div = document.createElement("div");
                div.className = "result-artisan";
                div.id = artisan.id;
                div.innerHTML = `
                    <img src="${artisan.image}" alt="${artisan.name} vo">
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

    if (artisanId) {
        const url = `https://srvchub-api.onrender.com/artisan/${artisanId}`;
        try {
            const response = await fetch(url);
            const artisan = await response.json();

            if (artisan) {
                resultCraft.innerHTML = "";
                const div = document.createElement("div");
                div.className = "result-craft";
                div.id = artisan.id;
                
                artisan.previousWork.forEach(url => {
                    const img = document.createElement("img");
                    img.src = url;
                    div.append(img);
                });                
                resultCraft.append(div);
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
            overlay.style.display = 'block';
        }
    });

    calendar.render();

    overlay.addEventListener('click', () => {
        bookingform.style.display = 'none';
        overlay.style.display = 'none';
    });

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
            const url = `https://srvchub-api.onrender.com/booking/create`;
            const token = localStorage.getItem('token');
            console.log('token:', token);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(booking)
            });
            if (response.ok){
                alert('Booking created successfully');
                bookingform.style.display = 'none';
            } else {
                alert(`Failed to create booking: ${error}`);
                bookingform.style.display = 'none';
            }
        } catch (error) {
            console.error('Error creating booking:', error);
            alert('Failed to create booking');
        } finally {
            bookingform.style.display = 'none';
            overlay.style.display = 'none';
        }
    });

});