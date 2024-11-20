document.addEventListener('DOMContentLoaded', function() {
    const suggestions = ['Song 1', 'Song 2', 'Song 3'];
    const searchInput = document.querySelector('#search-input');
    const suggestionsList = document.querySelector('#suggestions-list');

    searchInput.addEventListener('input', function() {
        suggestionsList.innerHTML = '';
        const query = searchInput.value.toLowerCase();
        const filteredSuggestions = suggestions.filter(suggestion => 
            suggestion.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            suggestionsList.appendChild(li);
        });
    });
});
