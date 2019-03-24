import axios from 'axios';

export const GET_TRENDING_START = 'GET_TRENDING_START';
export const GET_TRENDING_SUCCESS = 'GET_TRENDING_SUCCESS';
export const GET_TRENDING_FAIL = 'GET_TRENDING_FAIL';

export const SEARCH_GIF_START = 'SEARCH_GIF_START';
export const SEARCH_GIF_SUCCESS = 'SEARCH_GIF_SUCCESS';
export const SEARCH_GIF_FAIL = 'SEARCH_GIF_FAIL';

export const GET_BY_ID_START = 'GET_BY_ID_START';
export const GET_BY_ID_SUCCESS = 'GET_BY_ID_SUCCESS';
export const GET_BY_ID_FAIL = 'GET_BY_ID_FAIL';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const LOCAL_TO_FAVORITES = 'LOCAL_TO_FAVORITES';

export const DISPLAY_GIF_MODAL = 'DISPLAY_GIF_MODAL';
export const REMOVE_GIF_MODAL = 'REMOVE_GIF_MODAL';

const hostUrl = 'https://api.giphy.com';
const apiKey = '7F4kv7bFrEvWyUuREIDfMkSPsdFm36Hr'; // my personal api key from GIPHY

// Get the top 25 trending GIFs api
// Use {gif}.images.original.url to display in the
export const getTrendingGIFS = () => dispatch => {
    dispatch({ type: GET_TRENDING_START });

    axios
        .get(`${hostUrl}/v1/gifs/trending?api_key=${apiKey}&limit=30`)
        .then(res => {
            dispatch({ type: GET_TRENDING_SUCCESS, payload: res.data.data });
        })
        .catch(err => {
            dispatch({ type: GET_TRENDING_FAIL, error: err });
        });
};

// Search for specific GIFs api
export const searchGIFS = searchItem => dispatch => {
    dispatch({ type: SEARCH_GIF_START });

    axios
        .get(`${hostUrl}/v1/gifs/search?q=${searchItem}&api_key=${apiKey}`)
        .then(res => {
            dispatch({ type: SEARCH_GIF_SUCCESS, payload: res.data.data });
        })
        .catch(err => {
            dispatch({ type: SEARCH_GIF_FAIL, error: err });
        });
};

// Add GIF to favorites
export const addToFavorites = gif => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.push(gif);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    return { type: ADD_TO_FAVORITES, payload: favorites };
};

// Remove GIF from favorites
export const removeFromFavorites = gif => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const updatedFave = favorites.filter(
        res => res.id.toString() !== gif.id.toString()
    );
    localStorage.setItem('favorites', JSON.stringify(updatedFave));

    return {
        type: REMOVE_FROM_FAVORITES,
        payload: updatedFave,
    };
};

// Store local storage favorites to Redux Store
export const localToFave = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    return { type: LOCAL_TO_FAVORITES, payload: favorites };
};

// Add gif info to store
export const openGifModal = gif => {
    return { type: DISPLAY_GIF_MODAL, payload: gif };
};

// Remove gif info from store
export const removeGifModal = () => {
    return { type: REMOVE_GIF_MODAL };
};
