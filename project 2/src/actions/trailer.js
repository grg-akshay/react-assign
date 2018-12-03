import * as types from '../constants/actionTypes';

export const setTrailer =(trailer) =>({
    type: types.SET_TRAILER,
    trailer
});