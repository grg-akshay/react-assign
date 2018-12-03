import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const Trailer = (props) => {
    const url = props.movie.TrailerURL;
    return (
        <div className='content'>
            <div className='trailer-container'>
                <ReactPlayer url={url} playing controls={true}/>
                <section className='trailer-name'>
                    <strong>{props.movie.EventTitle}</strong>
                    <div className='trailer-name__rest'>
                        <div>
                            {props.movie.EventLanguage}
                        </div>
                        <div className='trailer-genre'>
                            {
                              props.movie.EventGenre.split('|').map((genre, index) => {
                                    return <small className='trailer-genre__item' key={index}>{genre}</small>
                              })
                            } 
                        </div>
                        <div className='trailer-genre'>
                            <i className="fa fa-calendar " aria-hidden="true"></i>
                            &nbsp;&nbsp;{props.movie.ShowDate}
                        </div>
                        <div>
                            {`${props.movie.csCount} Total Votes`}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

Trailer.propTypes={
  movie: PropTypes.object.isRequired
}

export default Trailer;