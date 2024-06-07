import { handleSearch, handleToggleSort } from '../handlers/filterHandler/filterHandler.js';
import { addPaginationListeners } from '../handlers/paginationHandlers/setPageSizeHandler.js';

export const addListeners = () => {
    const searchButton = document.getElementById('submit-btn');
    const sortButton = document.getElementById('toggle-sort-btn');

    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    } else {
        console.error(`Button with id 'submit-btn' not found`);
    }

    if (sortButton) {
        sortButton.addEventListener('click', handleToggleSort);
    } else {
        console.error(`Sort button with id 'toggle-sort-btn' not found`);
    }

    addPaginationListeners();
};
