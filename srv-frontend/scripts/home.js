const searchButton = document.getElementById('filterButton');
const searchInput = document.getElementById('searchInput');
const resultContainer = document.getElementById('results');
const mapElement = document.getElementById('map');

searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    try {
        const response = await fetch(`http://localhost:8000/artisan/search?query=${query}`);
        const artisans = await response.json();
        
        resultContainer.innerHTML = '';
        artisans.forEach(artisan => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `
                <img src="${artisan.image}" alt="${artisan.name}">
                <h2>${artisan.name}</h2>
                <p>${artisan.description}</p>
            `;
            div.addEventListener('click', () => {
                window.location.href = `artisan-profile.html?id=${artisan.id}`;
            });
            resultContainer.appendChild(div);
        })

        initMap(artisans);
    } catch (error) {
        console.error('Error searching:', error);
    }
}
);

function initMap(artisans = []) {
    const map = new google.maps.Map(mapElement, {
        zoom: 12,
        center: { lat: -1.9579, lng: 30.1019 } // Kigali coordinates
    });

    artisans.forEach(artisan => {
        new google.maps.Marker({
            position: { lat: artisan.latitude, lng: artisan.longitude },
            map,
            title: artisan.name
        });
    });
}

initMap();
