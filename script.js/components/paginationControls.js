import { handlePageClick } from '../handlers/paginationHandlers/setPageNumberHandler.js';
import { MAX_PAGES } from '../config.js';


export const updatePaginationControls = (totalResults, currentPage, resultsPerPage) => {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = '';

    const totalPages = Math.min(Math.ceil(totalResults / resultsPerPage), MAX_PAGES);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.disabled = true;
        }
        pageButton.addEventListener('click', () => handlePageClick(i));
        paginationControls.appendChild(pageButton);
    }
};

export const addPaginationListeners = () => {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const page = Number(event.target.textContent);
            handlePageClick(page);
        }
    });
};
