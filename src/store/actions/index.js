import axios from 'axios';

export const GET_TRENDING_START = 'GET_TRENDING_START';
export const GET_TRENDING_SUCCESS = 'GET_TRENDING_SUCCESS';
export const GET_TRENDING_FAIL = 'GET_TRENDING_FAIL';
export const SEARCH_GIF_START = 'SEARCH_GIF_START';
export const SEARCH_GIF_SUCCESS = 'SEARCH_GIF_SUCCESS';
export const SEARCH_GIF_FAIL = 'SEARCH_GIF_FAIL';

const hostUrl = 'http://api.giphy.com';
const apiKey = '7F4kv7bFrEvWyUuREIDfMkSPsdFm36Hr'; // my person api key from GIPHY

// Get the top 25 trending GIFs api
// Use {gif}.images.original.url to display in the
export const getTrendingGIFS = () => dispatch => {
    dispatch({ type: GET_TRENDING_START });

    axios
        .get(`${hostUrl}/v1/gifs/trending?api_key=${apiKey}`)
        .then(res => {
            console.log('getTrendingGIFS res.data: ', res.data.data);
            dispatch({ type: GET_TRENDING_SUCCESS, payload: res.data.data });
        })
        .catch(err => {
            console.log('Get trending gifs error: ', err);
            dispatch({ type: GET_TRENDING_FAIL, error: err });
        });
};

// Search for specific GIFs api
export const searchGIFS = searchItem => dispatch => {
    dispatch({ type: SEARCH_GIF_START });

    axios
        .get(`${hostUrl}/v1/gifs/search?q=${searchItem}&api_key=${apiKey}`)
        .then(res => {
            console.log('searchGIFS res.data: ', res.data.data);
            dispatch({ type: SEARCH_GIF_SUCCESS, payload: res.data.data });
        })
        .catch(err => {
            console.log('Search gifs error: ', err);
            dispatch({ type: SEARCH_GIF_FAIL, error: err });
        });
};
