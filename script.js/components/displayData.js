// Este arquivo lidará com a manipulação do DOM.
import {updatePaginationControls} from "../components/paginationControls.js"

export const displayResults = (results, page = 1, resultsPerPage = 10) => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';

    if (results.length === 0) {
        dataContainer.innerHTML = '<tr><td colspan="4">No results found</td></tr>';
        return;
    }

    const start = (page - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    const paginatedResults = results.slice(start, end);

    paginatedResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.title}</td>
            <td>${result.usAirDate || 'N/A'}</td>
            <td>${result.seasonNumber || 'N/A'}</td>
            <td>${result.episodeNumber || 'N/A'}</td>
        `;
        dataContainer.appendChild(row);
    });

    updatePaginationControls(results.length, page, resultsPerPage);
};



