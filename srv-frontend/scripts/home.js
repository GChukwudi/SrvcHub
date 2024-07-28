const searchButton = document.getElementById("filterButton");
const searchInput = document.getElementById("searchInput");
const resultContainer = document.getElementById("results");
const mapElement = document.getElementById("map");

let artisans;

async function loadArtisans() {
  const response = await fetch("http://localhost:8000/artisan/all");
  artisans = await response.json();

  if (artisans) {
    resultContainer.innerHTML = "";

    artisans.forEach((artisan) => {
      const div = document.createElement("div");
      div.className = "result-item";
      div.id = artisan.id;
      div.innerHTML = `
                <img src="${artisan.image}" alt="${artisan.name}">
                <h2>${artisan.name}</h2>
                <p>${artisan.category}</p>
                <p>${artisan.location}</p>
                <p>${artisan.contact}</p>
                <p>${artisan.bio}</p>
            `;
      div.addEventListener("click", () => {
        window.location.href = `artisanprofile.html?id=${artisan._id}`;
      });
      resultContainer.appendChild(div);
    });
  }
}

loadArtisans();

searchButton.addEventListener("click", async () => {
  const query = searchInput.value;
  const url = `http://localhost:8000/artisan/search?location=${query}`;

  console.log("url", url);
  try {
    const response = await fetch(url);
    artisans = await response.json();

    console.log("Artisans:", artisans);

    resultContainer.innerHTML = "";
    if (!artisans) {
      resultContainer.innerHTML = "<h2>No results found</h2>";
      return;
    } else {
      artisans.forEach((artisan) => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.innerHTML = `
                      <img src="${artisan.image}" alt="${artisan.name}">
                      <h2>${artisan.name}</h2>
                      <p>${artisan.category}</p>
                      <p>${artisan.location}</p>
                      <p>${artisan.contact}</p>
                      <p>${artisan.bio}</p>
                  `;
        div.addEventListener("click", () => {
          window.location.href = `artisanprofile.html?id=${artisan._id}`;
        });
        resultContainer.appendChild(div);
      });
    }

    initMap(artisans);
  } catch (error) {
    console.error("Error searching:", error);
  }
});

function initMap(artisans = []) {
  const map = new google.maps.Map(mapElement, {
    zoom: 12,
    center: { lat: -1.9579, lng: 30.1019 }, // Kigali coordinates
  });

  artisans.forEach((artisan) => {
    new google.maps.Marker({
      position: { lat: artisan.latitude, lng: artisan.longitude },
      map,
      title: artisan.name,
    });
  });
}

initMap();

// menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});