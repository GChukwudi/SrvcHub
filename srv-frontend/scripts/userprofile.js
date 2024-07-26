document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const editProfileModal = document.getElementById('editProfileModal');
    const editProfileBtn = document.getElementById('edit-button');
    const editProfileForm = document.getElementById('editProfileForm');
    const closeModal = document.getElementsByClassName('close')[0];

    async function getUserProfile() {
        try {
            const response = await fetch('/api/user/profile'); // Add the actual route to get user profile
            const data = await response.json();

            document.getElementById('name').innerHTML = data.name;
            document.getElementById('email').innerHTML = data.email;
            document.getElementById('phone').innerHTML = data.phone;
            document.getElementById('address').innerHTML = data.address;

            document.getElementById('edit-name').value = data.name;
            document.getElementById('edit-email').value = data.email;
            document.getElementById('edit-phone').value = data.phone;
            document.getElementById('edit-address').value = data.address;
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    editProfileBtn.onclick = function() {
        editProfileModal.style.display = 'block';
    }

    closeModal.onclick = function() {
        editProfileModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    }

    editProfileForm.onsubmit = async function(event) {
        event.preventDefault();

        const updatedProfile = {
            name: document.getElementById('edit-name').value,
            email: document.getElementById('edit-email').value,
            phone: document.getElementById('edit-phone').value,
            address: document.getElementById('edit-address').value,
        };

        try {
            const response = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProfile),
            });

            if (response.ok) {
                editProfileModal.style.display = 'none';
                getUserProfile();
            } else {
                console.error('Error updating profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: '/api/user/appointments' // Add the actual route to get user appointments
    });

    calendar.render();
    getUserProfile();
});
