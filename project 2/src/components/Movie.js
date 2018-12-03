import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie, listid}) => {
    
    return (
        <div className="media content-container">
            <div className="movie-image">
                <img
                    className='image' listid={listid}
                    src={`https://in.bmscdn.com/events/moviecard/${movie.EventCode}.jpg`}
                    alt="Loading.."/>
                <div className='bottom-right'>
                    <strong><i className="fa fa-thumbs-up green" aria-hidden="true"></i>{movie.wtsPerc}%</strong>
                </div>
                <div className='centered'>
                    <i className="fa fa-play-circle-o custom fa-3x"></i>
                </div>
            </div>
            <div className="name">{movie.EventTitle}</div>
        </div>

    )
}

Movie.propTypes ={
    movie: PropTypes.object.isRequired,
    listid: PropTypes.string.isRequired
}

export default Movie;
