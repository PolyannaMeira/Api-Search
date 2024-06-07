import { handlePageClick } from '../paginationHandlers/setPageNumberHandler.js';

export const addPaginationListeners = () => {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const page = Number(event.target.textContent);
            handlePageClick(page);
        }
    });
};
