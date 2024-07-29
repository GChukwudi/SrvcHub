const resultContainer = document.getElementById("profileDetails");

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const editProfileModal = document.getElementById("editProfileModal");
  const editProfileBtn = document.getElementById("edit-button");
  const editProfileForm = document.getElementById("editProfileForm");
  const closeModal = document.getElementsByClassName("close")[0];

  async function getUserProfile() {
    const token = localStorage.getItem("token");

    const url =
      (`https://srvchub-api.onrender.com/auth/profile`);

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await response.json();

      console.log("user:", user);

      if (user) {
        resultContainer.innerHTML = "";
        const div = document.createElement("div");
        div.className = "result-profile";
        div.id = user.id;
        div.innerHTML = `
                    <img src="${user.imageProfile}" alt="${user.name}">
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                    <p>${user.address}</p>
                `;

        resultContainer.append(div);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      alert("Failed to fetch user profile");
    }
  }


  editProfileBtn.onclick = function () {
    editProfileModal.style.display = "block";
  };

  closeModal.onclick = function () {
    editProfileModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == editProfileModal) {
      editProfileModal.style.display = "none";
    }
  };

  editProfileForm.onsubmit = async function (event) {
    event.preventDefault();

    const updatedProfile = {
      name: document.getElementById("edit-name").value,
      email: document.getElementById("edit-email").value,
      imageProfile: document.getElementById("edit-image").value,
    //   phone: document.getElementById("edit-phone").value,
      address: document.getElementById("edit-address").value,

    };

    try {
      const response = await fetch(`https://srvchub-api.onrender.com/auth/editprofile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        editProfileModal.style.display = "none";
        getUserProfile();
      } else {
        console.error("Error updating profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
  });

  const getBookings = async () => {
    const token = localStorage.getItem("token");

    const url = `https://srvchub-api.onrender.com/booking/mybooking`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const bookings = await response.json();
        console.log('bookings:', bookings);
        // write bookings to display on calendar
        bookings.forEach(booking => {
            calendar.addEvent({
                title: 'Booking',
                start: booking.date,
                allDay: true
            });
        });
    }
    catch (error) {
        console.error('Error fetching bookings:', error);
    }
    }


    getBookings();
    calendar.render();
    getUserProfile();
});
