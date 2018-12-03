import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { thunkMovies } from '../actions/movie';
import App from '../components/App';

class AppContainer extends Component {

    componentDidMount(){
        this.props.fetchMovies();
    }

  render() {
    return (
        <App trailer={this.props.trailer} />
    )
  }
}

AppContainer.propTypes={
    trailer: PropTypes.string.isRequired,
    fetchMovies: PropTypes.func.isRequired
}

const mapStateToProps =(state) =>{
    return {
        trailer: state.trailer
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        fetchMovies: () => dispatch(thunkMovies(dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);