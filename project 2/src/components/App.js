import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MovieListContainer from '../containers/MovieListContainer';
import TrailerContainer from '../containers/TrailerContainer';

const App = (props) => {
  return (
   <div >
        <Header/>
        {
            props.trailer 
            &&  
            <TrailerContainer trailerId={props.trailer}  />
        }
        <MovieListContainer/>
    </ div>
  )
}

App.propTypes ={
    trailer: PropTypes.string.isRequired,
}

export default App;