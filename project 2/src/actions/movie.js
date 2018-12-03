import * as types from '../constants/actionTypes';

const request = 'https://cors-anywhere.herokuapp.com/https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs';

function handleErrors(response) {
    if (!response.ok) {
        console.log('error handler')
        throw Error(response.statusText);
    }
    return response;
}

export const setLanguages =(languages) =>({
    type: types.SET_LANGUAGES,
    languages
})

export const fetchMovies =(movies) =>({
    type: types.FETCH_MOVIES,
    movies
})

export const thunkMovies =(dispatch) =>{
    return (dispatch, getState) =>{
        fetch(request)
        .then(handleErrors)
        .then(res => res.json())
        .then( (data) =>{
            //data is array having another array at index 0 and at index 1 having an object
            //every property in object is a new movie
            dispatch(fetchMovies(data[1]));
            dispatch(setLanguages(data[0]));

        }).catch((error) =>{
            console.log('error:', error);
        })

    }
}