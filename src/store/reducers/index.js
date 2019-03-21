import {
    GET_TRENDING_START,
    GET_TRENDING_SUCCESS,
    GET_TRENDING_FAIL,
} from '../actions';

const initialState = {
    gifs: [],
    fetchLoading: false,
    error: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return {};

        default:
            return state;
    }
};

export default rootReducer;
