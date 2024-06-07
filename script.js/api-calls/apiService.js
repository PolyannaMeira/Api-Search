// Este arquivo lidará com as chamadas à API.

import { BASE_URL, RESULTS_PER_PAGE, MAX_PAGES } from '../config.js';

export const fetchData = async (searchValue = '', limit = 20) => {
    const params = {
        title: searchValue,
        pageSize: RESULTS_PER_PAGE * MAX_PAGES,
    };

    let url = BASE_URL + '?';

    Object.keys(params).forEach((key) => {
        url += '&' + key + '=' + encodeURIComponent(params[key]);
    });

    try {
        const response = await fetch(url, { method: 'POST' }); // Mudança para POST
        if (!response.ok) {
            console.log(response.statusText);
            throw new Error(response.statusText);
        }

        const parsedResponse = await response.json();
        return parsedResponse.episodes; // Ajuste para a estrutura de resposta da API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
