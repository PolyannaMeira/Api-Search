import { fetchData } from "../../api-calls/apiService.js";
import { setCurrentResults } from '../paginationHandlers/setPageNumberHandler.js';

let sortOrderAsc = true; // Flag to keep track of sort order

export const handleSearch = async () => {
    const input = document.getElementById('filter-input').value.trim();

    if (!input) {
        console.log('Please enter a valid search term');
        return;
    }

    try {
        const results = await fetchData(input);
        const filteredResults = results.filter(result => result.title.toUpperCase().startsWith(input.toUpperCase()));
        setCurrentResults(filteredResults);
    } catch (error) {
        console.log(error.message);
    }
};

export const handleToggleSort = () => {
    sortOrderAsc = !sortOrderAsc; // Toggle the sort order
    const dataContainer = document.getElementById('data-container');
    const rows = Array.from(dataContainer.children);

    rows.sort((a, b) => {
        const titleA = a.children[0].textContent.toUpperCase();
        const titleB = b.children[0].textContent.toUpperCase();
        if (titleA < titleB) return sortOrderAsc ? -1 : 1;
        if (titleA > titleB) return sortOrderAsc ? 1 : -1;
        return 0;
    });

    dataContainer.innerHTML = '';
    rows.forEach(row => dataContainer.appendChild(row));
};
