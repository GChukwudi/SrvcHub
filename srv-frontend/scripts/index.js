const  searchInput = document.getElementById('searchInput');
const filterBtn = document.querySelector('.filter-btn');
const resultContainer = document.getElementById('results');


document.addEventListener('DOMContentLoaded', async () => {
    filterBtn.addEventListener('click', async () => {
        const query = searchInput.value;
        const url = `https://srvchub-api.onrender.com/artisan/search?category=${query}`;
        console.log('url', url);

        try {
            const response = await fetch(url);
            artisans = await response.json();

            console.log('Artisans:', artisans);

            resultContainer.innerHTML = '';
            if (!artisans) {
                resultContainer.innerHTML = '<h2>No results found</h2>';
                return;
            } else {
                artisans.forEach((artisan) => {
                    const div = document.createElement('div');
                    div.className = 'result-item';
                    div.innerHTML = `
                        <img src="${artisan.image}" alt="${artisan.name}">
                        <h2>${artisan.name}</h2>
                        <p>${artisan.category}</p>
                        <p>${artisan.location}</p>
                        <p>${artisan.contact}</p>
                        <p>${artisan.bio}</p>
                    `;
                    div.addEventListener('click', () => {
                        window.location.href = `artisanprofile.html?id=${artisan._id}`;
                    });
                    resultContainer.appendChild(div);
                });
            }
        } catch (error) {
            console.error('Error fetching artisans:', error);
        }
    })
})
