import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Trailer from '../components/Trailer';

const TrailerContainer = (props) => {

    return (
        <Trailer movie={props.movie}/>
    )
}

TrailerContainer.propTypes={
    movie: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    movie: state.movies[ownProps.trailerId]
});

export default connect(mapStateToProps)(TrailerContainer);