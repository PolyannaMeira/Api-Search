import { displayResults } from "../../components/displayData.js";
import { RESULTS_PER_PAGE } from '../../config.js';

let currentPage = 1;
let currentResults = [];

export const handlePageClick = (page) => {
    currentPage = page;
    displayResults(currentResults, currentPage, RESULTS_PER_PAGE);
};

export const setCurrentResults = (results) => {
    currentResults = results;
    currentPage = 1; 
    displayResults(currentResults, currentPage, RESULTS_PER_PAGE);
};
