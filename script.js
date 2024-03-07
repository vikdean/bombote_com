function performSearch() {
    const query = document.getElementById('search-bar').value;
    if (query) {
        // Make an AJAX request to fetch search results
        fetchSearchResults(query);
    }
}

async function fetchSearchResults(query) {
    try {
        const response = await fetch(`https://www.rtings.com/search?q=${encodeURIComponent(query)}`);
        if (response.ok) {
            const data = await response.text();
            // Display the results in the search-results div
            document.getElementById('search-results').innerHTML = data;
        } else {
            console.error('Error fetching search results:', response.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
