import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setTrailer}  from '../actions/trailer';
import MovieList from '../components/MovieList';

const MovieListContainer = (props) => {
    return (
        <div
            className="flex-container background"
            onClick={(evt) => {
                console.log('clicked');
                props.setTrailer(evt);
                window.scrollTo(0,0);
            }
        }>
            <MovieList  movies={props.movies} />
        </ div>
    )
}

MovieListContainer.propTypes={
    movies: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({movies: Object.values(state.movies)})

const mapDispatchToProps = (dispatch) =>{
    return {
        setTrailer: (evt) =>{
                        if(evt.target.className==='image'){
                            const val=evt.target.getAttribute('listid');
                            console.log('vals', val);
                            dispatch(setTrailer(val));
                        }
                    }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
