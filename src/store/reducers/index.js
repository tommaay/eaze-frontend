import {
    GET_TRENDING_START,
    GET_TRENDING_SUCCESS,
    GET_TRENDING_FAIL,
    SEARCH_GIF_START,
    SEARCH_GIF_SUCCESS,
    SEARCH_GIF_FAIL,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    LOCAL_TO_FAVORITES,
    DISPLAY_GIF_MODAL,
    REMOVE_GIF_MODAL,
} from '../actions';

const initialState = {
    gifs: [],
    favorites: [],
    fetchLoading: false,
    error: null,
    gifContent: {},
    displayModal: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get Trending GIFs
        case GET_TRENDING_START:
            return {
                ...state,
                loading: true,
            };

        case GET_TRENDING_SUCCESS:
            return {
                ...state,
                loading: false,
                gifs: action.payload,
            };

        case GET_TRENDING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Search Gifs
        case SEARCH_GIF_START:
            return {
                ...state,
                loading: true,
            };

        case SEARCH_GIF_SUCCESS:
            return {
                ...state,
                loading: false,
                gifs: action.payload,
            };

        case SEARCH_GIF_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Favorites - Add / Remove
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
            };

        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
            };

        case LOCAL_TO_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
            };

        // Add / Remove GIF content
        case DISPLAY_GIF_MODAL:
            return {
                ...state,
                gifContent: action.payload,
                displayModal: true,
            };

        case REMOVE_GIF_MODAL:
            return {
                ...state,
                gifContent: {},
                displayModal: false,
            };

        default:
            return state;
    }
};

export default rootReducer;
