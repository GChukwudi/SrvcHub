const  searchInput = document.getElementById('searchInput');
const filterBtn = document.querySelector('.filter-btn');
const resultContainer = document.createElement('div');


document.addEventListener('DOMContentLoaded', async () => {
    resultContainer.classList.add('resultsContainer');

    filterBtn.addEventListener('click', async () => {
        const query = searchInput.value.trim();
        if (query === '') {
            alert('Please enter a search query');
            return;
        }

        try {
            const response = await fetch(`https://srvchub-api.onrender.com/search?q=
        } catch (error) {
            console.error('Error searching:', error);
        }

    });
})
