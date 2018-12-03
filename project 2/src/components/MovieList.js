import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <React.Fragment>
        {
            props.movies.map((movie) =>{
                return <Movie movie={movie} key={movie.EventCode} listid={movie.EventCode} />
            })
        } 
    </React.Fragment>
  )
}

MovieList.propTypes={
    movies: PropTypes.array.isRequired
}


export default MovieList
