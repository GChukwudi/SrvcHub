
const resultContainer = document.getElementById('profileDetails')

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const artisanId = urlParams.get('id');
    console.log('artisanId', artisanId);
    
    if (artisanId) {
        const url = `http://localhost:8000/artisan/${artisanId}`;
        try {
            const response = await fetch(url);
            const artisan = await response.json();

            console.log('artisan', artisan);

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
});