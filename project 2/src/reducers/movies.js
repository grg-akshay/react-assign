import * as types from '../constants/actionTypes';

const defaultState = {
    movies: {},
    languages: [],
    trailer: ''//this will store EventCode of the movie for which trailer is to be seen
};

export const moviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIES:
            return {
                ...state,
                movies: {...state.movies, ...action.movies}
            }

        case types.SET_LANGUAGES:
            return {
                ...state,
                languages: action.languages
            }

        case types.SET_TRAILER:
            return {
                ...state,
                trailer: action.trailer
            }
        default:
            return state;
    }
}